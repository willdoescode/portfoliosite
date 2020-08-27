<template>
  <div class="icons">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <a target="_blank" href="mailto:williamlane923@gmail.com"><img src="https://user-images.githubusercontent.com/25087769/87174308-a4680f00-c2df-11ea-90b0-5fa1fa76d2f1.png"/></a> &nbsp;&nbsp;
    <a target="_blank" href="https://github.com/willdoescode"><img style="width: 22px" src="../assets/githublogo.png"/></a>
    <br>
    <br>
    <div class="copyright">
      © {{ getYear() }}
    </div>
    <!-- Hello -->
  </div>
</template>

<script>
export default {
  name: 'Socials',
  methods: {
    getYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.icons {
  padding: 20px;
  transition: 0.3s;
  float: bottom;
}

.icons a {
  padding: 10px;
}

.icons img {
  transition: 0.3s;
}

.icons img:hover {
  transform: scale(1.1);
}

.copyright {
  color: white;
}
</style>
