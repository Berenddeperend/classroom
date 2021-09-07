<template>
  <div class="classes">
    <h3>Klassen</h3>
    <ul>
      <li
        v-for="className in $store.getters.classNames.sort()"
        :key="className"
        @click="$store.commit('setActiveClass', className)"
        class="className"
        :class="{ active: className === $store.state.activeClass }"
      >
        {{ className }}
        <button
          class="delete"
          v-if="className === $store.state.activeClass"
          @click.stop="removeClass(className)"
        >
          X
        </button>
      </li>
    </ul>
    <button @click="addClass">Klas toevoegen</button>
  </div>
</template>
<script>
import {maxClassSize} from '@/constants.js'
export default {
  data() {
    return {};
  },
  methods: {
    removeClass(className) {
      if (window.confirm(`Wil je '${className}' echt verwijderen?`)) {
        this.$store.commit("removeClass", className);
      }
    },
    addClass() {
      const className = window.prompt("Nieuwe klasnaam:");
      if (className) {
        this.$store.commit({
          type: "addClass",
          className,
          length: maxClassSize,
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
  left: 5px;
  top: 5px;
  
  height: 100%;
}

h3 {
  margin-top: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover:not(.active) {
    transform: translateX(3px)
  }
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