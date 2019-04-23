"use strict";// 严格模式下不能使用未声明的变量


/* 
this的四种绑定规则
默认绑定
隐式绑定
显式绑定
new绑定 
*/

// 1.默认绑定：通常是函数独立调用时
function say(){
    console.log(this,this.name)
}
var name = 'rehack'
say()
// 在非严格模式下this指向全局对象
// 在严格模式下this指向undefined,会报错
// 在浏览器下测试(非严格模式)this指向全局对象window
// 在node环境下指向undefined

// 需要注意的是fn()函数前面如果什么都没有可能是默认绑定，也可能不是，但一定不是隐式绑定



// 2.隐式绑定:函数是被某个对象调用 xxx.fn() xxx.xxx.fn()
function sayHi(){
    console.log('Hello,', this.name);
}
var person = {
    name: 'rehack',
    sayHi: sayHi
}
var name = 'Wiliam';
person.sayHi();// this指向的是调用他的person,所以sayHi()的this.name结果是rehack
// 需要注意的是：对象属性链中只有最后一层会影响到调用位置。比如xxx.ooo.fn() this指向的是最后一层的ooo，不管有多少层都是指向最后一层

// 3.显式绑定：就是通过call,apply,bind的方式，显式的指定this所指向的对象
// call,apply和bind的第一个参数，就是对应函数的this所指向的对象。call和apply的作用一样，只是传参方式不同。call和apply都会执行对应的函数，而bind方法不会。
function sayHi(){
    console.log('Hello,', this.name);
}
var person = {
    name: 'rehack',
    sayHi: sayHi
}
var name = 'Wiliam';
var Hi = person.sayHi;
Hi.call(person); //Hi.apply(person) 硬绑定明确将this绑定在了person上,输出结果Hello,rehack 






/* 
##如何准确判断this指向的是什么？
* 函数是否在new中调用(new绑定)，如果是，那么this绑定的是新创建的对象。
* 函数是否通过call,apply调用，或者使用了bind(即硬绑定)，如果是，那么this绑定的就是指定的对象。
* 函数是否在某个上下文对象中调用(隐式绑定)，如果是的话，this绑定的是那个上下文对象。一般是obj.foo()
* 如果以上都不是，那么使用默认绑定。如果在严格模式下，则绑定到undefined，否则绑定到全局对象。
* 如果把Null或者undefined作为this的绑定对象传入call、apply或者bind，这些值在调用时会被忽略，实际应用的是默认绑定规则。
* 如果是箭头函数，箭头函数的this继承的是外层代码块的this。 
*/