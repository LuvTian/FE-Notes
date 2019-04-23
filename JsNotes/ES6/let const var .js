// 1.var
// 使用var关键字声明的变量，无论其实际声明位置在何处，都会被视为声明于所在函数的顶部（如果声明不在函数内，则视为在全局作用域的顶部），这就是变量提升
for (var i = 0; i < 6; i++) {
    console.log(i)
  }
  
  console.log(i)  // 6 i在这里依旧可以访问




// 2.let 块作用域 一般在一个{}内起作用 var有全局作用域和函数作用域
function test1(){
    for(var i=0;i<3;i++){
        console.log(i) //0 1 2
    }
    console.log(i)//3
}
test1()



function test2(){
    for(let i=0;i<3;i++){
        console.log(i)//0 1 2
    }
    console.log(i)//报错ReferenceError: i is not defined(这里不是报undefined是因为ES6默认使用了严格模式"use strict")  这里可以看出let和var的作用域区别
}
test2()

// let不能重复定义同一个变量 比如let a=1; let a=2;

// 3.用const来定义个常量 定义后这个常量的值不能被修改，const也是块作用域，const不能先声明变量再赋值
function test3() {
    const PI = 3.1415926
    console.log(PI)
    PI = 5//报错TypeError: Assignment to constant variable
}
test3()

function test4() {
    const b = {foo:1}
    b.foo = 2
    console.log(b) //const定义的对象值可以被修改,因为对象是引用类型，对象存储的指针是不变的，其指向的内存中的地址是没有被改变的
}
test4()