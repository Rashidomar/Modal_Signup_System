<template>
  <h1>{{ title }}</h1>
  <div v-if="showSignup">
    <Signup @close="toggleSignup" />
  </div>
  <div v-if="showLogin">
     <Login @close="toggleLogin" />
  </div>
  <button @click="toggleSignup">Sign Up</button>
  <button @click="toggleLogin">Login</button>
   
</template>

<script>
import Signup from './components/signup.vue'
import Login from './components/login.vue'

export default {
  name: 'App',
  components :{Login, Signup}, 

  data(){
    return {
      title : "Hello  to the world!! :)",
      showSignup : false,
      showLogin : false,

    }
  },

  methods: {

    toggleSignup(){
      this.showSignup = !this.showSignup
    },

    toggleLogin(){
      this.showLogin = !this.showLogin
    },
  }

}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
