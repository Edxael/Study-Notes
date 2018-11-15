<template>
  <div class="mc-vb-classes" >
    <h4>V-Bootstap-Classes</h4>

    <div class="cl-05-info-container border border-danger rounded ">
      <div class="btns-cont mx-auto border border-dark rounded">
        <b-button class="w-50 " variant="dark" size="sm" >Button 1</b-button>
        <b-button class="w-75" variant="dark mt-2" size="sm" >Button 2</b-button>
      </div>
    </div>

    <div class="bg-secondary clearfix mt-4 rounded border border-dark">
      <button type="button" class="btn btn-primary w-25 float-left border border-dark">Btn1</button>
      <button type="button" class="btn btn-success float-right">Btn2</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'VBClasses'
};
</script>

<style scoped>
.mc-vb-classes{
  border: 1px solid blue;
  background-color: rgb(255, 255, 255);
  height: 100%;
  padding: 15px;
  text-align: left;
}

.cl-05-info-container{
  padding: 10px;
}

.btns-cont{
  /* border: 1px solid green; */
  padding: 10px;
  /* display: block; */
  width: 350px;
  text-align: center;
}

</style>