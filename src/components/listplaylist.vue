<template>
  <div v-for="(playlist, index) in playlists" :key="playlist.created_by" class="row mb-2 justify-content-md-center">
    <div class="col-md-7 col-md-offset-2">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">{{ index }}</strong>
          <h3 class="mb-0">{{ playlist.title }}</h3>
          <div class="mb-1 text-muted">{{playlist.songs.length}}</div>
          <p class="card-text mb-auto">Created By : {{playlist.created_by}}</p>
          <p class="card-text mb-auto">Created at : {{playlist.created_at}}</p>
          <router-link class="stretched-link" :to="{ name: 'PlaylistDetails', params: { username: playlist.created_by }}" >View Playlist</router-link>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="300" height="190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'
 export default{
   data(){
     return{
        playlists:[]
     }
   }, 

  mounted(){
   axios.get("http://localhost:3000/playlists").then(
      (result)=>{
        //  console.log(result.data[0].data)
       for(let i = 0; i < result.data.length; i++){
         this.playlists.push(result.data[i].data)
       }
        // console.log(this.playlists)
      }).catch((err)=>{
      console.log(err)
    });
  
  }


 }

</script>
