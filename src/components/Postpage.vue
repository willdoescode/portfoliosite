<template>
  <div class="main">
    <meta property="og:title" content="Wills Very Smart Posts">
    <div class="post" v-for="post in posts" :key="post">
      <router-link data-hover="Click on me" class="nav-link" :to="{ name: 'posts', params: {id: post.id} }"><div>{{ post.title }}</div></router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Postpage',
  data() {
    return {
      posts: [],
      thing: '/posts/'
    }
  },
  methods: {
    getAmount() {
      fetch(`https://raw.githubusercontent.com/willdoescode/webposts/master/posts/posts.json`)
        .then(res => res.json())
        .then(data => (this.posts = data))
    },
  },
  beforeMount() {
    this.getAmount()
  },
}
</script>

<style scoped>
*, *:before, *:after {
  box-sizing: border-box;
  padding: 0; margin: 0;
  font: 300 1em/1.5 'sans-serif', 'Helvetica';

}


p {
  color: white;
}

div {
  color: white;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 500px;
  margin: 10% auto;
  text-align: center;
}

.post {
  justify-content: center;
  position: relative;
  width: 300px;
  flex-grow: 1;
}

.nav-link {
  color: darkgrey;
  font-weight: bold;
  font-size: 22px;
  border: 1px solid #09FBD3;
  transition: 0.3s;
  max-width: 60vw;
  background: transparent; outline: none;
  position: relative;
  padding: 15px 50px;
  overflow: hidden;
}

.nav-link:hover:before{opacity: 1; transform: translate(0,0);}
.nav-link:before{
  content: attr(data-hover);
  position: absolute;
  top: 1.1em; left: 0;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  font-size: .8em;
  opacity: 0;
  transform: translate(-100%,0);
  transition: all .3s ease-in-out;
}

.nav-link:hover div{opacity: 0; transform: translate(100%,0)}
.nav-link div{
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  font-size: .8em;
  transition: all .3s ease-in-out;
}

.nav-link:hover {
  color: white;
  text-decoration: Scrollbar;
  border: 2px solid #FE53BB;
}
</style>
