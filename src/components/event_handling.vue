
<template>
  <!-- Event Handling -->
  <!-- @ 就是v-on: 的缩写 -->
  <h2>{{ name }}</h2>
  <div>
      <!-- 同时触发两个方法 -->
    <button @click="changeName($event), increment(1, $event)">
      Change name
    </button>
  </div>
  <h2>{{ count }}</h2>
  <div>
    <button @click="increment(1, $event)">Increment</button>
    <button @click="decrement(1)">Decrement</button>
    <button @click="increment(5)">Increment 5</button>
    <button @click="decrement(5)">Decrement 5</button>
  </div>
</template>

<script>
    export default{
        name:'event_handling',
        data(){
            return{
                name: 'zhang',
                channel:'<b>html test</b>',
                count:0
            }
        },
        methods: {
            increment(num, event) {
                this.count += num
                console.log(event)
            },
            decrement(num) {
                this.count -= num
            },
            changeName(event) {
                this.name = 'Batman'
                console.log('Event', event)
            },
        }
    }
</script>

