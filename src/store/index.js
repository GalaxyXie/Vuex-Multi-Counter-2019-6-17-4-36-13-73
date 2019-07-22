import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      calculateSum(state,n){
          state.count += n;
      }
    }
  })
  export default store