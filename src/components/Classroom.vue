<template>
  <div class="page">
    <!-- <input type="number" class="numberpicker" :max="seatMap.length" v-model="occupiedSeats" /> -->
    <div class="numberpicker">
      <div>{{ occupiedSeats }}</div>
      <input
        type="range"
        class="numberpicker"
        :max="seatMap.length"
        v-model="occupiedSeats"
      />
    </div>
    <div class="classroom" ref="classroom">
      <Seat
        v-for="(seat, index) in Number(occupiedSeats)"
        :key="index"
        class="seat"
        ref="seat"
        :style="setPositionForSeat(index)"
      />
      <Seat :editable="false" class="elvera" :text="'Docent'" />
    </div>
  </div>
</template>
<script>
import Seat from "@/components/Seat";
export default {
  components: { Seat },
  data() {
    return {
      occupiedSeats: 28,
      seatMap: [
        { x: 0, y: 0 },
        { x: 5, y: 0 },
        { x: 0, y: 1 },
        { x: 5, y: 1 },
        { x: 0, y: 2 },
        { x: 5, y: 2 },
        { x: 0, y: 3 },
        { x: 5, y: 3 },
        { x: 0, y: 4 },
        { x: 5, y: 4 },
        { x: 0, y: 5 },
        { x: 5, y: 5 },
        { x: 0, y: 6 },
        { x: 5, y: 6 },
        { x: 0, y: 7 },
        { x: 5, y: 7 },
        { x: 0, y: 8 },
        { x: 5, y: 8 },
        { x: 0, y: 9 },
        { x: 5, y: 9 },
        { x: 0, y: 10 },
        { x: 0, y: 11 },
        { x: 0, y: 12 },
        { x: 0, y: 13 },
        { x: 0, y: 14 },
        { x: 1, y: 14 },
        { x: 2, y: 14 },
        { x: 3, y: 14 },
      ],
    };
  },
  mounted() {
    // this.updatePositions ();
    setTimeout(() => {
      this.updatePositions();
    }, 200);

    window.addEventListener("resize", this.updatePositions);
    // console.dir(document.querySelector('.classroom'))
  },
  watch: {
    occupiedSeats() {
      this.updatePositions();
    }
  },
  methods: {
    updatePositions() {
      for (let i = 0; i < Number(this.occupiedSeats); i++) {
        this.setPositionForSeat(i);
      }
    },

    setPositionForSeat(index) {

      function arduinoMap(x, inMin, inMax, outMin, outMax) {
        return (x-inMin) * (outMax - outMin) / (inMax - inMin) + outMin
      }

      // const classroomHeight = window.innerHeight;
      // const classroomWidth = window.innerWidth;

      // const seat = this.$refs.seat[index].$el;

      // const classroomHeight = this.$refs.classroom.offsetHeight;
      // const classroomWidth = this.$refs.classroom.offsetWidth;

      const maxHeight = this.seatMap.reduce((acc, curr) => {
        if (curr.y > acc) {
          acc = curr.y;
        }
        return acc;
      }, 0);

      const maxWidth = this.seatMap.reduce((acc, curr) => {
        if (curr.x > acc) {
          acc = curr.x;
        }
        return acc;
      }, 0);

      // const multiplierY = 30
      // const multiplierX = 40
      // const multiplierY = classroomHeight / (maxHeight + 1);
      // const multiplierX = classroomWidth / 2 / (maxWidth + 1);

      // const x = this.seatMap[index].x * multiplierX;

      // // seat.style.left = `calc(28% + ${this.seatMap[index].x * multiplierX}px)`;
      // seat.style.left = `${100 /this.seatMap[index].x}%`;
      // seat.style.top = `${this.seatMap[index].y * multiplierY}px`;

      const x = arduinoMap(this.seatMap[index].x, 0, maxWidth, 26, 58)
      const y = arduinoMap(this.seatMap[index].y, 0, maxHeight, 5, 74)

      return {
          left: `${x}%`,
          top: `${y}%`
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.numberpicker {
  position: fixed;
  right: 0;
}

.page {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  height: 100%;
}

.classroom {
  background: url("../assets/classroom.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  // height: 100%;
  // width: 100%;
  max-width: 100%;
  max-height: 100%;
  position: relative;
  aspect-ratio: 113 / 135;
  border: 1px solid red;
}

.elvera {
  position: absolute;
  top: 65%;
  left: 50%;
}

.seat {
  position: absolute;
}

// .seat {
//     flex: 0 1 50%;
//     width: 50%;
// }
</style>