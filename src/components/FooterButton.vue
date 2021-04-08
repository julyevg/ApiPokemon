<template>
    <div class="footer_button">
   
          <div class="group-button">
          <router-link to="/search" tag="button" class="buttonFooter" >
            <span class="material-icons color-icons">list </span>
            All
          </router-link>
          <router-link to="/search" tag="button" class="buttonFooter"  >
          <span class="material-icons color-icons">star_rate</span>Favorites
          </router-link>
<router-view/>
      </div>
    </div>
</template>

<script>
export default {
  name: 'footerButton',

}
</script>
<style src=".././css/styles.css"></style>