import vnode from './vnode'
import createElement from './createElement'

export default function patch(oldVnode, newVnode) {
  // 判断第一个参数是否是DOM节点
  if (oldVnode.sel === '' || oldVnode.sel === undefined) {
    // DOM节点转换成虚拟节点
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(),
      {},
      [],
      undefined,
      oldVnode
    )
  }

  // 判断oldVnode和newVnode是不是同一个节点
  if (oldVnode.sel === newVnode.sel && oldVnode.key === newVnode.key) {
    // 是同一个节点
    console.log('是同一个节点', oldVnode === newVnode)
    if (oldVnode !== newVnode) {
      // newVnode有没有text属性
      if (
        newVnode.text !== '' &&
        (newVnode.children === undefined || !newVnode.children.length)
      ) {
        // newVnode的text和oldVnode是否相同
        if (newVnode.text !== oldVnode.text) {
          oldVnode.elm.innerText = newVnode.text
        }
      } else {
        // oldVnode有没有children
        if (
          newVnode.children.length &&
          (oldVnode.children === undefined || !oldVnode.children.length)
        ) {
          // 清空oldVnode中的text
          oldVnode.elm.innerText = ''
          for (let i = 0; i < newVnode.children.length; i++) {
            // 把newVnode中的children添加到DOM中
            oldVnode.elm.appendChild(createElement(newVnode.children[i]))
          }
        } else {
          alert(1)
        }
      }
    }
  } else {
    // 不是同一个节点，直接删除旧节点，插入新节点

    // 创建新节点
    let createDom = createElement(newVnode)

    // 插入到老节点之前
    oldVnode.elm.parentNode.insertBefore(createDom, oldVnode.elm)

    // 删除老节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm)
  }
}
