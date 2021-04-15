
<template>
    <div>
        <!-- v-once     v-pre -->
        <h2 v-once>{{ name }}</h2>
        <button @click="name = 'Batman'">Change name</button>
        <h2 v-pre>{{ name }}</h2>
        <!-- v-once 修饰的标签值渲染第一次，之后就不在渲染。用于提升渲染速度 -->
        <!-- v-pre 修饰的标签不检查标签里的变量，用于提升渲染速度 -->
        <!-- 这两个标签很少用到 -->
    </div>

</template>

<script>
    export default{
        name:'v-once_pre',
        data(){
            return{
                name:"zhang"
            }
        },
        methods: {
            changeName() {
                this.name = 'Batman'
            },
        }
        
    }
</script>







