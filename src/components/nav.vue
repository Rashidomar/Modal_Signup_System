<template>
  <header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a
          href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <use xlink:href="#bootstrap" />
          </svg>
        </a>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link class="nav-link px-2 link-secondary" to="/">Home</router-link></li>
        </ul>
        <div v-if="user" class="dropdown text-end">
          <span class="">Hi there, {{ user[0].data.username + '  '}}</span>
          <router-link class="btn btn-outline-primary me-2" :to="{ name: 'CreatePlaylist' }">Create Playlist</router-link>
          <router-link class="btn btn-outline-primary me-2" :to="{ name: 'UserPlaylists' }">My Playlists</router-link>
          <button class="btn btn-primary" @click="logout">Logout</button>
        </div>
        <div v-else class="dropdown text-end">
            <router-link class="btn btn-outline-primary me-2" to="/login">log In</router-link>
            <router-link class="btn btn-primary" to="/signup">Sign Up</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import Signup from '../views/signup.vue'
// import Login from '../views/login.vue'
// import Playlist from '../views/createplaylist.vue'
export default {
name: 'Nav',
// components :{Login, Signup, Playlist}, 

data(){
  return {
      user:''

    }
  },

methods: {
    logout(){
      localStorage.clear();
      this.$router.push({name:'login'})
    }
  },

  mounted(){
    const user_info = JSON.parse(localStorage.getItem('user-info'));
    this.user = user_info
  }


};
</script>
