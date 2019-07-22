<template>
    <div>
        <input type="button" @click="sub" value="-" >
        <span id="counter" >{{counter}}</span>
        <input type="button" @click="add" value="+" >
    </div>
</template>

<script>
    export default {
        name: 'Counter',
        props: {
            msg: String
        },
        data(){
           return{
               counter:0
           }
        },
        methods:{
            add(){
                this.counter+=1;
                this.$store.commit('calculateSum',1);
            },
            sub(){
                this.counter-=1;
                this.$store.commit('calculateSum',-1);
               
            }
        },
        destroyed(){
            this.$store.commit('calculateSum',-this.counter);
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
