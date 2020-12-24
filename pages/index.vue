<template>
  <div id="home-page">
    <div class="heading">
      <p class="title">
        <span>Malati Autocast Pvt. Ltd.</span> is the newest addition to the
        Malati Group and lives up to the 50 year heritage symbolizing
        <span>Quality</span> and <span>Trust</span>.
      </p>
      <p class="sub">
        Malati Autocast Pvt. Ltd. offers its partners high quality casting
        products through high pressure molding and a team of committed and
        skilled staff.
      </p>
    </div>
    <div class="services">
      <div class="duel" v-for="(item, i) in services" :key="i">
        <div class="title">
          <p>{{ item.title }}</p>
        </div>
        <div class="icon">
          <img :src="item.icon" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { title: 'OUR JOURNEY', icon: '/marker.svg' },
        { title: 'INFRASTRUCTURE', icon: '/manufracture.svg' },
        { title: 'PRODUCTS', icon: '/products.svg' },
        { title: 'COMPLAINCE', icon: '/complaince.svg' },
        { title: 'TEAM & CAREER', icon: '/team.svg' },
      ],
    }
  },
}
</script>

<style lang="scss" scopped>
#home-page {
  position: relative;
  width: 100%;
  @include for-desktop-up {
    min-height: 90vh;
  }
  .heading {
    margin-top: 100px;
    max-width: 960px;
    margin: 0 auto;
    .title {
      font-family: 'Lora', serif;
      font-size: 36px;
      font-weight: normal;
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
      margin-bottom: 100px;
    }
  }
  .services {
    margin: 0 135px;
    display: flex;
    .duel {
      width: 20%;
      text-align: center;
      .title {
        margin-bottom: 60px;
        p {
          font-size: 18px;
          font-weight: bold;
          color: #453737;
        }
      }
      .icon {
        img {
          width: 107px;
        }
      }
    }
  }
}
</style>
