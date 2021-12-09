<template>
    <div style="height: 100%;">
      <canvas id="snow-container"></canvas>
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
  },
  mounted(){
    var f;
    // Snow effect
    if ((new Date()).getMonth() == 11) (() => {
        document.querySelector('html').classList.add('christmas')
        document.querySelector('body').classList.add('christmas')
        const el = document.getElementById('snow-container');
        const num = 600;
        const tsc = 1;
        const sp = 1;
        const sc = 1.3;
        const mv = 20;
        const min = 1;

        const ctx = el.getContext('2d');
        let bounds = el.getBoundingClientRect();
        let w = el.width = bounds.width * (window.devicePixelRatio || 1);
        let h = el.height = bounds.height * (window.devicePixelRatio || 1);
        window.addEventListener('resize', () => {
            bounds = el.getBoundingClientRect();
            w = el.width = bounds.width * (window.devicePixelRatio || 1);
            h = el.height = bounds.height * (window.devicePixelRatio || 1);
        }, false);

        function Flake() {
            this.y = Math.random() * (h + 50);
            this.x = Math.random() * w;
            this.t = Math.random() * (Math.PI * 2);
            this.sz = (100 / (10 + (Math.random() * 100))) * sc;
            this.sp = (Math.pow(this.sz * .8, 2) * .15) * sp;
            this.sp = this.sp < min ? min : this.sp;
            this.draw = () => {
                this.g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz);
                this.g.addColorStop(0, 'hsla(255,255%,255%,1)');
                this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
                ctx.moveTo(this.x, this.y);
                ctx.fillStyle = this.g;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.sz, 0, Math.PI * 2, true);
                ctx.fill();
            };
        }

        const flakes = [];
        for (let i = 0; i < num; i++) {
            flakes.push(new Flake());
        }

        (function loop() {
            ctx.clearRect(0, 0, w, h);
            for (let i = 0; i < flakes.length; i++) {
                f = flakes[i];
                f.t += .05;
                f.t = f.t >= Math.PI * 2 ? 0 : f.t;
                f.y += f.sp;
                f.x += Math.sin(f.t * tsc) * (f.sz * .3);
                if (f.y > h + 50) f.y = -10 - Math.random() * mv;
                if (f.x > w + mv) f.x = - mv;
                if (f.x < - mv) f.x = w + mv;
                f.draw();
            }
            window.requestAnimationFrame(loop);
        })();
    })();

  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');

html, body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  background: #fffff0;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  height: 100%;
  overflow: hidden;
}

html.christmas, body.christmas {
  background: #00701d;
  color: white;
}

.christmas .table {
  background: #990007;
}

#snow-container{
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

* {
  box-sizing: border-box;
}
</style>
