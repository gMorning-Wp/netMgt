//是否是一个外部链接
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
