<template>
  <div class="ui menu">
    <div class="header item">
      {{ title }}
    </div>
    <div class="item">
      Home
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
xh3 {
  margin: 40px 0 0;
}
xul {
  list-style-type: none;
  padding: 0;
}
xli {
  display: inline-block;
  margin: 0 10px;
}
xa {
  color: #42b983;
}
</style>
