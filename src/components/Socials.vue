<template>
  <div class="icons">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <a target="_blank" href="mailto:williamlane923@gmail.com"><img src="https://user-images.githubusercontent.com/25087769/87174308-a4680f00-c2df-11ea-90b0-5fa1fa76d2f1.png"/></a> &nbsp;
    <a target="_blank" href="https://twitter.com/willdoescode"><img src="https://user-images.githubusercontent.com/25087769/87172407-de83e180-c2dc-11ea-9479-a894758266c3.png"/></a> &nbsp;&nbsp;
    <a target="_blank" href="https://instagram.com/willdoescode"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" width="22"></a>
  </div>
</template>

<script>
export default {
  name: 'Socials'
}
</script>

<style scoped>
.icons {
  padding: 20px;
  transition: 0.3s;
  float: bottom;
}

.icons a{
  padding: 10px;
}

.icons img {
  transition: 0.3s;
}

.icons img:hover {
  transform: scale(1.1);
}
</style>
