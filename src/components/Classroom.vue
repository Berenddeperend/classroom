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
      <div class="tv"></div>

      <div class="furniture tables-left">
        <div class="table" v-for="table in 6" :key="table"></div>
      </div>

      <div class="furniture tables-right">
        <div class="table" v-for="table in 6" :key="table"></div>
        <div class="table elvera"></div>
      </div>

      <div class="furniture tables-horizontal-right">
        <div class="table" v-for="table in 2" :key="table"></div>
      </div>

      <div class="furniture tables-bottom">
        <div class="table" v-for="table in 2" :key="table"></div>
      </div>

      <Seat
        v-for="(seat, index) in Number(occupiedSeats)"
        :key="seat + $store.state.activeClass"
        :index="index"
        class="seat"
        ref="seat"
        :style="setPositionForSeat(index)"
      />
      <!-- <Seat :editable="false" class="seat elvera" :text="'Docent'" /> -->
    </div>
  </div>
</template>
<script>
import Seat from "@/components/Seat";
export default {
  components: { Seat },
  data() {
    return {
      occupiedSeats: 30,
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
        { x: 4, y: 14 },
        { x: 5, y: 14 },
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
  computed: {
    maxSeatX() {
      return this.seatMap.reduce((acc, curr) => {
        if (curr.x > acc) {
          acc = curr.x;
        }
        return acc;
      }, 0);
    },
    maxSeatY() {
      return this.seatMap.reduce((acc, curr) => {
        if (curr.y > acc) {
          acc = curr.y;
        }
        return acc;
      }, 0);
    },
  },
  watch: {
    occupiedSeats() {
      this.updatePositions();
    },
  },
  methods: {
    updatePositions() {
      for (let i = 0; i < Number(this.occupiedSeats); i++) {
        this.setPositionForSeat(i);
      }
    },

    setPositionForSeat(index) {
      function arduinoMap(x, inMin, inMax, outMin, outMax) {
        return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
      }

      const x = arduinoMap(this.seatMap[index].x, 0, this.maxSeatX, 20, 60);
      const y = arduinoMap(this.seatMap[index].y, 0, this.maxSeatY, 5, 85);
      let jc =
        this.seatMap[index].x === this.maxSeatX ? "flex-end" : "flex-start";
      if (
        this.seatMap[index].x === this.maxSeatX &&
        this.seatMap[index].y === this.maxSeatY
      ) {
        jc = "flex-start";
      }

      return {
        left: `${x}%`,
        top: `${y}%`,
        justifyContent: jc,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.numberpicker {
  position: fixed;
  right: 0;
  z-index: 2;
}

.page {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  height: 100%;
}

.tv {
  position: absolute;
  width: 30%;
  height: 2%;
  left: 50%;
  background: grey;
}

.table {
  background: #ab5c2c;
  border-radius: 4%;
  width: 16%;
  height: 10%;
  margin: 5px;

  &.elvera {
    width: 20%;
  }
}

.furniture {
  height: 100%;
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
}

.tables-left {
  // position: absolute;
}

.tables-right {
  align-items: flex-end;
}

.tables-horizontal-right {
  // align-items: flex-end;
  position: absolute;
  left: 100%;
  top: 56%;
  // flex-direction: row;
  display: block;
  .table {
    display: inline-block;
  }
}

.tables-bottom {
  flex-direction: row;
  align-items: flex-end;

  .table {
    width: 15%;
    height: 7%;
  }
}

.classroom {
  background: #fffff0;
  // background: url("../assets/classroom.jpg");
  // background-size: contain;
  // background-repeat: no-repeat;
  // background-position: 50%;
  // height: 100%;
  // width: 100%;

  left: 50%;
  transform: translateX(-50%);

  max-width: 100%;
  max-height: 100%;
  position: relative;
  aspect-ratio: 113 / 135;
}

.seat {
  position: absolute;

  &.elvera {
    position: absolute;
    top: 84%;
    left: 76%;
  }
}

// .seat {
//     flex: 0 1 50%;
//     width: 50%;
// }
</style>