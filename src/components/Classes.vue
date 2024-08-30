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
          class="edit"
          v-if="className === $store.state.activeClass"
          @click.stop="renameClass(className)"
        >
          ✎
        </button>
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
    renameClass(className) {
      const newName = prompt("Nieuwe naam voor klas:", className);
      if(newName && !this.$store.getters.classNames.includes(newName)) {
        this.$store.commit("renameClass", {oldName: className, newName});
        return;
      }

      if(this.$store.getters.classNames.includes(newName)) {
        alert('Die klas bestaat al.')
      }
    },
    removeClass(className) {
      if (window.confirm(`Wil je '${className}' echt verwijderen?`)) {
        this.$store.commit("removeClass", className);
      }
    },
    addClass() {
      const className = window.prompt("Nieuwe klasnaam:");

      if (className && !this.$store.getters.classNames.includes(className)) {
        this.$store.commit({
          type: "addClass",
          className,
          length: maxClassSize,
        });

        this.$store.commit("setActiveClass", className);
        return;
      }

      if (this.$store.getters.classNames.includes(className)) {
        alert('Die klas bestaat al. Waarschijnlijk heb je een lange dag gehad. Ga lekker in bad liggen en probeer het morgen nog eens.')
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
  //width: fit-content;
  padding-right: 45px;
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

  &:hover:not(.active) {
    text-decoration: underline;
  }
}

.classInput {
  width: 100px;
}

.delete {
  cursor: pointer;
  position: absolute;
  right: 0;
}

.edit {
  cursor: pointer;
  position: absolute;
  right: 20px;
}

.className {
  &.active {
    font-weight: bold;
  }
}
</style>
