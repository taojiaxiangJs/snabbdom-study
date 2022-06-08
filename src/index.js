import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const container = document.getElementById('container')

const vnode1 = h('ul', {}, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'E' }, 'E'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D'),
  h('li', { key: 'F' }, 'F'),
])

patch(container, vnode1)

const btn = document.getElementById('btn')

// const vnode2 = h('h1', {}, 'sina')
const vnode2 = h('ul', {}, [
  h('li', { key: 'A' }, 'AA'),
  h('li', { key: 'D' }, 'DD'),
  h('li', { key: 'T' }, 'TT'),
  h('li', { key: 'E' }, 'EE'),
  h('li', { key: 'F' }, 'FF'),
])

btn.onclick = function () {
  patch(vnode1, vnode2)
}
