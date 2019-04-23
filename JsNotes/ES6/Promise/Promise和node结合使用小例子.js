const fs = require('fs');

fs.readFile('ES6/Promise/1.html',(err,data)=>{
    var p = new Promise((resolve,reject)=>{
        if(err){
            reject(err);
        }else{
            resolve(data);
        }
    });

    p.then(value=>{
        console.log(value.toString());
        
    },value=>{
        console.log(value);
        
    })
})