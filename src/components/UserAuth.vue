<template>
  <button v-if='!isAuth' @click='login'> Login </button>
  <button v-if='isAuth' @click='logout'> Logout </button>
</template>


<script>
  export default {
    methods: {
      login(){
        console.log("sono nella login")
        this.$store.dispatch('login');
      },
      logout() {
        this.$store.dispatch('logout');
      }
    },
    computed: {
      isAuth(){
        return this.$store.getters.userIsAuth;
      }
    }
  }
</script>
