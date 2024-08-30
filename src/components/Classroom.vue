<template>
  <div class="page">
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
        <div class="table" v-for="index in 6" :key="index">
          <Seat class="seat" :index="30 + index"/>
          <Seat class="seat" :index="36 + index"/>
        </div>
      </div>

      <div class="furniture tables-right">
        <div class="table" v-for="index in 6" :key="index">

          <Seat class="seat" :index="42 + index"/>
          <Seat class="seat" :index="48 + index"/>
        </div>
        <div class="table elvera">Mvr. Neijland</div>
      </div>

      <div class="furniture tables-right-second-column">
        <div class="table" v-for="index in 2" :key="index">
          <Seat class="seat" :index="54 + index" />
          <Seat class="seat" :index="56 + index" />
        </div>
      </div>

      <div class="furniture tables-bottom">
        <div class="table" v-for="index in 2" :key="index">
          <Seat class="seat" :index="58 + index"/>
          <Seat class="seat" :index="60 + index"/>
        </div>
      </div>

      <Seat
        v-for="(seat, index) in Number(occupiedSeats)"
        :key="seat + $store.state.activeClass"
        :index="index"
        class="seat"
        ref="seat"
        :style="setPositionForSeat(index)"
      />

      <!-- 63 because I miscounted -->
      <Seat
        :index="63"
        class="seat"
        ref="seat"
        v-if="occupiedSeats == 32"
        :style="setPositionForSeat(31)"
      />
    </div>
  </div>
</template>
<script>
import Seat from "@/components/Seat";

const a = 'white';
const b = '#f7d9c7'

export default {
  components: { Seat },
  data() {
    return {
      occupiedSeats: 32,
      seatMap: [
        { x: 0, y: 0, color: a },
        { x: 5, y: 0, color: a },
        { x: 0, y: 1, color: a },
        { x: 5, y: 1, color: a },
        { x: 0, y: 2, color: b },
        { x: 5, y: 2, color: b },
        { x: 0, y: 3, color: b },
        { x: 5, y: 3, color: b },
        { x: 0, y: 4, color: a },
        { x: 5, y: 4, color: a },
        { x: 0, y: 5, color: a },
        { x: 5, y: 5, color: a },
        { x: 0, y: 6, color: b },
        { x: 5, y: 6, color: b },
        { x: 0, y: 7, color: b },
        { x: 5, y: 7, color: b },
        { x: 0, y: 8, color: a },
        { x: 5, y: 8, color: a },
        { x: 0, y: 9, color: a },
        { x: 5, y: 9, color: a },
        { x: 0, y: 10, color: b },
        { x: 5, y: 10, color: a },
        { x: 0, y: 11, color: b },
        { x: 5, y: 11, color: a },
        { x: 0, y: 12, color: a },
        { x: 0, y: 13, color: a },
        { x: 0, y: 14, color: b },
        { x: 1, y: 14, color: b },
        { x: 2, y: 14, color: a },
        { x: 3, y: 14, color: a },
        { x: 4, y: 14, color: b },
        { x: 5, y: 14, color: b },
      ],
    };
  },
  mounted() {
    console.log(this.seatMap.length)

    // this.updatePositions ();
    setTimeout(() => {
      this.updatePositions();
    }, 200);

    window.addEventListener("resize", this.updatePositions);
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
        // backgroundColor: this.seatMap[index].color
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
  background: #c58156;
  border-radius: 4%;
  width: 16%;
  height: 10%;
  margin: 0.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  flex-direction: column;

  &.elvera {
    margin-right: -29px;
    width: 20%;
  }
  .seat {
    position: static;
    transform: none;
    height: 40%;
    width: 90%;
    z-index: 1;

    &:first-child {
      margin-bottom: 2px;
    }
  }
}

.furniture {
  height: 100%;
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
}


.tables-right {
  align-items: flex-end;
}

.tables-right-second-column {
  position: absolute;
  left: 100%;
  top: 43.7%;
  display: block;

  .table {
    // display: inline-flex;
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
</style>
