<template>
  <h2>Options - {{ o_firstName }}</h2>
  <!-- 这里不需要用c_firstName.value -->
  <h2>Composition - {{ c_firstName }} </h2>
  <h2>Composition - {{ greet }} </h2>

</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Data',
  setup() {

    const c_firstName = ref('Clark')
    console.log('c_firstName',c_firstName);
    c_firstName.value="zhang"
    console.log('c_firstName',c_firstName);
    
    //  setup方法里面需要用c_firstName.value
    const greet=`hello ${c_firstName.value}`

    return {
      c_firstName,
      greet,
    }
  },
  data() {
    return {
      o_firstName: 'Bruce',
    }
  },
}
</script>

<style scoped>
</style>