<template>
<!-- 有时从父组件会往子组件传递class，id，name等属性 -->
<!-- 传过来时默认会传到根节点div上，但是加了inheritAttrs: false, 参数后就不会出现了 -->
<!-- 然后使用v-bind="$attrs"将 class传给特定的标签 -->
  <div>
    <h2 v-bind="$attrs">{{ title }}</h2>
    <h2>Likes - {{ likes }}</h2>
    <h2>Published - {{ isPublished ? 'Yes' : 'No' }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Article default title',
    },
    likes: Number,
    isPublished: {
      type: Boolean,
      required: true,
    },
  },
  inheritAttrs: false,
}
</script>

<style scoped>
</style>