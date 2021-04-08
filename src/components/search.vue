<template>
 <div class="content2">

    <div class= "input-search">
       <vs-input class="searchs" icon="search" placeholder="Search" v-model="value1" v-on:keyup.enter="search_pokemon"/>
    </div>

   <div v-if="pokemon_details">
      <pokemon-details v-bind:details="pokemon_details" ></pokemon-details>
  </div>
    

    <div >
          <h1 class= "error_msg">{{msg_error}}</h1>
    </div>
    <div >
          <h2 class= "msg">{{msg}}</h2>
    </div>
    <div>
          <router-link to="/welcome" tag="button" class="btn-red">Go back home</router-link>
    <router-view/>
    <FooterButton/>
    </div>
 </div>

</template>
<script>
  import Detail from '@/components/DetailPokemon'
   import FooterButton from '@/components/FooterButton'
export default {
  name: 'search',
  data () {
    return {
        value1:'',
      msg_error: 'Uh-oh!',
      msg :'You look lost on your journey!',
      pokemon_details: null,

    }
  
  }, 
   methods: {
    search_pokemon: function (e) {
      console.log(e.target.value)
            this.$http.get('https://pokeapi.co/api/v2/pokemon/' +e.target.value).then(res => console.log(res))
    }
  },
   created(){
     //this.pokemon_details = res.data
      this.$http.get('https://pokeapi.co/api/v2/pokemon/').then(res =>this.pokemon_details = res.body.results// console.log(res.body.results)
     
      )
    
    },
    components: {
      'pokemon-details': Detail,
      'FooterButton':FooterButton
    }
}
</script>

<style src=".././css/styles.css"></style>