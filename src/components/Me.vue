<template>
  <div class="container">
<!--    picture of me-->
      <img src="https://raw.githubusercontent.com/willdoescode/willdoescode/master/willdoescode.JPG" alt="me">
      <h3>My name is Will Lane</h3>
  </div>
</template>

<script>

export default {
  name: 'Me',
}
</script>

<style scoped>
* {
  /*basic all encompassing styling*/
  margin-top: 15px;
  padding: 0;
}

img {
  /*make image smalled and also round*/
  width: 300px;
  height: auto;
  border-radius: 50%;
  transition: 0.3s;
  /*make it transition slower*/
  padding: 10px;
  background-image: linear-gradient(to bottom, #08F7FE, #09FBD3, #FE53BB, #F5D300);
}

img:hover {
  /*make a nice hover effect*/
  border-radius: 15px;
}

h3 {
  margin-top: 25px;
}

</style>
