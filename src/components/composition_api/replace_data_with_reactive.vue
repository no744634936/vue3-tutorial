<template>
  <h2>Options - {{ o_firstName }} {{ o_lastName }} a.k.a {{ o_heroName }}</h2>
  <h2>Composition - {{ c_firstName }} {{ c_lastName }} {{ c_heroName }}</h2>
  <h2>
    Composition - {{ state.firstName }} {{ state.lastName }}
    {{ state.heroName }}
  </h2>
  <h2>Composition - {{ reactiveGreetHero }}</h2>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: 'Data',
  setup() {

    // ref针对的是 基本类型
    const c_firstName = ref('Clark')
    const c_lastName = ref('Kent')
    const c_heroName = ref('Superman')

    //reactive 针对的是object
    const state = reactive({
      firstName: 'Princess',
      lastName: 'Diana',
      heroName: 'Wonder Woman',
    })

    const reactiveGreetHero = `Hello ${state.firstName} ${state.lastName} a.k.a ${state.heroName}`
    return {
      c_firstName,
      c_lastName,
      c_heroName,
      state,
      reactiveGreetHero,
    }
  },
  data() {
    return {
      o_firstName: 'Bruce',
      o_lastName: 'Wayne',
      o_heroName: 'Batman',
    }
  },
}
</script>

<style scoped>
</style>