<template>
  <div>
    <MenuBtn />
    <transition name="slide">
      <DesktopMenu v-if="menuState" />
    </transition>
    <Nuxt />
    <AppFooter />
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuState: false,
    }
  },
  mounted() {
    window.onload = (event) => {
      console.log('page is fully loaded')
    }
  },
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
<style lang="scss" scopped>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Quicksand', sans-serif;
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
p,
input,
label,
div {
  margin: 0;
  padding: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.9s cubic-bezier(0.16, 1, 0.5, 1);
}
.slide-enter,
.slide-leave-active {
  transform: translateX(100%);
}

.my-page-enter-active,
.my-page-leave-active {
  transition: all 0.3s ease;
}
.my-page-enter,
.my-page-leave-active {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
