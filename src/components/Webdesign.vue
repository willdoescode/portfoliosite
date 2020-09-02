<template>
  <div>
    <div class="wow">
      <h1>This part of my website is for web design class</h1>
      <div class="container">
        <router-link class="nav-link" to="/webdesign/testdesign">Test Design</router-link>
        <router-link class="nav-link" to="/webdesign/testdesign">Test Design</router-link>
        <router-link class="nav-link" to="/webdesign/testdesign">Test Design</router-link>
        <router-link class="nav-link" to="/webdesign/testdesign">Test Design</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Webdesign'
}
</script>

<style scoped>
h1 {
  color: white;
}

.container {
  display: flex;
  justify-content: center;
}

.nav-link {
  color: darkgrey;
}

.nav-link:hover {
  color: white;
  text-decoration: underline;
}

.wow {
  margin-top: 50px;
}
</style>
