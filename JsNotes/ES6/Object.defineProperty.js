let a = {
    name: 'rehack',
    age: 12
}

Object.defineProperty(a, 'age', {
    writable:false,
    get(){
        // 当访问该属性的时候，触发该方法
        console.log('访问了该属性')
    },
    set(newValue){
        // 当修改该属性的时候，触发该方法
        console.log('修改了该属性')
    }
})
// a.sex = 'f'
// console.log(a, a.age)
a.age=2


