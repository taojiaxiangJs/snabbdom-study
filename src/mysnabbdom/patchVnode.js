import createElement from './createElement'

export default function patchVnode(oldVnode, newVnode) {
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
            updataChildren(oldVnode.elm, oldVnode.children, newVnode.children)
          }
        }
      }
}