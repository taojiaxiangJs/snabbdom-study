//  学习Snabbdom

import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from 'snabbdom'

// 创建patch函数
const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
])

// 创建VNode
const vnode1 = h(
  'a',
  {
    props: {
      href: 'http://www.baidu.com',
      target: '_blank',
    },
  },
  'baidu'
)

console.log(myVnode)

var vnode2 = h('ul', {}, [h('li', {}, '1'), h('li', {}, '2'), h('li', {}, '3')])

// 虚拟节点上树
const container = document.getElementById('container')
patch(container, vnode1)
