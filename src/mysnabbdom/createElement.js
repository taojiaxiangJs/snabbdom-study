// 创建DOM节点，将vnode转换成DOM
export default function createElement(vnode) {
  // 创建节点
  let domNode = document.createElement(vnode.sel) //ul

  if (
    vnode.text !== '' &&
    (vnode.children === undefined || !vnode.children.length)
  ) {
    // 只有文本
    // 添加文本
    domNode.innerText = vnode.text
  } else if (Array.isArray(vnode.children) && vnode.children.length) {
    // 只有children
    // 循环递归子节点
    for (let i = 0; i < vnode.children.length; i++) {
      domNode.appendChild(createElement(vnode.children[i]))
    }
  }

  vnode.elm = domNode

  return domNode
}
