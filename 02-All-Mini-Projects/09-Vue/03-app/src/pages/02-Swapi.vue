<template>
  <div class="main-container">
    <h1>Swapi Component</h1>
    <br>
    <button v-on:click="swapiCall1" >Call API</button>
  </div>
</template>

<script>
export default {
  name: 'Swapi',
  methods: {
    swapiCall1: () => {
      console.log("exe: swapiCall1");
      return new Promise((resolve) => {
        fetch('https://swapi.co/api/people/1/')
          .then((stream) => { return stream.json() })
          .then((resp) => {
            console.log("resp inside of THEN method: ", resp)
            resolve(resp)
          })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-container{
    border: 1px solid blue;
    background-color: rgb(255, 255, 255);
    height: 80vh;
  }
</style>