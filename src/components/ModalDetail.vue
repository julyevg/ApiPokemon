<template>
    
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