<template>
  <div class="main-container">
    <h1>Home Component</h1>

    <title1 msg="Info[Props] from parent component" >
      <p>child 1</p>
      <p>child 2</p>
      <p>child 3</p>
      <p>child 1</p>
      <p>child 1</p>
    </title1>
    <basic-txt />
    
  </div>
</template>

<script>
import TitleTex from "../components/01-Title-Text";
import BasicText from "../components/02-Basic-Text";

export default {
  name: 'Home',
  components: {
    "title1": TitleTex,
    "basic-txt": BasicText
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-container{
    border: 1px solid blue;
    background-color: rgb(255, 255, 255);
    height: 100%;
    padding: 15px;
  }
</style>
