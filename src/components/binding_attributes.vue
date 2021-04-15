<template>
    <div v-bind:id='head_id'>head</div>
    <button :id='button_id'>button</button>
    <a :href="url"> to baidu </a>
    <!--  v-bind 的缩写是:  -->
</template>

<script>
    export default{
        name:'binding_attr',
        data(){
            return{
                head_id:'heading',
                button_id:'btn1',
                url:'https://www.baidu.com'
            }
        }
    }
</script>
