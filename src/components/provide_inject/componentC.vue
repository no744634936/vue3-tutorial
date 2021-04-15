<template>
  <h2>Component C</h2>
  <ComponentE />
</template>

<script>
import ComponentE from './componentE.vue'
export default {
  name: 'ComponentC',
  components: {
    ComponentE,
  },
}
</script>

<style scoped>
</style>