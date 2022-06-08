export default function (sel, data, children, text, elm) {
  let key = data.key
  return {
    sel,
    key,
    data,
    children,
    text,
    elm,
  }
}
