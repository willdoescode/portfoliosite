<template>
  <div class="container">
      <img class="justify-content-lg-center" :src="itsMe" alt="">
  </div>
</template>

<script>

export default {
  name: 'Me',
  data() {
    return {
      itsMe: require('../assets/me.jpg')
    }
  },
  methods: {

  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

img {
  height: auto;
  border-radius: 50%;
  transition: 0.3s;
  padding: 10px;
}


img:hover {
  border-radius: 25%;
  cursor: pointer;
}
</style>
