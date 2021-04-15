
<template>
    <!-- Dynamic Components -->
    <button @click="activeTab = 'TabA'">Tab A</button>
    <button @click="activeTab = 'TabB'">Tab B</button>
    <button @click="activeTab = 'TabC'">Tab C</button>

    <!-- 保持dynamic component的数据不变 在c component输入数据，点击了b tab 然后返回c component，数据还在-->
    <keep-alive>
        <component :is="activeTab"></component>
    </keep-alive>
    
     <!-- 这种写法太繁琐 -->
    <!-- <tabA v-if="activeTab==='TabA'"/>
    <tabB v-if="activeTab==='TabB'"/>
    <tabC v-if="activeTab==='TabC'"/>  -->
</template>

<script>
import TabA from './tabA.vue'
import TabB from './tabB.vue'
import TabC from './tabC.vue'

export default {
    name:"dynamic_component",
    components:{
        TabA,
        TabB,
        TabC
    },
    data(){
        return {
            activeTab: 'TabA',
        }
    }
}
</script>
