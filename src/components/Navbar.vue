<template>
  <div>
    <link rel="stylesheet" href="Regular-CSS.css">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="../assets/ah.png" width="30" height="30" alt="">
      </a>
      <a class="navbar-brand" href="#">Will does tech</a>
      <button class="navbar-toggler" type="button" data-toggle="expand" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"><img style="width: 22px" src="../assets/home.png">&nbsp;<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_blank" :href="links['Contact Me']"><img src="https://user-images.githubusercontent.com/25087769/87174308-a4680f00-c2df-11ea-90b0-5fa1fa76d2f1.png"/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_blank" :href="links['My Github']"><img style="width: 22px" src="../assets/githublogo.png"/></a>
          </li>
        </ul>
      </div>
    </nav>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return {
      links: {
        'Contact Me': 'mailto:williamlane923@gmail.com',
        'My Github': 'https://github.com/willdoescode',
        'My Twitter': 'https://twitter.com/willdoescode'
      }
    }
  },
  link: [
    {
      type: 'text/javascript', src: "https://code.jquery.com/jquery-3.5.1.slim.min.js", crossorigin: "anonymous"
    },
    {
      type: 'text/javascript', src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js", crossorigin: "anonymous"
    },
    {
      type: 'text/javascript', src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js", crossorigin: "anonymous"
    }
  ],
  methods: {

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&display=swap');
</style>
