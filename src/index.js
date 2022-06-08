import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const container = document.getElementById('container')

const vnode1 = h('ul', {}, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D'),
])

patch(container, vnode1)

const btn = document.getElementById('btn')

// const vnode2 = h('h1', {}, 'sina')
const vnode2 = h('ul', {}, [
  h('li', { key: 'A' }, 'Aa'),
  h('li', { key: 'C' }, 'Cc'),
  h('li', { key: 'B' }, 'Bb'),
  h('li', { key: 'D' }, 'Dd'),
])

btn.onclick = function () {
  patch(vnode1, vnode2)
}
