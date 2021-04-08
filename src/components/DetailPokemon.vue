<template>
<div class="pokemon_detail box">
     <vs-row >
        <vs-col class ="detail" >
            <vs-card v-for="dtPokemon in details" :key="dtPokemon.name" >
                <div @click="showModal = false" >
                    <span class="detailName">
                    {{dtPokemon.name}}
                      <button class="button_favorite">
                          <img class ="img_start" src=".././assets/Start.svg"/> </button>
                    </span>
                      
                </div>
            </vs-card>
        </vs-col>
        </vs-row>

    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>   
</div>

</template>

<script>
export default {
  name: 'pokemon_detail',
  props: ['details'],
    data(){
    return {
    
    }
    },
  methods:{
      detailsView(color){
          console.log(color)
      },
    close(){
      this.$vs.notify({
        color:'danger',
        title:'Closed',
        text:'You close a dialog!'
      })
    }
  }
}
</script>
