import vnode from './vnode'

/**
 * 形态1： h('div', {}, '文字')
 * 形态2： h('div', {}, [])
 * 形态3： h('div', {}, h())
 */
export default function h(sel, data, c) {
  if (arguments.length !== 3) {
    throw new Error('要传入3个参数')
  }
  if (typeof c == 'string' || typeof c == 'number') {
    // 形态1
    return vnode(sel, data, undefined, c, undefined)
  } else if (Array.isArray(c)) {
    // 形态2
    let children = []
    for (let i = 0; i < c.length; i++) {
      if (!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel'))) {
        throw new Error('第三个参数数组中存在错误')
      } else {
        children.push(c[i])
      }
    }
    return vnode(sel, data, children, c, undefined)
  } else if (typeof c == 'object' && c.hasOwnProperty('sel')) {
    // 形态3
    return vnode(sel, data, [c], undefined, undefined)
  } else {
    throw new Error('第三个参数传入错误')
  }
}
