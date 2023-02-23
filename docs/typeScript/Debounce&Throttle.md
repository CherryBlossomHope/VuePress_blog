## 防抖&&节流

### 防抖

```ts
/**
 * @function 防抖
 * @param {Function} callBack 处理事件回调函数
 * @param {Number}   delay    时间 默认500毫秒
 * @return {Function}
 */
function Debounce(callBack: Function, delay: number = 500) {
  let timer: any = null
  return function (this: unknown) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callBack.call(this)
    }, delay)
  }
}
```

### 节流

```ts
/**
 * @function 节流
 * @param {Function} callBack 处理事件的回调
 * @param {Number}   delay    时间 默认500毫秒
 * @return {Function}
 */
function Throttle(callBack: Function, delay: number = 500) {
  let flag: Boolean = true
  return function (this: unknown) {
    if (flag) {
      setTimeout(() => {
        callBack.call(this)
        flag = true
      }, delay)
    }
    flag = false
  }
}
```
