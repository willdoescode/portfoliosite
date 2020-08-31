<template>
  <div class="container">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <p class="about">
<!--      my about paragraph-->
      Hi, My name is Will Lane. I am a {{ getYear() }} year old high school student, and am a coder!
      My coding journey so far has been interesting. I started with Python and I liked it very much. Using Python I wrote an automated
      <a target="_blank" href="https://github.com/willdoescode/bot">bot</a> for the popular chat service called discord. Then I moved on to Java, and wrote an
      <a target="_blank" href="https://github.com/willdoescode/willsautoclick">autoclicker</a> using the popular Java library called swing.
      Now I am at the web dev stage of my coding journey, I am learning the progressive JS framework called Vue.Js, which I wrote <a target="_blank" href="https://github.com/willdoescode/portfoliosite">this site</a> in and I am enjoying web dev very much.
    </p>

  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    getYear() {
      let year = new Date().getFullYear()
      // get the full year
      if (new Date().getMonth() < 9 && new Date().getDay() < 23) {
        // if the month is less than september and the day is less than the 23rd subtract a year because its not my birthday yet
        year--
      }
      return  year - 2006
    //  return the current year minus the year I was born
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&display=swap');

.container {
  /*center the text*/
  padding-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.container p {
  /*make text width smaller*/
  color: white;
  font-family: 'Baloo Tamma 2', cursive;
  font-size: 20px;
  width: 60vw;
  border: 1px solid peru;
}

.container a {
  /*change colors for hrefs*/
  color: coral;
  font-weight: 800;
  transition: 0.3s;
}

.about {
  /*a lil padding never hurts*/
  padding: 10px;
}
</style>
