<template>
  <div class="mainContainer">

    <!-- <img src="../assets/evaPilots.jpg" alt="Pilots Picture"> -->

    <h1>{{ msg }}</h1>

    

    <div>{{btn1State ? 'Button is disabled: Wait to change pilot' : 'Click to change pilot'}}</div>
    <br>
    <button v-on:click="changePilotName" v-bind:disabled="btn1State" >Click to Change</button>
    <br><br>
    <hr>
    <br>

    <div>
      <!-- <p><strong>Pilot Name:</strong> {{ currentCharacter.characterName }}</p> -->
        <div>
          <ul>
            <li v-for="(data, index) in films" :key='index'>{{data.skill}}</li>
          </ul>

          <p v-if="films.length >= 2" >More than one skills</p>
          <p v-else >Only one skill</p>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "home2Export",
  props: {
    msg: String
  },
  data() {
    return {
      films: [{ skill: "ATF-Blade" }, { skill: "Shoulder Projectils" }]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainContainer {
  border: 7px solid white;
  background-color: rgb(201, 255, 255);
  width: 70%;
  padding: 20px 20px;
  margin: 0px auto;
}
</style>
