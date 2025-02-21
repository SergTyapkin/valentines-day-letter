<style lang="stylus" scoped>
@require '../../styles/constants.styl'
@require '../../styles/buttons.styl'
@require '../../styles/fonts.styl'

color = white
//colorEmp = mix(transparent, red, 30%)
colorEmp = white

.root-progress
  overflow visible
  height var(--size)
  width var(--size)
  .circle
  .circle-shadow
  .circle-animation
  .circle-progress
    stroke-linecap round
    stroke-width 3
    stroke color
    transform rotate(-90deg)
    transform-origin 50% 50%
    fill none
    r 50
  .circle
    stroke-width 2
  .circle-progress
    stroke-dasharray calc(var(--progress) * var(--math-pi) * 2 * 50) 1000
    stroke-width 5
    stroke colorEmp
    transition stroke-dasharray 0.2s ease
    filter blur(2px)
  .circle-animation
    stroke-width 0
  .circle-shadow
    filter blur(10px)

  .text
    fill color
    font-family monospace

  &.animation
    .circle
      animation circle .5s ease
      @keyframes circle
        0%
          r 50
          stroke-width 2
        50%
          r 53
          stroke-width 5
        100%
          r 50
          stroke-width 2
    .circle-progress
      animation circle-progress .5s ease
      @keyframes circle-progress
        0%
          r 50
          stroke-width 5
        50%
          r 53
          stroke-width 7
        100%
          r 50
          stroke-width 5
    .circle-shadow
      animation circle-shadow .7s ease
      @keyframes circle-shadow
        0%
          r 50
          stroke-width 3
        40%
          r 53
          stroke-width 8
        100%
          r 50
          stroke-width 3
    .circle-animation
      animation circle-animation 1s ease-out
      @keyframes circle-animation
        0%
          r 50
          stroke-width 3
          filter blur(0px)
        100%
          r 80
          stroke-width 0
          filter blur(1px)
</style>

<template>
  <svg class="root-progress" viewBox="0 0 100 100" :style="{'--progress': progress, '--math-pi': MATH_PI, '--size': size}" :class="{animation: animationActive}">
    <circle class="circle" r="50" cx="50" cy="50"></circle>
    <circle class="circle-shadow" r="50" cx="50" cy="50"></circle>
    <circle class="circle-progress" r="50" cx="50" cy="50"></circle>
    <circle class="circle-animation" r="50" cx="50" cy="50"></circle>
    <text class="text" x="50" y="50" font-size="10" text-anchor="middle" dominant-baseline="middle">{{ value }}</text>
  </svg>
</template>

<script>
import {nextTick} from "vue";

export default {
  props: {
    value: "",
    size: {
      default: '60px'
    },
    progress: 0,
  },

  data() {
    return {
      animationActive: false,
      animationInterval: null,

      MATH_PI: Math.PI,
    }
  },

  watch: {
    async value(to, from) {
      clearInterval(this.animationInterval);
      this.animationActive = false;
      console.log(from, to)
      this.animationActive = true;
      this.animationInterval = setInterval(() => {this.animationActive = false}, 1500);
    }
  }
};
</script>
