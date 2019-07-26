const data = [
  {
    id: 1,
    name: '1',
    children: [
      {
        id: 2,
        name: '1-1',
        children: [
          {
            id: 3,
            name: '1-1-1'
          }
        ]
      },
      {
        id: 4,
        name: '1-2'
      }
    ]
  },
  {
    id: 5,
    name: '2',
    children: [
      {
        id: 6,
        name: '2-1'
      },
      {
        id: 7,
        name: '2-2',
        children: [
          {
            id: 8,
            name: '2-2-1'
          }
        ]
      }
    ]
  }
]


let data2 = [
    {
        id: 1,
        name: "根节点1",
        children: [{
            id: 3,
            name: "节点1",
            children: [{
                id: 5,
                name: "节点3"
            }, {
                id: 6,
                name: "节点4"
            }]
        }]
    },
    {
        id: 2,
        name: "根节点2",
        children: [
            {
                id: 4,
                name: '节点2',
                children: [
                    {
                        id: 7,
                        name: "abc"
                    },
                    {
                        id: 8,
                        name: 'def'
                    }
                ]
            },
            {
                id: 9,
                name: "zxe",
                children: [
                    {
                        id: 10,
                        name: "bbb"
                    }
                ]
            }
        ]
    }

];

// 深度优先非递归查找算法
const dsf = (nodes, id) => {
  const stack = [].concat(nodes)

  while (stack.length) {
    const node = stack.pop()

    if (node.id === id) {
      return node.name
    }

    if (node.children instanceof Array) {
      stack.push(...node.children)
    }
  }

  return null
}

// 根据节点ID去查找同节点上的其他数据
// console.log([3, 2, 8, 10].map(e => dsf(data, e)))
console.log([2, 9, 10].map(e => dsf(data2, e)))
