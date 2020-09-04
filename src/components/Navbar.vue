<template>
  <div>
    <div class="container">
<!--      define a navbar-->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<!--        default link for my website to go home from all areas-->
        <router-link to="/" class="navbar-brand">Will Does Tech</router-link>
<!--        this button is only visible if the website has a small width, thank you bootstrap-->
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
<!--          default icon for the toggler-->
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
<!--              home button-->
              <router-link class="nav-link" to="/">Home<span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
<!--              about page button-->
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
<!--              contacts page button-->
              <router-link class="nav-link" to="/contacts">Contacts</router-link>
            </li>
            <li class="nav-item">
<!--              website design class page button-->
              <router-link class="nav-link" to="/webdesign">Web Design</router-link>
            </li>
            <li class="nav-item">
<!--              posts page button-->
              <router-link class="nav-link" to="/posts">Posts</router-link>
            </li>
            <li class="nav-item">
<!--              my generic social media account name-->
              <span class="navbar-text">@willdoescode</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
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

/*no styles for the navbar just good ole bootstrap*/
</style>
