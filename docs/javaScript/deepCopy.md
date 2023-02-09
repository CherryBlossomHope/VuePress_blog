## 深拷贝

```js
function deepCopy(obj) {
  const result = Array.isArray(obj) ? [] : {}
  // 判断obj存在并且是对象类型的时候 因为null也是object类型，所以要单独做判断
  if (obj && typeof obj === 'object' && obj != null) {
    for (const key in obj) {
      // 判断obj中是否存在key属性
      if (Object.hasOwn(obj, key)) {
        // 判断如果obj[key]存在并且obj[key]是对象类型的时候应该深拷贝，即在堆内存中开辟新的内存
        if (obj[key] && typeof obj[key] === 'object') {
          result[key] = deepCopy(obj[key])
        } else result[key] = obj[key]
      }
    }
  }
  return result
}
```
