Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@no744634936 
gopinav
/
Vue-3-Tutorials
1
64
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Vue-3-Tutorials/vue-http/src/components/Parent.vue
@gopinav
gopinav Lifecycle Hooks
Latest commit 8009712 on 13 Jan
 History
 1 contributor
47 lines (45 sloc)  838 Bytes
  
<template>
  <div>
    Parent component
    <button @click="showChild = !showChild">Toggle Child</button>
    <Child v-if="showChild" />
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  components: { Child },
  name: 'Parent',
  data() {
    return {
      showChild: true,
    }
  },
  beforeCreate() {
    console.log('Parent beforeCreate()')
  },
  created() {
    console.log('Parent created()')
  },
  beforeMount() {
    console.log('Parent beforeMount()')
  },
  mounted() {
    console.log('Parent mounted()')
  },
  beforeUpdate() {
    console.log('Parent beforeUpdate()')
  },
  updated() {
    console.log('Parent updated()')
  },
  beforeUnmount() {
    console.log('Parent beforeUnmount()')
  },
  unmounted() {
    console.log('Parent unmounted()')
  },
}
</script>

<style scoped>
</style>
