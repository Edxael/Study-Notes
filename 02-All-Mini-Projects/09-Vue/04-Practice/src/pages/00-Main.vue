<template>
  <div class="main-container">
    <div class="nav-menu">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/swapi">Swapi</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>

    <div class="router-view-container">
      <router-view/>
    </div>
    <dir>below</dir>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app'
}
</script>

<style>
.main-container {
  background-color: rgb(219, 219, 219);
  border: 1px solid black;
  height: 100vh;
  text-align: center;
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}

.router-view-container{
  width: 50%;
  margin: 0px auto 30px auto;
  /* background-color: rgb(255, 255, 255); */
  /* border: 1px solid red; */
}
</style>