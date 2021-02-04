<template>
  <div id="menu-btn" @click="$store.commit('toggleMenuState')">
    <div class="bar1" :class="[{ animate: menuState }]"></div>
    <div class="bar2" :class="[{ animate: menuState }]"></div>
  </div>
</template>

<script>
export default {
  name: 'MenuButton',
  components: {},
  data() {
    return {
      menuState: false,
    }
  },
  mounted() {},
  methods: {},
  computed: {
    storeMenuState: function () {
      return this.$store.getters.getMenuState
    },
  },
  watch: {
    storeMenuState: function (newState) {
      this.menuState = newState
    },
  },
}
</script>

<style lang="scss" scoped>
#menu-btn {
  z-index: 2000;
  width: 52px;
  height: 52px;
  position: fixed;
  right: 40px;
  top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  padding: 4px;
  background: transparent;
  cursor: pointer;
  transition: 0.3s ease all;
  @include for-phone-only {
    right: 5px;
  }
  .bar1 {
    position: absolute;
    width: 24px;
    height: 2px;
    background: #2c2c2c;
    top: 15px;
    transition: 0.3s ease all;

    &.animate {
      background: #939393;
      transform: rotate(40deg);
      width: 20px;
      top: 18px;
    }
  }
  .bar2 {
    position: absolute;
    width: 24px;
    height: 2px;
    top: 25px;
    background: #2c2c2c;
    transition: 0.3s ease all;

    &.animate {
      background: #939393;
      transform: rotate(-40deg);
      top: 30px;
      width: 20px;
    }
  }
}
</style>
