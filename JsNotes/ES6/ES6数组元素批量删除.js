/**
 * 按索引批量删除
 */
let arr1 = ['a','b','c','d','e']
let idxs = [1,2,4] //要删除的项
let newArr1 = arr1.filter((item,index) => !idxs.includes(index))
console.log(newArr1) //[ 'a', 'd' ]


/**
 * 按值批量删除
 */
let arr2 = [
    {
        id:1,
        name:'zhou'
    },
    {
        id:2,
        name:'wr'
    },
    {
        id:3,
        name:'jo'
    },
    {
        id:4,
        name:'han'
    }
]
let ids = [1,2,4]

// 方法一：会生成一个新数组
let newArr2 = arr2.filter((item) => !ids.includes(item.id))
console.log(newArr2) // [ { id: 3, name: 'jo' } ]

// 方法二：用splice方法直接修改原数组，不会生成新数组，按索引删除不能使用这种方法，因为splice删除后原数组索引会发生改变
ids.map(i => {
    arr2.splice(arr2.findIndex(item => item.id === i), 1)
})
console.log(arr2) // [ { id: 3, name: 'jo' } ]


/**
 * 从数组中删除自定元素
 */

let arr3 = ['a','c','d']
//  要删除'c'
// 最好是先深拷贝一份
let arr3Copy = arr3.slice()
arr3Copy.splice(arr3Copy.indexOf('c'), 1)
console.log(arr3,arr3Copy) // [ 'a', 'c', 'd' ] [ 'a', 'd' ]