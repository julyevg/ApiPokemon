<template>
  <div class="content">
    <div >
          <h1 class= "welcome">{{msg}}</h1>
    </div>
     <div class = "description" v-html="description"></div>
      <div>
          <router-link to="/search" tag="button" class="btn-red">Get started</router-link>
          < RouterLink  : to = " www.google.com " > Google </ RouterLink >
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
<style scoped>
.btn-red
{
  display: flex;
  justify-content: center;
  padding: 11px 20px;
  background: #F22539;
  border-radius: 60px;
  color: #FFFFFF;
  align-items: center;
  margin: 0 auto;
}
.description
{
  font-family: Lato;
  font-style: normal;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #5E5E5E;
}
.welcome
{
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  text-align: center;
  color: #353535;
}
</style>