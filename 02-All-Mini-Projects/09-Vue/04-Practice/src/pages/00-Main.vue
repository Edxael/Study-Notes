<template>
  <div class="main-container">

    <div class="nav-menu">
      <nav>
        <router-link class="link1" to="/">Home</router-link>
        <router-link class="link1" to="/swapi">Swapi</router-link>
        <router-link class="link1" to="/about">About</router-link>
        <router-link class="link1" to="/extra">Extra</router-link>
        <router-link class="link1" to="/cssclasses">Classes</router-link>
      </nav>
    </div>

    <div class="router-view-container">
      <router-view/>
    </div>

    <div>by: Webaholics</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app'
}
</script>

<style >
body{
  background-color: rgb(219, 219, 219);
  text-align: center;
}

nav {
  padding: 20px 20px 20px 0;
}

.link1 {
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
  height: 85vh;
  margin: 0px auto 30px auto;
  /* background-color: rgb(255, 255, 255); */
  /* border: 1px solid red; */
}
</style>