<template>
  <!-- <div class="seat" contenteditable>
    {{ text }}
  </div> -->
  <input type="text" class="seat" v-model="student">
</template>

<script>
export default {
  props: {
    index:{},
    editable: {
      default: false,
    },
    alignment: {
      default: "flex-start"
    },
    text: {
      default: "Naam",
    },
  },
  computed: {
      student: {
        get () {
          return this.$store.state.classes[this.$store.state.activeClass][this.index]
        },
        set (value) {
          this.$store.commit({
            type: "setStudent",
            index: this.index,
            student: value
          })
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.seat {
  border-radius: 1vh;
  height: 3%;
  width: 20%;
  border: 2px solid #cbcbcb;
  background: white;
  transform: rotate(-29deg);
  font-size: 2vh;
  font-weight: bold;
  // font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-family: 'Oswald', sans-serif;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
}
</style>