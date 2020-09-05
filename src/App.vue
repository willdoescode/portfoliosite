<template>
  <div id="app">
<!--    I keep the navbar separate from the router so its available everywhere-->
    <Navbar class="nav" />
<!--    router view is the view of the website inside of the router so instead of defining components
        here I just define them in the component I use for the router called HomePage.vue-->
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
  // This dynamically changes the tab name based off of the current route
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

/*custom scroll bar*/
::-webkit-scrollbar {
  /*make it kinda small*/
  width: 5px;
}

::-webkit-scrollbar-track {
  /*no custom background rn*/
  background: #343a40;
}

::-webkit-scrollbar-thumb {
  /*sticking with the color scheme*/
  background: #09FBD3;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  /*still sticking with the color scheme*/
  background: #FE53BB;
}

</style>
