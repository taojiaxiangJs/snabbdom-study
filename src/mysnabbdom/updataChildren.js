import patch from './patch'

export default function (parentElm, oldCh, newCh) {
  console.log(oldCh, newCh)
  // 旧前
  let oldStrIdx = 0
  // 旧后
  let oldEndIdx = oldCh.length - 1
  // 新前
  let newStrIdx = 0
  // 新后
  let newEndIdx = newCh.length - 1
  // 旧前节点
  let oldStrNode = oldCh[0]
  // 旧后节点
  let oldEndNode = oldCh[oldEndIdx]
  // 新前节点
  let newStrNode = newCh[0]
  // 新后节点
  let newEndNode = newCh[newEndIdx]
  while (oldStrIdx <= oldEndIdx && newStrIdx <= newEndIdx) {
    if (sameVnode(newStrNode, oldStrNode)) {
      console.log('命中1')
      // 命中①（新前与旧前同一节点）
      patch(oldStrNode, newStrNode)
      newStrNode = newCh[++newStrIdx]
      oldStrNode = oldCh[++oldStrIdx]
    } else if (sameVnode(newEndNode, oldEndNode)) {
      console.log('命中2')
      // 命中②（新后与旧后同一节点）
      patch(oldEndNode, newEndNode)
      newEndNode = newCh[--newEndIdx]
      oldEndNode = oldCh[--oldEndIdx]
    } else if (sameVnode(newEndNode, oldStrNode)) {
      console.log('命中3')
      // 命中③（新后与旧前同一节点）
      patch(oldStrNode, newEndNode)
      if (oldCh[oldEndNode + 1]) {
        parentElm.insertBefore(oldStrNode.elm, oldCh[oldEndNode + 1].elm)
      } else {
        parentElm.appendChild(oldStrNode.elm)
      }
      newEndNode = newCh[--newEndIdx]
      oldStrNode = oldCh[++oldStrIdx]
    } else if (sameVnode(newStrNode, oldEndNode)) {
      console.log('命中4')
      // 命中④（新前与旧后同一节点）
      patch(oldEndNode, newStrNode)
      parentElm.insertBefore(oldEndNode.elm, oldCh[oldStrIdx].elm)
      newStrNode = newCh[++newStrIdx]
      oldEndNode = oldCh[--oldEndIdx]
    } else {
      // 循环遍历
    }
  }
}

function sameVnode(node1, node2) {
  console.log(node1.key, node2.key)
  return node1.sel === node2.sel && node1.key === node2.key
}
