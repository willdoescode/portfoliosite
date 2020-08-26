<template>
  <div class="container">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <p class="about">
      Hi, My name is William Lane. I am a {{ getYear() }} year old highschool student, and I do code! <br/>
      My coding journey so far has been interesting, I started with python and I liked it very much, using python I wrote a automated
      <a target="_blank" href="https://github.com/willdoescode/bot">bot</a> for the popular chat service called discord. Then I moved on to Java and wrote a
      <a target="_blank" href="https://github.com/willdoescode/willsautoclick">autoclicker</a> using the popular java library called swing.
      Now I am at the web dev stage of my coding journey, I am learning the Vue.Js framework which I wrote this site in and I am enjoying web dev very much.
    </p>

  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    getYear() {
      let year = new Date().getFullYear()
      return  year - 2006
    }
  },
  created() {
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&display=swap');

.container {
  padding-top: 30px;
}

.container p {
  color: white;
  font-family: 'Baloo Tamma 2', cursive;
  font-size: 20px;
}

.container a {
  color: #ffaaaa;
  font-weight: 800;
}

.about {
  padding: 10px;
}
</style>
