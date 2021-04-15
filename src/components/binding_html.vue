<template>
    <div v-html='channel'></div>
</template>

<script>
    export default{
        name:'binding_html',
        data(){
            return{
                channel:'<b>html test</b>',
            }
        }
    }
</script>