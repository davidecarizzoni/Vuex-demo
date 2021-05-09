import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const app = createApp(App);
const store = createStore({
  state() {
    return {
      counter: 0,
    }
  },
  mutations: {
    //contengono il metodo per cambiare il valore dello stato
    increment(state){
        state.counter = state.counter+2;
    },
    increase(state, payload){
      //payload può essere qualsiasi cosa
      state.counter = state.counter + payload.value;
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters){
      const finalCounter =  getters.finalCounter;
      if(finalCounter<0)
        return 0;
      if(finalCounter>100)
        return 100
      return finalCounter;
    }
  }
})

app.use(store);
app.mount('#app');

