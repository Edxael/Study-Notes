<template>
  <div class="main-container">
    <h1>Calling an API</h1>
    <br>
    <p>Select Character to get information..</p>

    <div>
      <b-form-select v-model="selected" :options="options" class="mb-3" />
    </div>

    <b-button variant="primary" v-on:click="swapiCall1" v-b-modal.modal1 >Call API</b-button>

    <div>
      <b-modal id="modal1" title="Character Information: ">
        <div class="modal-content">
          <div><strong>Name: </strong>{{name}}</div>
          <div><strong>Birthday: </strong>{{birthYear}}</div>
          <div><strong>Eye Color: </strong>{{eyeColor}}</div>
          <div><strong>Hair Color: </strong>{{hairColor}}</div>
        </div>
      </b-modal>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Swapi',
  data() {
    return{
      seen: true,
      selected: null,
      name: 'Data will be here soon',
      birthYear: '',
      hairColor: '',
      eyeColor: '',
      options: [
        { value: null, text: 'Please select character' },
        { value: '1', text: 'Luke Skywalker' },
        { value: '3', text: 'R2-D2' },
        { value: '4', text: 'Darth Vader' },
        { value: '5', text: 'Leia Organa' },
        { value: '10', text: 'Obi-Wan Kenobi' }
      ]
    }
  },
  methods: {
    swapiCall1() {
      console.log("exe: swapiCall1");
      console.log('Selected: ', this.selected)
      fetch(`https://swapi.co/api/people/${this.selected}/`)
          .then((stream) => { return stream.json() })
          .then((resp) => {
            console.log("resp inside of THEN method..: ", resp)
            this.name = resp.name
            this.birthYear = resp.birth_year
            this.hairColor = resp.hair_color
            this.eyeColor = resp.eye_color
          })
      return ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-container{
    border: 1px solid blue;
    background-color: rgb(255, 255, 255);
    height: 100%;
    padding: 15px 10px;
  }
  .modal-content{
    text-align: left;
    padding: 10px;
    background-color: rgb(237, 211, 255);
  }
</style>