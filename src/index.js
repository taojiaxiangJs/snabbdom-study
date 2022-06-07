import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const container = document.getElementById('container')

const vnode1 = h('ul', {}, [
  h('li', {}, 'A'),
  h('li', {}, 'B'),
  h('li', {}, 'C'),
  h('li', {}, 'D'),
])

patch(container, vnode1)

const btn = document.getElementById('btn')

// const vnode2 = h('h1', {}, 'sina')
const vnode2 = h('ul', {}, [
  h('li', {}, 'A'),
  h('li', {}, 'B'),
  h('li', {}, 'C'),
])

btn.onclick = function () {
  patch(vnode1, vnode2)
}
