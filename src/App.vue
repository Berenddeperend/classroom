<template>
    <Classroom />
</template>

<script>
import Classroom from '@/components/Classroom'

export default {
  name: 'App',
  components: {
    Classroom
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}
html, body {
  margin: 0;
  position: relative;
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
