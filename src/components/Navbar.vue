<template>
  <div>
    <link rel="stylesheet" href="Regular-CSS.css">
<!--    add regular css styling instead of bootstrap-->
    <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
<!--      navbar section-->
      <a class="navbar-brand" href="/">
<!--        coding icon to the right of the navbar goes to the root of the website-->
        <img class="stupid" src="../assets/ah.png" width="30" height="30" alt="">
      </a>
      <a class="navbar-brand" href="/" style="color: peru; font-size: 2vh">Will does tech</a>
<!--      site name also goes to root of site-->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
<!--          list of images to include in navbar-->
          <li class="nav-item active">
            <a class="nav-link" href="/"><img style="width: 22px" src="../assets/home.png">&nbsp;<span class="sr-only">(current)</span></a>
<!--            home button for navbar-->
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_blank" :href="links['Contact Me']"><img src="https://user-images.githubusercontent.com/25087769/87174308-a4680f00-c2df-11ea-90b0-5fa1fa76d2f1.png"/></a>
<!--            email icon in navbar that goes to a mailto link-->
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_blank" :href="links['My Github']"><img style="width: 22px" src="../assets/githublogo.png"/></a>
<!--            github logo that goes to my github account-->
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
        // links object for easy access
        'Contact Me': 'mailto:williamlane923@gmail.com',
        'My Github': 'https://github.com/willdoescode',
        'My Twitter': 'https://twitter.com/willdoescode'
      }
    }
  },
  link: [
    //  including crap to make site work
    {
      type: 'text/javascript', src: "https://code.jquery.com/jquery-3.5.1.slim.min.js", crossorigin: "anonymous"
    },
    {
      type: 'text/javascript', src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js", crossorigin: "anonymous"
    },
    {
      type: 'text/javascript', src: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js", crossorigin: "anonymous"
    }
  ]
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&display=swap');
/*import a nice font from google fonts*/

/*all the rest of the css is just to disable the default navbar collapse button as it was not working for me*/

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

.navbar-brand {
  padding-top: 10px!important;
  transition: 0.3s;
}

.navbar-brand:hover {
  text-decoration: underline;
  transform: scale(1.1);
}

.nav-link {
  transition: 0.3s;
}

.nav-link:hover {
  transform: scale(1.1);
}

/*couldnt think of a better class name*/
.stupid {
  transition: 0.3s;
}

.stupid:hover {
  transform: scale(1.1);
}
</style>
