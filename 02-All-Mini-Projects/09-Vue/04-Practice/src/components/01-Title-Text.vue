<template>
  <div class="mc-titleText" >
    <h4>Title-Text Component</h4>
    <p><strong>Text from props: </strong></p>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'TitleText',
  props: {
    msg: String
  }
};
</script>

<style scoped>
.mc-titleText{
  border: 10px solid black;
  height: 40%;
}
</style>