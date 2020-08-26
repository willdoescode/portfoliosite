<template>
  <div class="container">
      <img :src="itsMe" alt="">
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
  width: 300px;
  height: auto;
  border-radius: 50%;
  transition: 0.3s;
  padding: 10px;
}


img:hover {
  border-radius: 15px;
  cursor: pointer;
}
</style>
