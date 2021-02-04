<template>
  <div id="desktop-menu">
    <ul>
      <li
        v-for="(menu, i) in menuItems"
        :key="i"
        @click="$store.commit('toggleMenuState')"
      >
        <nuxt-link :to="menu.route">
          <div class="circle">
            <img class="icon" :src="menu.icon" alt="" />
          </div>

          <p>{{ menu.title }}</p></nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { menuItems } from '@/utils'
export default {
  name: 'DesktopMenu',
  data() {
    return {}
  },
  computed: {
    menuItems() {
      return menuItems
    },
  },
}
</script>

<style lang="scss" scopped>
#desktop-menu {
  width: 28%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  background: #2c2c2c;
  overflow: hidden;
  @include for-phone-only {
    width: 80%;
  }
  @include for-tablet-only {
    width: 40%;
  }
  ul {
    margin-top: 25px;
    list-style: none;
    padding: 5px;
    li {
      min-height: 50px;
      a {
        display: flex;
        text-decoration: none;
        color: #939393;
        transition: 0.3s;
        margin-left: 16px;
        margin-bottom: 8px;
        .circle {
          background: $primary;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          position: relative;
          padding: 6px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateX(-40px);
          opacity: 0;
          .icon {
            position: relative;
            object-fit: contain;
            height: 100%;
            width: 100%;
          }
        }

        p {
          margin: auto 15px;
        }
      }
      &:hover {
        .circle {
          opacity: 1;
          transform: translateX(0);
        }
        a p {
          color: $primary;
        }
      }
    }
  }
}
</style>
