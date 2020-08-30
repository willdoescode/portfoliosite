<template>
  <div class="icons">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--    add two icons to include at the bottom of my page to make it look more professional-->
    <a target="_blank" href="mailto:williamlane923@gmail.com"><img src="https://user-images.githubusercontent.com/25087769/87174308-a4680f00-c2df-11ea-90b0-5fa1fa76d2f1.png"/></a> &nbsp;&nbsp;
    <a target="_blank" href="https://github.com/willdoescode"><img style="width: 22px" src="../assets/githublogo.png"/></a>
    <br>
<!--    blank lines for formatting-->
    <br>
    <div class="copyright">
<!--      funny copyright thing, all websites have it so i might as well, also made it change with the year-->
      © {{ getYear() }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Socials',
  methods: {
    getYear() {
      // just a basic method to return the year for my stupid copyright thing
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.icons {
  /*basic padding, transition, and made them sit at the bottom together*/
  padding: 20px;
  transition: 0.3s;
  float: bottom;
}

.icons a {
  /*more padding for the icons not the copyright*/
  padding: 10px;
}

.icons img {
  /*more transition*/
  transition: 0.3s;
}

.icons img:hover {
  /*scale transform on hover makes site look and feel more professional and modern*/
  transform: scale(1.1);
}

.copyright {
  /*make the copyright thing white and more transparent*/
  color: rgba(255, 255, 255, 0.2);
}
</style>
