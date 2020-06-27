// 自己常用的eslint规则
module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        '@vue/standard',
        'eslint:recommended',
        'plugin:vue/essential',
        'plugin:vue/recommended',
    ],
    // 'parser': 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'indent': ['error', 4], //eslint script缩进
        'vue/html-indent': ['error', 4], //vue HTML缩进
        'vue/singleline-html-element-content-newline': 0, //取消单行HTML元素（该元素没有属性或最后一个属性与左尖括号在同一行）内容换行
        'vue/multiline-html-element-content-newline': 0,  //取消多行HTML元素（该元素最后一个属性不在左尖括号的同一行）内容换行
        'vue/max-attributes-per-line': [2, {
            'singleline': 5, //单行HTML元素一行最多显示的属性个数
            'multiline': {
                'max': 1,
                'allowFirstLine': false
            }
        }]

    }
}
