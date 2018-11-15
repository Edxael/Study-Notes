<template>
  <div class="mc-About">
    <h1>About Component</h1>

    <b-card title="Card Title"
          v-if="seen"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 card-element">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </b-card>

    
    <div>
      <b-button v-on:click="handleClick" variant="primary" title="Title from title attribute">Show/Hide Card</b-button>
    </div>

    <hr>
    <br>

    <div>
      <b-form-textarea id="textarea1"
                      v-model="text"
                      placeholder="Enter something"
                      :rows="3"
                      :max-rows="6">
      </b-form-textarea>
      <br>
      <div><strong>Text: </strong></div>
      <div class="typedText" >{{text}}</div>
    </div>


    
  </div>
</template>

<script>

const items = [
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
]


export default {
  name: "About",
  data() {
    return{
      seen: false,
      singers: [{name: 'Ayumi'}, {name: 'Haruka'}, {name: 'Laura'}],
      items: items,
      text: ''
    }
  },
  methods: {
    handleClick() {
      console.log("Exe77")
      console.log(this)
      this.seen = !this.seen
    }
  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mc-About {
  border: 1px solid blue;
  background-color: rgb(255, 255, 255);
  height: 100%;
  padding: 15px;
}

.card-element{
  margin: 0px auto;
  border: 1px solid greenyellow;
}

.typedText{
  border: 2px solid black;
  min-height: 30px;
  text-align: left;
  padding: 10px;
  background-color: beige;
  border-radius: 5px;
}
</style>