<template>
  <div class="seat" contenteditable>
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    editable: {
      default: false,
    },
    text: {
      default: "Naam",
    },
  },
};
</script>

<style lang="scss" scoped>
.seat {
  $size: 3vh;
  border: 1px solid black;
  border-radius: 20px;
  height: $size;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  // line-height: $size;
  text-align: center;
  // margin: 10px;
}
</style>