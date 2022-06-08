import patchVnode from './patchVnode'
import createElement from './createElement'

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

  let oldMap = new Map()
  console.log(oldMap)
  // return
  while (oldStrIdx <= oldEndIdx && newStrIdx <= newEndIdx) {
    if (sameVnode(newStrNode, oldStrNode)) {
      console.log('命中1')
      // 命中①（新前与旧前同一节点）
      patchVnode(oldStrNode, newStrNode)
      newStrNode = newCh[++newStrIdx]
      oldStrNode = oldCh[++oldStrIdx]
    } else if (sameVnode(newEndNode, oldEndNode)) {
      console.log('命中2')
      // 命中②（新后与旧后同一节点）
      patchVnode(oldEndNode, newEndNode)
      newEndNode = newCh[--newEndIdx]
      oldEndNode = oldCh[--oldEndIdx]
    } else if (sameVnode(newEndNode, oldStrNode)) {
      console.log('命中3')
      // 命中③（新后与旧前同一节点）
      patchVnode(oldStrNode, newEndNode)
      if (oldCh[oldEndIdx + 1]) {
        parentElm.insertBefore(oldStrNode.elm, oldCh[oldEndIdx + 1].elm)
      } else {
        parentElm.appendChild(oldStrNode.elm)
      }
      newEndNode = newCh[--newEndIdx]
      oldStrNode = oldCh[++oldStrIdx]
    } else if (sameVnode(newStrNode, oldEndNode)) {
      console.log('命中4')
      // 命中④（新前与旧后同一节点）
      patchVnode(oldEndNode, newStrNode)
      parentElm.insertBefore(oldEndNode.elm, oldCh[oldStrIdx].elm)
      newStrNode = newCh[++newStrIdx]
      oldEndNode = oldCh[--oldEndIdx]
    } else {
      // 循环遍历
      console.log('循环遍历');
      if (!oldMap.size) {
        for (let i = oldStrIdx; i <= oldEndIdx; i++) {
          oldMap.set(oldCh[i].key, i)
        }
      }
      if (oldMap.get(newStrNode.key)) {

      } else {
        parentElm.insertBefore(newStrNode.elm, oldCh[oldStrIdx].elm)
      }
      newStrNode = newCh[++newStrIdx]
    }
  }

  if (newStrIdx <= newEndIdx) {
    // newStrIdx 与 newEndIdx 的节点需要 insert
    const pivot = newCh[newEndIdx+1] == null? null:newCh[newEndIdx+1].elm
    for (let i = newStrIdx; i <= newEndIdx; i++) {
        parentElm.insertBefore(createElement(newCh[i]), pivot)
    }
  } else if (oldStrIdx <= oldEndIdx) {
    // oldStrIdx 与 oldEndIdx 的节点需要删除
    for (let i = oldStrIdx; i <= oldEndIdx; i++) {
      if(oldCh[i]) {
        parentElm.removeChild(oldCh[i].elm)
      }
    }
  }
}

function sameVnode(node1, node2) {
  return node1.sel === node2.sel && node1.key === node2.key
}
