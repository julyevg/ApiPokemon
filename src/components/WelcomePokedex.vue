<template>
  <div class="content">
      <div id ="divImg">
            <figure>
              <img id="pikachu"  src=".././assets/pikachu.svg"/>
            </figure>
        </div>
    <div >
          <h1 class= "welcome">{{msg}}</h1>
    </div>
     <div class = "description" v-html="description"></div>
      <div>
          <router-link to="/search" tag="button" class="btn-red">Get started</router-link>
<router-view/>
      </div>
  </div>
</template>
<script>
export default {
  name: 'WelcomePokedex',
  data () {
    return {
      msg: 'Welcome to Pokédex',
      description :'<h3>The digital encyclopedia created by Professor Oak is an  invaluable tool to Trainers in the Pokémon world.</h3>',
    }
  }, 
  methods:{

  },
  created(){
      console.log('hola');
      this.$http.get('https://pokeapi.co/api/v2/pokemon').then(res => console.log(res))
    
    }
}
</script>
<style src=".././css/styles.css"></style>