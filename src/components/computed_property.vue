<template>
<div>
 <!-- Computed Properties -->
  <h2>Fullname - {{ firstName }} {{ lastName }}</h2>
  <h2>Fullname - {{ fullName }}</h2>

  <h2>
    Total - {{ items.reduce((total, curr) => (total = total + curr.price), 0) }}
  </h2>


  <h2>Computed Total - {{ total }}</h2>
  <h2>Method Total - {{ getTotal() }}</h2>


  <button @click="items.push({ id: 4, title: 'Keyboard', price: 50 })">
    Add item
  </button>

  <div>
    <input type="text" v-model="country" />
  </div>

  <!-- 对一个object进行for循环sort或者filter的时候，使用computed属性。不要再template里sort和filter一个object -->
  <!-- 这种方法是不推荐的 -->
  <template v-for="item in items" :key="item.id">
    <h2 v-if="item.price>100">{{ item.title }} - {{ item.price }}</h2>
  </template>

  <!-- 使用computed属性才是推荐的方法 -->
  <h2 v-for="item in expensiveItems" :key="item.id">
    {{ item.title }} - {{ item.price }}
  </h2>
  <button @click="changeFullName">Change fullname</button> 

</div>
</template>

<script>
    export default{
        name:'computed_property',
        data(){
            return{
                firstName: 'Bruce',
                lastName: 'Wayne',
                items: [
                    {id: 1,title: 'TV', price: 100,},
                    {id: 2,title: 'Phone',price: 200,},
                    {id: 3,title: 'Laptop',price: 300,},
                ],
                country: '',
            }
        },
        computed: {
            fullName: {
                get() {
                    return `${this.firstName} ${this.lastName}`
                },
                set(value) {
                    const names = value.split(' ')
                    this.firstName = names[0]
                    this.lastName = names[1]
                },
            },
            total() {
                console.log('total computed property')
                return this.items.reduce((total, curr) => (total = total + curr.price), 0)
            },
            expensiveItems() {
                return this.items.filter((item) => item.price > 100)
            },
        },
        methods: {
            getTotal() {
                console.log('getTotal method')
                return this.items.reduce((total, curr) => (total = total + curr.price), 0)
            },
            changeFullName() {
                // 'Clark Kent' 被传给了 fullName的set方法
                this.fullName = 'Clark Kent'
            },
        }
        
    }
</script>




