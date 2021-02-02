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
export default {
  name: 'DesktopMenu',
  data() {
    return {
      menuItems: [
        { icon: '/group.png', title: 'Home', route: '/' },
        { icon: '/group.png', title: 'Our Journey', route: '/ourJourney' },
        {
          icon: '/group.png',
          title: `Infrastructure`,
          route: '/infrastructure',
        },
        {
          icon: '/group.png',
          title: `Clients`,
          route: '/clients',
        },
        // {
        //   icon: '/group.png',
        //   title: `Compliance`,
        //   route: '/compliance',
        // },
        {
          icon: '/group.png',
          title: `Career & Team`,
          route: '/career',
        },
        {
          icon: '/group.png',
          title: `Contact Us`,
          route: '/contactUs',
        },
        {
          icon: '/group.png',
          title: `Products`,
          route: '/products',
        },
      ],
    }
  },
  computed: {},
}
</script>

<style lang="scss" scopped>
#desktop-menu {
  width: 25%;
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
          background: #d6a577;
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
          color: #d6a577;
        }
      }
    }
  }
}
</style>
