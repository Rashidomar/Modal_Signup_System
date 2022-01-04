<template>
<div class="container">
    <Nav />
</div> 
  <main class="container">
    <Listplaylist/>
  </main>
</template>

<script>
import Nav from '../components/nav.vue'
import Listplaylist from '../components/listplaylist.vue'
// import ListView from '../components/ListView.vue'
// import getCollection from '../composables/getCollection'
export default {
  name: 'Home',
  components :{Nav, Listplaylist}, 
}
</script>