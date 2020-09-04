<template>
  <div class="contain">
    <div class="contacts">
      <a target="_blank" href="https://github.com/willdoescode">My Github</a>
      <a target="_blank" href="mailto:williamlane923@gmail.com">Email Me</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
}
</script>

<style scoped>
.contain {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 500px;
  margin: 10% auto;
  text-align: center;
}

.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

a {
  border: 3px solid #09FBD3;
  padding: 10px 15px;
  transition: 0.3s;
  max-width: 60vw;
  justify-content: center;
  position: relative;
  width: 200px;
  margin-bottom: 2px;
  flex-grow: 1;
  color: darkgrey;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 22px;
}

a:hover {
  border: 3px solid #FE53BB;
  color: white;
}
</style>
