<template>
    <div v-bind:class='status'>status</div>
    <div :class='status'>status2</div>

    <!-- 添加一个class  -->
    <div class='under_line' :class='status'>status3</div>

    <!-- 如果isPromoted 为true 就添加promoted class -->
    <div class='under_line' :class="isPromoted && 'promoted'">status3</div>
    <div class='under_line' :class="isSoldout ? 'sold-out' : 'new'">status3</div>

    <div :class="['new','promoted']">status3</div>
    <div :class="[isPromoted && 'promoted',isSoldout ? 'sold-out' : 'new']">status3</div>


    <!-- 用object比上面用数组的方式要方便很多 -->
    <div :class="{
        promoted:isPromoted,
        new:!isSoldout,
        'sold-out':isSoldout,
    }">status3</div>
    
    <!-- v-bind 的缩写是:   -->
</template>

<script>
    export default{
        name:'binding_class',
        data(){
            return{
                status:'danger',
                isPromoted:true,
                isSoldout: false,
            }
        }
    }
</script>
