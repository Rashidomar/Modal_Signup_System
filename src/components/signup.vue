<template>
<div class="backdrop" @click.self="closebackdrop">
<div class="login-page">
  <div class="form">
    <form class="register-form">
      <input type="text" placeholder="Username"/>
      <input type="text" placeholder="email address"/>
      <input type="password" placeholder="password"/>
      <button>Sign Up</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
  </div>
</div>
</div>
</template>


<script>
export default {
    methods:{
        closebackdrop(){
            this.$emit("close")
        }

    }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #ddd8d8;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background-color: rgba(9, 192, 248, 0.74); 
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #04f3f3;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}

.backdrop {

  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(9, 192, 248, 0.74); /* Black w/ opacity */
}
</style>