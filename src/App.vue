<template>
  <div id="app">
      

<router-view/>
  </div>
</template>
<script>
import WelcomePokedex from './components/WelcomePokedex'
export default {
  name: 'App',
  components: {
    WelcomePokedex
  }
}
</script>
<style>

</style>