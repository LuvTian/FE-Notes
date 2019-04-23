function ajax(method, url) {
    var promise = new Promise(function(resolve, reject) {
        var xmlHttp = new XMLHttpRequest();
        
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.status == 200 && xmlHttp.readyState == 4) {
                resolve(xmlHttp.response);
            } else {
                reject(xmlHttp.statusText);
            } 
        };
        xmlHttp.open(method, url,true);
        xmlHttp.send();
        xmlHttp.onerror = function() {
            reject(xmlHttp.statusText);
        };
    });
    return promise;
}

ajax('get', 'http://rehack.cn').then(value=>{
    console.log(value);
    
}, value=>{
    console.log(value);
    
});