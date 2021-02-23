<template>
  <div id="menu-btn" @click="$store.commit('toggleMenuState')">
    <span class="bar1" :class="[{ animate: menuState }]"></span>
    <span class="bar2" :class="[{ animate: menuState }]"></span>
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
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 4px;
  @include for-phone-only {
    right: 15px;
  }
  .bar1 {
    position: absolute;
    width: 24px;
    height: 2px;
    background: #2c2c2c;
    top: 20px;
    transition: 0.3s ease all;

    &.animate {
      background: #fff;
      transform: rotate(40deg);
      width: 20px;
      top: 18px;
    }
  }
  .bar2 {
    position: absolute;
    width: 24px;
    height: 2px;
    top: 30px;
    background: #2c2c2c;
    transition: 0.3s ease all;

    &.animate {
      background: #fff;
      transform: rotate(-40deg);
      top: 30px;
      width: 20px;
    }
  }
}
</style>
