禁止网页被嵌入到iFrame里X-Frame-Options（有三个值DENY、SAMEORIGIN、ALLOW-FROM uri）
通过nginx设置http请求头
前端页面设置meta <meta http-equiv="X-Frame-Options" content="deny">有兼容问题