import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const app = createApp(App);
const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false
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
    },
    setAuth(state, payload){
      state.isLoggedIn = payload.isAuth;
    }
  },
  actions: {
    //A differenza delle mutazioni si può eseguire codice asincrono delle actions
    increment(context) {
      setTimeout(()=>{
        context.commit('increment');
      }, 2000)
    },
    increase(context, payload){
      console.log(context);
      context.commit('increase', payload);
    },
    login(context) {
      context.commit('setAuth', {isAuth: true})
    },
    logout(context) {
      context.commit('setAuth', {isAuth: false})
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
    },
    userIsAuth(state){
      return state.isLoggedIn;
    }
  }
})

app.use(store);
app.mount('#app');

