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
  $size: 3vh;
  border-radius: 20px;
  height: $size;
  width: 100px;
  border: 1px solid black;
  transform: rotate(-20deg);
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>