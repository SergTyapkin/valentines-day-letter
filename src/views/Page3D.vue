<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'

.root-page-3d
  .loader
    centered-absolute-transform()
  .progress-block
    position absolute
    top 10px
    left 50%
    transform translateX(-50%)
    display flex
    flex-direction column
    align-items center
    gap 20px
    .progress
      pointer-events none
    .progress-final
      pointer-events auto
    .button-reset
      button()
      width min-content
      white-space nowrap
      padding 10px 20px
      background none
  .button-stop-3d
    button()
    width min-content
    position absolute
    right 10px
    bottom 10px
    @media({mobile})
      bottom 70px
</style>

<template>
  <div class="root-page-3d">
    <div class="progress-block">
      <button class="button-reset" @click="resetRounds">Сбросить прогресс</button>
      <transition name="opacity">
        <NumberCircle
          v-if="isLoaded && roundsCount < ROUNDS_NEEDED"
          class="progress"
          :value="`${roundsCount}/${ROUNDS_NEEDED}`"
          size="200px"
          :progress="roundProgress"
        />
      </transition>
      <transition name="opacity">
        <router-link :to="{name: 'finish'}">
          <NumberCircle
            v-if="isLoaded && roundsCount >= ROUNDS_NEEDED"
            class="progress progress-final"
            :value="`Жми сюда`"
            size="200px"
            :progress="0"
          />
        </router-link>
      </transition>
    </div>

    <div ref="rootThree3d" class="root-3d"></div>
    <transition name="opacity" class="loader">
      <Progress
        v-if="!isLoaded"
        size="200px"
        ref="progress"
        :progress="loadingProgress"
      />
    </transition>

    <button class="button-stop-3d" @click="toggleRendering"><img src="/icons/invisible.svg" alt="unseen"></button>
  </div>
</template>


<script>
import World from "~/src_3d/World";
import AssetsTrackerLoader from "~/src_3d/AssetsTrackerLoader";
import Progress from "~/components/Progress.vue";
import {ROUNDS_NEEDED} from "~/utils/constants";
import NumberCircle from "~/components/NumberCircle.vue";


const ALPHA_TOLERANCE = 40;
const MIN_ROUND_TIME_SEC = 1.8;
const MAX_ROUND_TIME_SEC = 5;
const NO_PENALTY_MIN_TIME_SEC = 6;

export default {
  components: {NumberCircle, Progress},

  data() {
    return {
      world: undefined,
      loadingProgress: 0,
      isLoaded: false,

      AssetsTrackerLoader,

      updatingInterval: undefined,
      roundsCount: 0,
      roundProgress: 0.0,

      ROUNDS_NEEDED,
    }
  },

  async mounted() {
    this.roundsCount = this.getRoundsFromLocalStorage();
    let prevAlpha = null;
    let prevBeta = null;
    let prevGamma = null;
    let prevTime = null;

    window.addEventListener('deviceorientation', (ev) => {
      if (prevAlpha !== null && prevBeta !== null && prevGamma !== null) {
        if (prevAlpha < ALPHA_TOLERANCE && ev.alpha > (360 - ALPHA_TOLERANCE)) {
          this.saveRoundsToLocalStorage();
          const curTime = new Date();
          if (prevTime !== null) {
            const diffSeconds = (curTime - prevTime) / 1000;
            if (diffSeconds < MIN_ROUND_TIME_SEC) {
              this.roundsCount--;
            } else if (diffSeconds < MAX_ROUND_TIME_SEC) {
              this.roundsCount++;
            }
          } else {
            this.roundsCount++;
          }
          prevTime = curTime;
        }
        if (ev.alpha < ALPHA_TOLERANCE && prevAlpha > (360 - ALPHA_TOLERANCE)) {
          const curTime = new Date();
          const diffSeconds = (curTime - prevTime) / 1000;
          if (diffSeconds < NO_PENALTY_MIN_TIME_SEC) {
            this.roundsCount--;
          }
          this.saveRoundsToLocalStorage();
          prevTime = curTime;
        }
      }
      prevAlpha = ev.alpha;
      prevBeta = ev.beta;
      prevGamma = ev.gamma;
      this.roundProgress = (360 - ev.alpha) / 360;
    });


    this.updatingInterval = setInterval(() => {
      this.loadingProgress = AssetsTrackerLoader.totalProgress;
      if (this.loadingProgress >= 1) {
        clearInterval(this.updatingInterval);
        this.isLoaded = true;
      }
    }, 50);

    // create a new world
    this.world = new World(this.$refs.rootThree3d);

    // complete async tasks
    await this.world.init();

    // start the animation loop
    this.world.start();
  },

  unmounted() {
    this.world.dispose();
    clearInterval(this.updatingInterval);
  },

  methods: {
    saveRoundsToLocalStorage() {
      localStorage.setItem('rounds-count', this.roundsCount);
    },
    getRoundsFromLocalStorage() {
      const count = localStorage.getItem('rounds-count');
      return Number(count) || 0;
    },
    async resetRounds() {
      if (! await this.$modal.confirm('Вы уверены, что хотите сбросить прогресс?', 'Восстановить его не получится, все начнется заново')) {
        return;
      }
      localStorage.removeItem('rounds');
      this.roundsCount = 0;
    },
    toggleRendering() {
      if (this.world.isRunning) {
        this.world.stop();
      } else {
        this.world.start();
      }
    }
  }
}
</script>
