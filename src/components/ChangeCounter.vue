<template>
  <button @click='increment'> Add 2 </button>
  <button @click='increase({value:12})'> Add 12 </button> <!-- Increase action expected payload-->
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    methods: {
      //addOne(){
      //  chiamo la mutation definita nel main.js
      //  this.$store.dispatch('increment');
      //}


      ...mapActions(['increment', 'increase'])
    }
  }
</script>
