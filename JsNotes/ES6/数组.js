// 扩展运算符(数组展开,三个点)
const arr = [1,2,3];

console.log(...arr);//1 2 3

//利用扩展运算符来复制新数组或者合并数组，注意是浅拷贝
let arr2 = [4,5,6]
const arr3 = [...arr,...arr2];
console.log(arr3);//[ 1, 2, 3, 4, 5, 6 ]


// 用map代替for循环
arr.map((value,index,ar)=>{
    console.log(index,value,ar);
    /* 
        0 1 [ 1, 2, 3 ]
        1 2 [ 1, 2, 3 ]
        2 3 [ 1, 2, 3 ]
    */
    
})

// map的另一种用法
function sum(item){
    return item*item;
}

let arr4 = arr.map(sum);
console.log('arr4',arr4);//[ 2, 3, 4 ]


/* 
    reduce()方法 array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    reduce()方法有两个参数第一个参数是一个回调函数，这个回调函数有四个参数：
        total 初始值（默认为第一项的值，，可以通过initialValue参数来改变,当数组的第一项不是一个number的时候，就需要设置initialValue参数，当initialValue不为0的时候，最终的计算结果会受initialValue值的影响）, 或者计算结束后的返回值，如果没有计算表达式就返回undefined
        currentValue 当前参与计算的项
        currentIndex 当前元素的索引
        arr 当前元素所属的数组对象。
    initialValue reduce第二个参数，传递给函数的初始值
*/

let  arr5 = [2, 3, 6, 4, 5];
sum = arr5.reduce(function(total, currentValue, currentIndex, arr) {
    console.log(total, currentValue, currentIndex);
    return total + currentValue;
})
console.log(arr5, sum);


/* 

1 'a' 1
undefined 'c' 2
undefined 4 3
undefined 5 4
[ 1, 'a', 'c', 4, 5 ] undefined

*/


var result = [
    {
        subject: 'math',
        score: 88
    },
    {
        subject: 'chinese',
        score: 95
    },
    {
        subject: 'english',
        score: 80
    }
];

var sumScore= result.reduce((total,curr,index)=>{
    return total+=curr.score
},0)

console.log(sumScore)