import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const container = document.getElementById('container')

const vnode1 = h('div', {}, 'baidu')

console.log(vnode1)

patch(container, vnode1)
