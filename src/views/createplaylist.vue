<template>
<div class="background">
<div class="c_playlist">
    <form class="row g-3 p_form">
    <div class="col-12">
        <label for="inputAddress" class="form-label">Title</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
    </div>
    <div class="col-12">
        <label for="inputAddress2" class="form-label">Description</label>
        <textarea class="form-control" ></textarea>
    </div>
    <div class="col-12">
        <button type="submit" class="btn btn-primary">Create Playlist</button>
    </div>
    </form>
</div>
</div>
</template>

<script>

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
</style>
