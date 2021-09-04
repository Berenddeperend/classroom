<template>
  <div class="classes">
    <h3>Klassen</h3>
    <ul>
      <li
        v-for="className in $store.getters.classNames"
        :key="className"
        @click="$store.commit('setActiveClass', className)"
        class="className"
        :class="{ active: className === $store.state.activeClass }"
      >
        {{ className }}
        <button class="delete" v-if="className === $store.state.activeClass" @click.stop="removeClass(className)">X</button>
      </li>
    </ul>
    <button @click="addClass">Klas toevoegen</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    
      removeClass(className) {
        if(window.confirm(`Wil je '${className}' echt verwijderen?`)) {
            this.$store.commit('removeClass', className)
        }
      },
    addClass() {
      const className = window.prompt('Nieuwe klasnaam:')
      if(className) {

          this.$store.commit({
            type: "addClass",
            className,
            length: 30,
          });
    
          this.$store.commit("setActiveClass", className);
      }

    },
  },
};
</script>

<style lang="scss" scoped>
.classes {
  position: fixed;
  z-index: 2;
  // width: 10%;
  left: 0;
  height: 100%;

}

.classInput {
    width: 100px;
}

.delete {
    position: absolute;
    right: 0;
}

.className {
  &.active {
    font-weight: bold;
  }
}
</style>