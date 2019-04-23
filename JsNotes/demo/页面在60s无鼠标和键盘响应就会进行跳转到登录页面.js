var myTime = setTimeout("Timeout()", 60000);
function resetTime() {
    clearTimeout(myTime);
    myTime = setTimeout('Timeout()', 60000);
}
function Timeout() {
    alert("您的登录已超时, 请点确定后重新登录!");
    document.location.href='/login.php';
}
document.documentElement.onkeydown=resetTime;
document.doocumentElement.onclick=resetTime;

//最后清除一下session就好了