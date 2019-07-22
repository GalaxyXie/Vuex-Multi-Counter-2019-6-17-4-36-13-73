<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div>
        <input type="number" v-model.number="counterNum">
        <span v-for="item in counterNum" v-bind:key = "item.key">
        <Counter /></span>
        <CounterSum />
    </div>
</template>

<script>
    import Counter from './Counter'
    import CounterSum from './CounterSum'
    export default {
        name: 'CounterGroup',
        components: {
            Counter,
            CounterSum
        },
        props: {
            msg: String
        },
        data(){
                
                return{
                    sum:0,
                   counterNum:2
                }

        },
        methods:{
          
        }

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
