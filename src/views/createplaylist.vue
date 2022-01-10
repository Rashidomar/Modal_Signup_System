<template>
<div class="background">
<div class="c_playlist"> 
    <form class="row g-3 p_form">
    <router-link to="../" class="p_close">X</router-link>
    <div class="col-12">
        <label for="inputAddress" class="form-label">Title</label>
        <input type="text" class="form-control" v-model="title" placeholder="1234 Main St">
    </div>
    <div class="col-12">
        <label for="inputAddress2" class="form-label">Description</label>
        <textarea class="form-control" v-model="description" ></textarea>
    </div>
    <div class="col-12">
        <button type="submit" @click="submit" class="btn btn-primary">Create Playlist</button>
    </div>
    </form>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            title:'',
            description:'',
            date_time: new Date().toLocaleString(),
            user_id:'',
            created_by:'',
            songs:[]
        }
    },

    methods:{
        async submit(e){
            e.preventDefault()
            // console.log(this.date_time)
            const data = {
                title: this.title,
                description: this.description,
                user_id:this.user_id,
                created_by:this.created_by,
                created_at: this.date_time,
                songs:this.songs
            };

            const response = await axios.post('http://localhost:3000/playlists', {data})

            if(response.status == 201){
                console.log(data)
                this.$router.push({name:'Home'})
            }

        }   
        
    },

    mounted(){  
      const user = JSON.parse(localStorage.getItem("user-info"));
      if(!user){
          this.$router.push({name:'Home'})
        }else{
            this.user_id = user[0].id
            this.created_by = user[0].data.username
        } 
    }

}


</script>

<style scoped>
.c_playlist{
  width: 400px;
  padding: 8% 0 0;
  margin: auto;
}
.background {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(6, 62, 247, 0.664); /* Black w/ opacity */
}

.p_form{
position: relative;
  z-index: 1;
  background: #f5f1f1;
  max-width: 400px;
  margin: 0 auto 100px;
  padding: 45px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 5px;
}

.p_close{
    position: absolute;
    background:  rgba(6, 62, 247, 0.664);
    color: white;
    top: -16px;
    right: 0px;
    width: 40px;
    text-decoration: none;
    text-align: center;
}
</style>
