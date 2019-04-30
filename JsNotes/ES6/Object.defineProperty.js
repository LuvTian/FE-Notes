let a = {
    name: 'rehack',
    age: 12
}

Object.defineProperty(a, 'age', {
    // writable:false,
    get(){
        // 当访问该属性的时候，触发该方法
        console.log('访问了该属性')
    },
    set(newValue){
        // 当修改该属性的时候，触发该方法
        console.log('修改了该属性',newValue)
    }
})
// a.sex = 'f'
// console.log(a, a.age)
a.age = 20


// Object.defineProperty(obj, prop, descriptor) 给一个对象添加新属性或者修改现有属性，并返回这个对象。
/**
 * 1.第一个参数是要操作的对象(obj)，第二个参数(string)是要定义或修改的属性的名称，将被定义或修改的属性描述符(obj)
 * 2.第三个参数descriptor包括：
 *  enumerable默认为false，当为true的时候，该属性才能够出现在对象的枚举（for...in 或 Object.keys ）属性中
 *  value 该属性的值，默认为undefined
 *  writable 当且仅当该属性的writable为true时，value才能被赋值运算符改变。默认为 false。
 *  get(){}方法 当访问该属性的时候，触发该方法
 *  set(){}方法 当修改该属性的时候，触发该方法，该方法将接受唯一参数，即该属性的新值
 */
