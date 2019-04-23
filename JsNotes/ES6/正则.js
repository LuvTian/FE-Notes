{
    // 定义正则的两种方式
    let regex = new RegExp('xyz','i');//有两个参数第一个是表达式 第二个是修饰符
    let regex2 = new RegExp(/xyz/i);
    console.log(regex.test('xyz123'),regex2.test('xyz123'));//true true

    // ES6的新增写法
    let regex3 = new RegExp(/xyz/ig,'i');
    console.log(regex3.test('xyz123'));//true

}