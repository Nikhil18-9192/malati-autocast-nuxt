<template>
  <div>
    <MenuBtn />
    <div v-if="!is_home" class="home-btn" @click="$router.push('/')">
      <img src="home-accent.svg" alt="" />
    </div>
    <div
      v-if="menuState"
      class="menuModal"
      @click="$store.commit('toggleMenuState')"
    ></div>
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
    is_home: function () {
      if (this.$route.path == '/') {
        return true
      }
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
  -webkit-tap-highlight-color: transparent;
}

body {
  font-family: 'Quicksand', sans-serif;
  margin: 0;
  padding: 0;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #f9f9f9;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
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
.menuModal {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: transparent;
  top: 0;
  left: 0;
}
.home-btn {
  position: fixed;
  z-index: 999;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
</style>
