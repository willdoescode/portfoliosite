<template>
  <div class="container">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <p class="about">
      Hi, My name is William Lane. I am a highschool student interested in computer science! <br/>
      Though I am not the best programmer yet I am slowely working my war towards my dream job at a <a href="https://raw.githubusercontent.com/willdoescode/willdoescode/master/what.txt" target="_blank">F.A.A.N.G.</a> company.
    </p>

  </div>
</template>

<script>
export default {
  name: 'About',

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
  color: white;
  font-weight: 800;
}

.about {
  padding: 10px;
}
</style>
