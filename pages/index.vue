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
          Malati Autocast Pvt. Ltd. offers its partners high quality casting
          products through high pressure molding and a team of committed and
          skilled staff.
        </p>
      </div>
      <img :class="hover ? 'shown' : ''" :src="selectedImage" alt="" />
    </div>

    <div class="services">
      <div
        class="card"
        v-for="(item, i) in services"
        :key="i"
        @mouseenter="
          selectedImage = item.src
          hover = true
        "
        @mouseleave="hover = false"
      >
        <div class="title">
          {{ item.title }}
        </div>
        <div class="t-container">
          <img :src="item.icon" alt="" />
          <p class="hover-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Port
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImage: false,
      hover: false,
      services: [
        {
          title: 'OUR JOURNEY',
          icon: '/marker.svg',
          src:
            'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80',
        },
        {
          title: 'INFRASTRUCTURE',
          icon: '/manufracture.svg',
          src:
            'https://images.unsplash.com/photo-1513295202663-54cd69dd2b43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80',
        },
        {
          title: 'PRODUCTS',
          icon: '/products.svg',
          src:
            'https://images.unsplash.com/photo-1552783160-27bfdb2625d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1560&q=80',
        },
        {
          title: 'COMPLAINCE',
          icon: '/complaince.svg',
          src:
            'https://images.unsplash.com/photo-1566221857770-508d35ee6220?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        },
        {
          title: 'TEAM & CAREER',
          icon: '/team.svg',
          src:
            'https://images.unsplash.com/photo-1571524522669-99d0c9e7264d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scopped>
#home-page {
  position: relative;
  width: 100%;
  padding-left: $horizontalPadding;
  padding-right: $horizontalPadding;
  @include for-desktop-up {
    // min-height: 80vh;
  }
  .hero {
    width: 100%;
    position: relative;
    overflow: hidden;
    margin: 100px 0;
    min-height: 352px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 180px;
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
      }
    }
    img {
      position: absolute;
      width: 100%;
      max-height: 352px;
      top: 100%;
      transition: 0.4s ease all;
      object-fit: cover;
      object-position: bottom;
    }

    .shown {
      top: 0px;
    }
    .slide {
      transform: translateY(-50px);
    }
  }

  .services {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    .card {
      text-align: center;
      min-width: 220px;
      .title {
        margin-bottom: 32px;
        font-size: 18px;
        font-weight: bold;
        color: #453737;
        letter-spacing: 0.16em;
        position: relative;

        &::after {
          content: '';
          min-width: 100%;
          height: 5px;
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
        img {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 107px;
          transition: 0.4s ease all;
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
          transform: translate(-50%, 120%) scale(0.2);
        }
        .hover-txt {
          opacity: 1;
          top: 0;
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
}
</style>
