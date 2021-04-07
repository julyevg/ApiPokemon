<template>
  <div id="app">
        <div>
            <figure>
              <img id="pikachu"  src="./assets/pikachu.svg"/>
            </figure>
        </div>
<WelcomePokedex/>

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
figure
{
    display: flex;
    justify-content: center;
    width: 325px;
    height: 288px;
    position: relative;
}

figure::before{
  content: "";
  width: 206px;
  height: 206px;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  top: 67px;
  right: 68px;
  background: #F22539;
  border: 2px solid #000000;
}
body{
  height: 100vh;
  width: 100vw;
}
#app{

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
#pikachu{
width: 100%;
height: auto;
}
</style>