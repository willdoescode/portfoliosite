<template>
  <div class="container">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="pic">
      <img :src="itsMe" alt="">
    </div>
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

.pic img {
  height: auto;
  border-radius: 50%;
  transition: 0.3s;
  padding: 10px;
}

.container {
  display: flex;
  width: 100%;
  justify-content: center;
}

.pic img:hover {
  border-radius: 25%;
  cursor: pointer;
}
</style>
