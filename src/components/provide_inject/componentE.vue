<template>
  <h2>Component E</h2>
  <ComponentF />
</template>

<script>
import ComponentF from './componentF'
export default {
  name: 'ComponentE',
  components: {
    ComponentF,
  },
}
</script>

<style scoped>
</style>