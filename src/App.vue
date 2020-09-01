<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--    include all of the components-->
    <Navbar class="nav" />
    <Me class="what"/>
    <About />
    <Posts />
    <Socials class="bob" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Me from "@/components/Me";
import Socials from "@/components/Socials";
import About from "@/components/About";
import Posts from "@/components/Posts"
// import all the components

export default {
  // declare all the components
  name: 'App',
  components: {
    Navbar,
    Me,
    About,
    Socials,
    Posts
  }
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
