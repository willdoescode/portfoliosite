<template>
  <div>
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
</style>
