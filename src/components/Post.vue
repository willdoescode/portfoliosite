<template>
  <div>
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
export default {
  name: 'Post.vue',
  methods: {

  },
  components: {
  },
  data() {
    return {
      post: undefined
    }
  },
  beforeMount() {
    fetch(`https://raw.githubusercontent.com/willdoescode/webposts/master/posts/posts.json`)
    .then(data => data.json())
    .then(res => this.post = {...res[this.$route.params.id]})
  },
  created() {
  }
}
</script>

<style scoped>
h1 {
  color: white;
}

p {
  color: white;
}
</style>
