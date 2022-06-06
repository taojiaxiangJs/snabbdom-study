import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const container = document.getElementById('container')

const vnode1 = h('h1', {}, 'baidu')
const vnode2 = h('ul', {}, [
    h('li', {} , '1'),
    h('li', {} , '2'),
    h('li', {} , [
        h('h3', {} , 'hhh'),
        h('h3', {} , 'bbb'),
    ]),
    h('li', {} , '4'),
])
console.log(vnode1)

patch(container, vnode2)
