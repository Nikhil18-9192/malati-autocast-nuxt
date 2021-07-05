<template>
  <div id="home-page">
    <div class="hero">
      <div class="heading" :class="hover ? 'slide' : ''">
        <h2 class="title">
          <span>Malati Autocast Pvt. Ltd.</span> is the newest addition to the
          Malati Group and lives up to the 50 year heritage symbolizing
          <span>Quality</span> and <span>Trust</span>.
        </h2>
        <p class="sub">
          Malati Autocast Pvt. Ltd. offers its partners high quality CI and SGI
          casting products through high pressure molding and a team of committed
          and skilled staff.
        </p>
      </div>

      <div class="img" v-for="(img, i) in services" :key="i">
        <transition name="fade">
          <img
            v-if="hover && img.src == selectedImage"
            :src="img.src.url"
            alt=""
          />
        </transition>
      </div>
    </div>

    <div v-if="$device.isDesktopOrTablet" class="services">
      <div
        class="card"
        v-for="item in services"
        :key="item.title"
        @mouseenter="
          selectedImage = item.src
          hover = true
        "
        @mouseleave="hover = false"
      >
        <nuxt-link :to="'/' + item.router">
          <div class="title">
            {{ item.title }}
          </div>
          <div class="t-container">
            <img :src="item.icon.url" alt="" />
            <p class="hover-txt">
              {{ item.text }}
            </p>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div v-if="$device.isMobile" class="services-phone">
      <div class="card-phone" v-for="(item, i) in services" :key="i">
        <nuxt-link :to="'/' + item.router">
          <img :src="item.icon" alt="" />
          <div class="container">
            <h4 class="title">{{ item.title }}</h4>
            <hr />
            <p>{{ item.text }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import constants from '@/utils/constants'
export default {
  async asyncData({ $axios }) {
    const data = await $axios.$get(constants.SERVICES_API)
    const services = data.services
    return { services }
  },
  data() {
    return {
      selectedImage: false,
      hover: false,
    }
  },

  methods: {},
}
</script>

<style lang="scss" scopped>
#home-page {
  position: relative;
  width: 100%;
  // padding-left: $horizontalPadding;
  // padding-right: $horizontalPadding;
  @include for-desktop-up {
    // min-height: 80vh;
  }
  .hero {
    width: 100%;
    position: relative;
    overflow: hidden;
    min-height: 452px;
    display: flex;
    align-items: center;
    justify-content: center;
    @include for-phone-only {
      margin-top: 75px;
      padding: 0 15px;
    }
    @include for-tablet-only {
      padding: 0 60px;
    }
    .heading {
      position: relative;
      overflow: hidden;
      max-width: 960px;
      margin: 0 auto;
      transition: 0.4s ease all;
      .title {
        font-family: 'Lora', serif;
        font-size: 36px;
        font-weight: 400;
        width: 100%;
        text-align: center;
        color: #939393;
        margin-bottom: 40px;
        line-height: 133%;
        span {
          color: #000;
        }
      }
      .sub {
        font-size: 16px;
        font-weight: 300;
        max-width: 784px;
        margin: 0 auto;
        text-align: center;
        color: #939393;
        line-height: 133%;
      }
    }
    .img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      img {
        width: 100%;
        height: 100%;
        transition: transform 0.4s cubic-bezier(0, 0.85, 0.19, 0.91);
        object-fit: cover;
        object-position: center;
      }
    }

    .slide {
      transform: translateY(-50px);
      opacity: 0;
    }

    // .fade-enter-active,
    // .fade-leave-active {
    // }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      transform: translateY(100%);
    }
  }

  .services {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
    padding: 0 135px;
    @include for-phone-only {
      justify-content: center;
      padding: 0 35px;
    }
    @include for-tablet-only {
      padding: 0 60px;
    }
    .card {
      text-align: center;
      min-width: 194px;
      cursor: pointer;
      a {
        text-decoration: none;
        color: #000;
      }
      .title {
        margin-bottom: 32px;
        font-size: 16px;
        font-weight: bold;
        color: #453737;
        letter-spacing: 0.16em;
        position: relative;

        &::after {
          content: '';
          min-width: 100%;
          height: 3px;
          background: $primary;
          position: absolute;
          left: 0%;
          bottom: -20px;
          transition: 0.6s ease all;
          transform: scaleX(0);
          border-radius: 4px;
        }
      }
      .t-container {
        position: relative;
        overflow: hidden;
        min-height: 200px;
        @include for-phone-only {
          min-height: 140px;
        }
        img {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 85px;
          transition: 0.4s ease all;
          height: 85px;
          object-fit: contain;
        }
      }
      .hover-txt {
        max-width: 100%;
        text-align: left;
        position: absolute;
        transition: 0.4s ease all;
        top: -100%;
        opacity: 0;
      }
      &:hover {
        img {
          transform: translate(-50%, 130%) scale(0.2);
        }
        .hover-txt {
          opacity: 1;
          top: 20px;
        }
        .title {
          &::after {
            transform-origin: center;
            transform: scaleX(1);
          }
        }
        .heading {
          .heading-text {
            transform: translateX(-100%);
          }
          img {
            left: 0;
          }
        }
      }
    }
  }
  .services-phone {
    margin: 30px 15px 0 15px;

    .card-phone {
      margin-bottom: 23px;
      background: #f4f4f4;
      padding: 20px;
      min-height: 145px;
      a {
        display: flex;
        text-decoration: none;
        color: #000;
        align-items: center;
        img {
          margin-right: 20px;
          width: 72px;
          height: 72px;
          object-fit: contain;
        }

        hr {
          width: 75px;
          height: 5px;
          background: #d6a477;
          border: none;
          margin: 10px auto 10px 0;
        }
        p {
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.05em;
          color: #939393;
        }
      }
    }
  }
}
</style>
