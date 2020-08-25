<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <Navbar class="nav" />
    <Me />
    <About />
    <Socials class="bob" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Me from "@/components/Me";
import Socials from "@/components/Socials";
import About from "@/components/About";

export default {
  name: 'App',
  components: {
    Navbar,
    Me,
    About,
    Socials,
  },
  methods: {

  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&display=swap');

* {
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
}

.bob {
  justify-content: space-around;
  height: auto;
}
</style>
