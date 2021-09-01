<template>
    <div style="height: 100%;">
      <Classes />
      <Classroom v-if="$store.state.activeClass"/>
    </div>
</template>

<script>
import Classroom from '@/components/Classroom'
import Classes from '@/components/Classes'

export default {
  name: 'App',
  components: {
    Classroom,
    Classes
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
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
