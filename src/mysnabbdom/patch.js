import vnode from './vnode'
import createElement from './createElement';

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
  if(oldVnode.sel === newVnode.sel && oldVnode.key === newVnode.key) {
    console.log('是同一个节点');
  }else{
    console.log('不是同一个节点，直接删除旧节点，插入新节点');
    // 创建新节点
    let createDom = createElement(newVnode)

    // 插入到老节点之前
    oldVnode.elm.parentNode.insertBefore(createDom, oldVnode.elm)

    // 删除老节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm)
  }
}
