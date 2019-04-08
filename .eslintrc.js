// 自己常用的eslint规则
module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': [2, 4],//4个空格的缩进
        "space-before-function-paren": 0 //方法函数名后不要加空格
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}