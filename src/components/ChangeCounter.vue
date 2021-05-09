<template>
  <button @click='addOne'> Add 2 </button>
</template>

<script>
  export default {
    methods: {
      addOne(){
        //chiamo la mutation definita nel main.js
        this.$store.commit('increment');
      }
    }
  }
</script>
