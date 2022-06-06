import vnode from './vnode'

export default function patch(oldVnode, newVnode) {
  if (oldVnode.sel === '' || oldVnode.sel === undefined) {
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(),
      {},
      [],
      undefined,
      oldVnode
    )
  }
}
