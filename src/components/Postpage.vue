<template>
  <div class="main">
    <div class="post" v-for="post in posts" :key="post">
      <router-link class="nav-link" :to="{ name: 'posts', params: {id: post.id} }">{{ post.title }}</router-link>
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
  margin-top: 30px;
}

.post {
  display: flex;
  justify-content: center;
  width: 250px;
}

.nav-link {
  color: darkgrey;
  font-weight: bold;
  font-size: 22px;
  border: 3px solid #09FBD3;
  width: auto;
  margin: 10px;
  transition: 0.3s;
  max-width: 60vw;
}

.nav-link:hover {
  color: white;
  text-decoration: underline;
  border: 3px solid #FE53BB;
}
</style>
