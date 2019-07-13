// pages/punchcard/index.js
import regeneratorRuntime from '../../utils/runtime.js'; // eslint-disable-line
import {
  getNowDate,
  getApiData,
  judgeNextWeekCanGet,
  promisify,
  gpsDistance,
} from '../../utils/util';
import {
  checkinQuery,
  checkinUrl,
} from '../../utils/config';

import {
  wifiList,
  range,
  companyLonlat,
} from '../../utils/dkConfig';

let openid = null;
let nowDate = null;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeZao: null,
    timeWan: null,
    nowTimeWeek: null,
    isNow: true,
    isCurWifi: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    openid = wx.getStorageSync('myopenid');
    nowDate = getNowDate();
    this.setData({
      endTime: nowDate,
      date: nowDate,
      nowDateWeek: nowDate,
    });
    await this.getPunchcardInfo(nowDate);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  async onShow() {
    // 获取wifi连接信息
    await this.getConnectWifi();
    // 判断早上下午
    const now = new Date();
    const hour = now.getHours();
    const isMor = (hour < 12);
    this.setData({
      isMor,
    });
    // 判断获取定位权限信息
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userLocation'] === true) {
          this.setData({
            showSettingToast: false,
          });
        }
        this.getUserPositon();
      },
    });
  },
  // 获取用户定位信息
  getUserPositon() {
    this.isGetUserPosition = false;
    promisify(wx.getLocation)({
      type: 'gcj02',
    }).then((res) => {
      this.isGetUserPosition = true;
      if (res.latitude) {
        const lonLat = `${res.longitude},${res.latitude}`;
        const distance = gpsDistance(lonLat.split(','), companyLonlat.split(','));
        console.log(`离公司距离=>${distance}`);
        if (distance <= range) {
          this.setData({
            userLocation: true,
          });
        } else {
          this.setData({
            userLocation: false,
          });
        }
      }
    }).catch((res) => {
      this.isGetUserPosition = true;
      if ((res.errMsg).indexOf('auth') >= 0) {
        wx.showToast({
          title: '未授权获取用户位置信息',
          icon: 'none',
        });
        this.setData({
          userLocation: false,
          showSettingToast: true,
        });
      } else {
        wx.showToast({
          title: `err:${res.errMsg}`,
          icon: 'none',
        });
        this.setData({
          userLocation: false,
        });
      }
    });
  },
  // 获取wifi信息
  async getConnectWifi() {
    // 启用wifi
    await promisify(wx.startWifi)().then((res) => { // eslint-disable-line
      if (res.errCode !== 0) {
        this.setData({
          isCurWifi: false,
        });
        return false;
      }
    }).catch(() => {
      this.setData({
        isCurWifi: false,
      });
      return false;
    });
    // 获取wifi连接信息
    await this.getConnectedWifi();
    // 监听wifi连接
    await wx.onWifiConnected((res) => {
      console.log(res);
      this.getConnectedWifi();
    });
  },
  // 获取wifi连接信息
  getConnectedWifi() {
    promisify(wx.getConnectedWifi)().then((res) => {
      const {
        SSID,
      } = res.wifi;
      setTimeout(() => {
        wx.showToast({
          title: `已连接wifi${SSID}`,
          icon: 'none',
        });
      }, 1000);
      if (wifiList.indexOf(SSID) >= 0) {
        this.setData({
          isCurWifi: true,
        });
      } else {
        this.setData({
          isCurWifi: false,
        });
      }
      // }
    }).catch(() => {
      setTimeout(() => {
        wx.showToast({
          title: '获取wifi信息失败',
          icon: 'none',
        });
      }, 1000);
      this.setData({
        isCurWifi: false,
      });
      return false;
    });
  },
  // 获取打卡信息
  getPunchcardInfo(dateParm) {
    let date = dateParm;
    const weekDay = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const dateStr = date;
    const myDate = new Date(Date.parse(dateStr.replace(/-/g, '/')));
    const myWeekDay = weekDay[myDate.getDay()];
    const isWeek = judgeNextWeekCanGet(date);
    date = (date).split('-').join('');
    getApiData(`${checkinQuery}?date=${date}`, {}, 'get', openid).then((res) => {
      const {
        records,
      } = res.data;
      if (records[0]) {
        records[0] = this.xReplace(records[0].substring(8, 15), 2);
      }
      if (records[1]) {
        records[1] = this.xReplace(records[1].substring(8, 15), 2);
      }
      this.setData({
        user_info: res.data.user_info,
        records,
        isWeek: !isWeek,
        myWeekDay,
        // isOverToday: records.length === 2 ? true : false
      });
    }).catch();
  },
  // 信息替换
  xReplace(str, length, reversed) {
    const re = new RegExp(`\\d{1,${length}}`, 'g');
    const ma = str.match(re);
    if (reversed) ma.reverse();
    return ma.join(':'); // 最后面不要":" 就去掉( + ":")
  },

  // setMorData: function() {
  //   this.checkIn();
  // },
  // 签到
  checkIn() {
    getApiData(checkinUrl, {}, 'post', openid).then((res) => {
      if (res.errcode === 0) {
        this.getPunchcardInfo(nowDate);
      } else if (res.errcode === 400) {
        wx.showToast({
          title: '请在10点之前或者18点之后打卡',
          icon: 'none',
        });
      } else {
        wx.showToast({
          title: '打卡失败',
          icon: 'none',
        });
      }
    }).catch();
  },
  // 打卡提示
  punchCard(e) {
    if (this.data.records.length === 1) {
      wx.showModal({
        title: '提示',
        content: '确定下班打卡吗？',
        success: (res) => {
          if (res.confirm) {
            this.checkIn(e);
          }
        },
      });
    } else {
      this.checkIn(e);
    }
  },
  // 日期更改
  bindDateChange(e) {
    this.setData({
      nowDateWeek: e.detail.value,
      isNow: e.detail.value === nowDate,
    });
    this.getPunchcardInfo(e.detail.value);
  },
  // 打卡点击事件
  submitPuchCard(e) {
    if (!this.data.isCurWifi && !this.isGetUserPosition) {
      wx.showToast({
        title: `获取定位中，请稍等`,
        icon: 'none',
      });
      return false;
    }
    if (!this.data.isCurWifi && !this.data.userLocation) {
      wx.showToast({
        title: `请连接公司wifi或在公司范围${range}米内打卡`,
        icon: 'none',
      });
      return false;
    }
    if (this.data.records.length === 1) {
      wx.showModal({
        title: '提示',
        content: '确定下班打卡吗？',
        success: (res) => {
          if (res.confirm) {
            this.checkIn(e);
          }
        },
      });
      return true;
    }
    this.checkIn(e);
    return false;
    // }
  },
  openSetting() {
    wx.openSetting({

    });
  },
});