let p = new Promise((resolve,reject)=>{
    $.ajax({
        url: 'http://rehack.cn',
        type: 'GET',
        dataType: 'html',
        data: ''
    })
    .done(function(data) {
        resolve('成功');

    })
    .fail(function() {
        reject('失败');
    });
}).then(v=>{
    console.log(v);
    
},v=>{
    console.log(v);
    
})
