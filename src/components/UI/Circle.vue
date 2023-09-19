<template>
  <div class="numInsideCircle">
    <svg :height="radius * 2" :width="radius * 2">
      <circle stroke='#353d54' :stroke-width="stroke" :r="normalizedRadius" :cx="radius" :cy="radius"
        fill="transparent" />
      <image v-if="hrefName" x="22%" y="20%" width="60%" height="60%"
        :xlink:href="require(`../../../public/${hrefName}.png`)" />
      <text v-if="!hrefName" x="50%" :y="isAtestation(title)" :data-font-size="fontSize">{{ progress }}</text>
      <text v-if="title === 'Аттестация через'" x="50%" y="60%"> {{ title === "Аттестация через" ? getWordDay(progress) :
        '' }}</text>
      <circle :stroke="getCircleColor(condition, color, progress, title)" stroke-linecap="round" fill="transparent"
        :stroke-dasharray="circumference + ' ' + circumference" :style="{ strokeDashoffset }" :stroke-width="stroke"
        :r="normalizedRadius" :cx="radius" :cy="radius" :condition="condition" />
    </svg>
  </div>
</template>

<script>

export default {
  name: 'Circle',
  props: {
    radius: Number,
    progress: Number,
    maxProgress: Number,
    stroke: Number,
    color: Array,
    hrefName: String,
    title: String,
    y: String,
    fontSize: String,
    condition: Boolean,
  },
  data() {

    const normalizedRadius = this.radius - this.stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    return {
      normalizedRadius,
      circumference,
    };
  },
  methods: {
    getCircleColor: (condition, color, progress) => {
      if (condition) {
        return progress > 30 ? color[1] : color[0]
      }
      return color[1]
    },

    //-- Числа после 20 начинают подчиняться определённому алгоритму, к числам, которые заканчиваются 
    //-- на 1 используется "День", а к числам от 2 до 4 - "Дня", во всех остальных случаях используется "дней"
    getWordDay: (num) => {
      if (num === 1 || (num >= 21 && (num % 10 === 1))) {
        return "день"
      } else if (num <= 3 || num === 22 || (num > 21 && (1 < (num % 10 < 5)))) {
        return "дня"
      } else {
        return "дней"
      }
    },
    //--Параметры для оси Y 
    isAtestation: (str) => {
      if (str === 'Аттестация через') return "40%";
      return "50%"
    },
  },
  computed: {
    strokeDashoffset() {
      return this.circumference - this.progress / this.maxProgress * this.circumference;
    },
  }
}

</script>

<style lang="scss">
circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.numInsideCircle {
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 2561px) and (min-height: 1441px ) {
    transform: scale(1.8);
    margin: 30px 0 10px 0;
  }

  @media (min-width: 1921px) and (max-width: 2560px) {
    transform: scale(1.2);
  }

  @media (max-width: 1280px) {
    transform: scale(0.7);
  }

  text {
    font-weight: bold;
    text-anchor: middle;
    dominant-baseline: middle;
    fill: white;
    font-size: 25px;

    @media (min-width: 1921px) and (max-width: 2560px) {
      font-size: 25px;
    }

    @media (max-width: 1280px) {
      font-size: 20px;
    }

    &[data-font-size='bigger'] {
      font-size: 30px;

      @media (min-width: 1921px) and (max-width: 2560px) {
        font-size: 35px;
      }

      @media (max-width: 1280px) {
        font-size: 25px;
      }
    }
  }
}
</style>

