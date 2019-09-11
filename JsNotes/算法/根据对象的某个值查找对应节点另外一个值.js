let data = [
    {
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    },
    {
        id: 3,
        name: 'c'
    }
]

let ids = [1,3] // 找到1,3对应的name ['a','c']
let res = []
data.forEach((item,i) => {
    if(ids.includes(item.id)){
        res.push(item.name)
    }
    
})
console.log(res)