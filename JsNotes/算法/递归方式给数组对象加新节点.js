let data = [
    {
        id:1,
        name: 'a',
        children:[
            {
                id:2,
                name:'b',
                // children:[]
            },
            {
                id:3,
                name:'c',
                // children:[]
            }
        ]
    },
    {
        id:4,
        name:'d',
        // children:[]
    }
]

let child = [
    {
        id:4,
        name:'d'
    }
]

// 递归方式给数组对象加新节点

let fn = (target, newNode, newData = []) =>{
    target.forEach(item => {
        if (item.children){
            fn(item.children, newData)
        }else{
            newData.children = 'new node'
        }
        newData.push(item)
    })
    return newData
}



let fn2 = (target, newNode, newData = []) =>{
    target.forEach(item => {
        item.children ? fn2(item.children, newData) : newData.children = newNode
        
        newData.push(item)
    })
    return newData
}

// fn(data)
// console.log(data)


console.log(fn2(data,child))



