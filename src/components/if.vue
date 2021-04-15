<template>
<div>
    <h2 v-if='number'> the number is zero</h2>
    <h2 v-else-if='number >0 '> the number is positive</h2>
    <h2 v-else-if='number <0 '> the number is negative</h2>
    <h2 v-else> not a number</h2>
    <div v-if="display">
        <h1>test</h1>
        <h1>test</h1>
    </div>

    <h2 v-show='showElement'>hahah</h2>
</div>
</template>

<script>
    export default{
        name:'if',
        data(){
            return{
                number:5,
                display:true,
                showElement:true,
            }
        }
    }
</script>


// v-show 跟v-if 的区别，
// v-show 为false 时，display：none ,元素还在dom里面
// v-if 为false的时候， 元素不在dom里面