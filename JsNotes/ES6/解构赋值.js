// 1.数组的解构赋值
{
    let [a,b,c] = [1,2,3];
    console.log(a,b,c);//1 2 3
}

{
    // 换成传统的写法：
    let arr = [4, 8, 9];
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];
}


{
    // ...展开运算符用于解构赋值
    let [a,b,...c] = [1,2,3,4,5]
    console.log(a,b,c)//1 2 [ 3, 4, 5 ]
}