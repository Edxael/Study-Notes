<template>
  <div class="main-container">
    <h1>Main Component</h1>
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

    
    
  </div>
</template>

<script>
export default {
  name: "Main"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  background-color: rgb(219, 219, 219);
  border: 1px solid black;
  height: 100vh;
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
