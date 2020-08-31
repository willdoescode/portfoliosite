<template>
  <div class="container">
<!--    picture of me-->
      <img :src="itsMe" alt="">
  </div>
</template>

<script>

export default {
  name: 'Me',
  data() {
    return {
      // required picture so when the vue is compiled it still works
      itsMe: require('../assets/me.jpg')
    }
  },
}
</script>

<style scoped>
* {
  /*basic all encompassing styling*/
  margin: 0;
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
  background-image: linear-gradient(to bottom, peru, coral);
}


img:hover {
  /*make a nice hover effect*/
  border-radius: 15px;
  cursor: pointer;
}

</style>
