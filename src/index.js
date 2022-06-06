import h from './mysnabbdom/h'

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

console.log(vnode1)
