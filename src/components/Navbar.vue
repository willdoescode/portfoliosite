<template>
  <div>
    <link rel="stylesheet" href="Regular-CSS.css">
    <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="../assets/ah.png" width="30" height="30" alt="">
      </a>
      <a class="navbar-brand" href="#">Will does tech</a>
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

  },
  created() {

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&display=swap');

.navbar-collapse.collapse {
  display: block!important;
}

.navbar-nav>li, .navbar-nav {
  float: left !important;
}

.navbar-nav.navbar-right:last-child {
  margin-right: -15px !important;
}

.navbar-right {
  float: right!important;
}
</style>
