<style lang="stylus" scoped>
@require '../styles/constants.styl'
@require '../styles/buttons.styl'
@require '../styles/fonts.styl'

.wrapper
  width 100%
  min-height 100vh

  > *
    position absolute
    width 100%
    min-height 100vh
</style>

<template>
  <div class="wrapper">
    <router-view v-slot="{ Component }">
      <transition name="scale-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>

  <Popups ref="popups"></Popups>
  <Modals ref="modals"></Modals>
</template>

<style>
@keyframes scale-out {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.95);
    opacity: 0;
  }
}
@keyframes scale-in {
  0% {
    transform: scale(1.05);
    opacity: 0;
  }
  25% {
    transform: scale(1.05);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.scale-in-enter-active {
  overflow: hidden;
  animation: scale-in .2s ease;
}
.scale-in-leave-active {
  overflow: hidden;
  animation: scale-out .2s ease;
}

.opacity-enter-active {
  animation: opacity .3s;
}
.opacity-leave-active {
  animation: opacity .3s reverse forwards;
}
@keyframes opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<script>
import {getCurrentInstance} from "vue";
import {Modals, Popups} from "@sergtyapkin/modals-popups";
import CircleLoading from "./components/CircleLoading.vue";


export default {
  components: { CircleLoading, Modals, Popups },

  data() {
    return {
      transitionName: "",
      global: undefined,
    }
  },

  watch: {
    $route(to, from) {
      this.transitionName = 'scale-in';

      console.log(from.path, 'TO', to.path)
    },
  },

  mounted() {
    this.global = getCurrentInstance().appContext.config.globalProperties;

    this.global.$user = this.$store.state.user;
    this.global.$modal = this.$refs.modals;
    this.global.$popups = this.$refs.popups;
    this.global.$app = this;

    this.checkMobileScreen();
    window.addEventListener('resize', (e) => {
      this.checkMobileScreen();
    });
  },

  methods: {
    checkMobileScreen() {
      if (window.innerWidth <= 700) {
        this.global.$isMobile = true;
        return;
      }
      this.global.$isMobile = false;
    }
  }
};
</script>
