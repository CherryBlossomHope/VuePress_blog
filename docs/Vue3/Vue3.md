### 顶层 await

结果代码会被编译成 async setup()

```js
<script setup>
  const post = await fetch(`/api/post/1`).then((r) => r.json())
</script>
```

另外，await 的表达式会自动编译成在 await 之后保留当前组件实例上下文的格式。

顶层 await 必须与 Suspense 内置组件组合使用 目前还是处于实验阶段特性
