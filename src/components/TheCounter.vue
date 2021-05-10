<template>
  <h3> {{finalCounter}}</h3>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    computed: {
      //return object su cui faccio lo spread operator
      ...mapGetters(['finalCounter']) //prende tutti i getter che gli passiamo come parametro
    }
  }
</script>
