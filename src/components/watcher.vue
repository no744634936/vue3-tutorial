<template>
  <!-- Watchers -->
  <div>
    <h2>Volume Tracker (0-20)</h2>
    <h3>Current Volume - {{ volume }}</h3>
    <div>
        <button @click="volume += 2">Increase</button>
        <button @click="volume -= 2">Decrease</button>
    </div>
    <input type="text" v-model="movie" />


    
    <input type="text" v-model="movieInfo.title" />
    <input type="text" v-model="movieInfo.actor" />

    <button @click="movieList.concat(['Wonder Woman'])">
        Add movie
    </button>
  </div>
</template>



<script>
    export default{
        name:'watcher',
        data(){
            return{
                volume:0,
                movie: 'batman',
                movieInfo: {
                    title: '',
                    actor: '',
                },
                movieList: ['Batman', 'Superman'],
                        }
                    },
        watch: {
            volume(newValue, oldValue) {
                if (newValue > oldValue && newValue === 16) {
                    alert('Listening to a high volumne for a long time may damage your hearing')
                }
            },
            movie: {
                handler(newValue) {
                    console.log(`Calling API with movie name = ${newValue}`)
                },
                immediate: true,// dom一渲染就call api
            },
            movieInfo: {
                handler(newValue) {
                    console.log(
                    `Calling API with movie title = ${newValue.title} and actor = ${newValue.actor}`
                    )
                },
                deep: true,// 用来追踪object的属性
            },
            movieList: {
                handler(newValue) {
                    console.log(`Updated list ${newValue}`)
                },
                deep: true,// 用来追踪数组的变化
            },
        }
    }
</script>