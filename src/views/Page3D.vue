<style scoped lang="stylus">
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'
@require '../styles/utils.styl'

.root-page-3d
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
    .clickable
      pointer-events auto
      cursor pointer
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
      <transition name="opacity" mode="out-in">
        <Progress
          v-if="!isLoaded"
          size="200px"
          :progress="loadingProgress"
        />
        <NumberCircle
          v-else-if="isHasDeviceOrientationControls && isContinueAfterLoadButtonShowed"
          @click="setDeviceOrientationControls"
          class="clickable"
          value="Продолжить"
          size="200px"
        />
        <NumberCircle
          v-else-if="roundsCount < ROUNDS_NEEDED"
          class="progress"
          :value="`${roundsCount}/${ROUNDS_NEEDED}`"
          size="200px"
          :progress="roundProgress"
        />
        <router-link v-else-if="roundsCount >= ROUNDS_NEEDED" :to="{name: 'finish'}">
          <NumberCircle
            class="progress clickable"
            :value="`Жми сюда`"
            size="200px"
            :progress="0"
          />
        </router-link>
      </transition>
    </div>

    <div ref="rootThree3d" class="root-3d"></div>

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
      isContinueAfterLoadButtonShowed: false,
      isHasDeviceOrientationControls: null,

      AssetsTrackerLoader,

      updatingInterval: undefined,
      roundsCount: 0,
      roundProgress: 0.0,

      ROUNDS_NEEDED,
    }
  },

  async mounted() {
    this.roundsCount = this.getRoundsFromLocalStorage();

    // create a new world
    this.world = new World(this.$refs.rootThree3d);


    this.updatingInterval = setInterval(async () => {
      this.loadingProgress = AssetsTrackerLoader.totalProgress;
      if (this.loadingProgress >= 1) {
        clearInterval(this.updatingInterval);
        this.isLoaded = true;
        this.isContinueAfterLoadButtonShowed = true;

        // If we have deviceorientation (mobile)
        if (window.DeviceOrientationEvent && 'ontouchstart' in window) {
          this.isHasDeviceOrientationControls = true;
          await this.setDeviceOrientationControls();
        } else {
          this.isHasDeviceOrientationControls = false;
        }

        // Init deviceorientation controls
        await this.world.initControls(false);
      }
    }, 50);

    // complete async tasks
    await this.world.init();
    // start animation loop
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
      localStorage.removeItem('rounds-count');
      this.roundsCount = 0;
    },
    toggleRendering() {
      if (this.world.isRunning) {
        this.world.stop();
      } else {
        this.world.start();
      }
    },
    async setDeviceOrientationControls() {
      try {
        await DeviceOrientationEvent.requestPermission();

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
        this.isContinueAfterLoadButtonShowed = false;
        console.log(this.isContinueAfterLoadButtonShowed)
      } catch (err) {
        console.error(err);
        this.$modal.alert('Нет разрешения на гироскоп', 'Вы не предоставили странице разрешение на использование гироскопа или произошла иная ошибка');
        this.isContinueAfterLoadButtonShowed = true;
      }
    }
  }
}
</script>
