<template>
    <div class="container">
        <iframe class="iframe"
  src="https://carbon.now.sh/embed?bg=rgba(30%2C38%2C59%2C1)&t=monokai&wt=none&l=javascript&ds=false&dsyoff=0px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira%20Code&fs=13.5px&lh=204%25&si=false&es=2x&wm=false&code=methods%253A%2520%257B%250A%2520%2520%2520%2520getYear()%2520%257B%250A%2520%2520%2520%2520%2520%2520let%2520year%2520%253D%2520new%2520Date().getFullYear()%250A%2520%2520%2520%2520%2520%2520%252F%252F%2520get%2520the%2520full%2520year%250A%2520%2520%2520%2520%2520%2520if%2520(new%2520Date().getMonth()%2520%253C%25209%2520%2526%2526%2520new%2520Date().getDay()%2520%253C%252023)%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520if%2520the%2520month%2520is%2520less%2520than%2520september%2520and%2520the%2520day%2520is%2520less%2520than%2520the%252023rd%2520subtract%2520a%2520year%2520because%2520its%2520not%2520my%2520birthday%2520yet%250A%2520%2520%2520%2520%2520%2520%2520%2520year--%250A%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520return%2520%2520year%2520-%25202006%250A%2520%2520%2520%2520%252F%252F%2520%2520return%2520the%2520current%2520year%2520minus%2520the%2520year%2520I%2520was%2520born%250A%2520%2520%2520%2520%257D%250A%2520%2520%257D"
  style="width: 60vw; height: 500px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>
<iframe class="iframe"
  src="https://carbon.now.sh/embed?bg=rgba(30%2C38%2C59%2C1)&t=monokai&wt=none&l=javascript&ds=false&dsyoff=0px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira%20Code&fs=13.5px&lh=204%25&si=false&es=2x&wm=false&code=methods%253A%2520%257B%250A%2520%2520%2520%2520getYear()%2520%257B%250A%2520%2520%2520%2520%2520%2520%252F%252F%2520just%2520a%2520basic%2520method%2520to%2520return%2520the%2520year%2520for%2520my%2520stupid%2520copyright%2520thing%250A%2520%2520%2520%2520%2520%2520return%2520new%2520Date().getFullYear()%250A%2520%2520%2520%2520%257D%250A%2520%2520%257D"
  style="width: 60vw; height: 350px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>
    </div>
</template>

<script>
export default {
    name: 'Posts'
}
</script>

<style scoped>
.container {
    margin-top: 100px;
    display: flex;
    justify-content: center;
}

.iframe {
    padding: 20px;
}
</style>