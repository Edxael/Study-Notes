<template>
  <div class="main-container">
    <h1>About Component</h1>

    <div>
      <b-button variant="success" title="Title from title attribute">Log-In-77</b-button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  border: 1px solid blue;
  background-color: rgb(255, 255, 255);
  height: 80vh;
}
</style>