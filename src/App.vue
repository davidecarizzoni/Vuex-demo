<template>
  <base-container>
    <the-counter></the-counter>
    <button @click='addOne'> Add 10</button>
    <change-counter> </change-counter>
    <favourite-value> </favourite-value>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';


export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue
  },
  methods: {
    addOne(){
      this.$store.commit('increase', {value: 10});
      //in questo caso come secondo parametro gli passo oggetto con parametro value di 10
    }
  },

};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
