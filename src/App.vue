<template>
  <div id="app">
    <Navbar class="nav" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  // declare all the components
  name: 'App',
  components: {
    Navbar,
  },
  watch: {
    '$route' (to) {
      document.title = to.meta.title || 'Your Website'
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&display=swap');
/*import a nice font*/

* {
  /*more base all encompassing styles*/
  margin: 0;
  padding: 0;
  font-family: 'Baloo Tamma 2', cursive;
  background-color: #343a40;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #343a40;
  height: 100vh;
/*  set a default background color to make site look nice and modern*/
}

.bob {
  /*couldnt think of a class name for the socials component so i just called it bob*/
  justify-content: space-around;
  height: auto;
}

/*this particular class isn't in this file but im styling it here anyway*/
.container {
  max-width: 100%;
}
</style>
