<template>
  <div class="post">
    <div class="back">
<!--      basic back button routing-->
      <router-link class="back-button" to="/posts">Back</router-link>
    </div>
<!--    display the current posts title and body-->
    <h1>{{ post.title }}</h1>
    <h3>{{ post.body }}</h3>
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
    // Get posts based off of route parameters
    fetch(`https://raw.githubusercontent.com/willdoescode/webposts/master/posts/posts.json`)
    .then(data => data.json())
    .then(res => this.post = {...res[this.$route.params.id]})
    .then(what => console.log(what))
  },
  created() {
  }
}
</script>

<style scoped>
*:hover {
  cursor: default;
}

h1 {
  color: white;
}
h3 {
  color: white;
  text-decoration: underline;
  text-decoration-color: #09FBD3;
  transition: 0.3s;
  max-width: 60vw;
}

h3:hover {
  text-decoration-color: #FE53BB;
}

.post {
  display: flex;
  flex-direction: column;
  min-width: 300px;
  align-items: center;
  margin-top: 30px;
}

h1 {
  border: 3px solid #09FBD3;
  margin-bottom: 40px;
  padding: 10px 15px;
  transition: 0.3s;
  max-width: 60vw;
}

h1:hover {
  border: 3px solid #FE53BB;
}

.back {
  display: flex;
  margin-bottom: 30px;
  margin-right: 200px;
  font-size: 20px;
  border: 1px solid #FE53BB;
  padding: 3px;
  transition: 0.3s;
}

.back-button {
  color: white;
  text-decoration: none;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
}

.back:hover {
  border: 1px solid #09FBD3;
}

</style>
