<template>
  <div id="environment">
    <div class="container">
      <h1 data-aos="fade-right">Environment</h1>
      <p class="sub-title" data-aos="fade-up">
        Malati Autocast Pvt. Ltd. is committed to safety & minimizing waste.
        This thought was embedded during the installation of infrastructure.
      </p>
    </div>
    <ul class="card">
      <li
        v-for="(item, i) in cardInfo"
        :key="i"
        data-aos="fade-up"
        :data-aos-delay="i * 200"
      >
        <div class="info">
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
          <p>{{ item.L1 }}</p>
          <p>{{ item.L2 }}</p>
        </div>
        <div
          class="bg-img"
          :style="{ backgroundImage: 'url(' + item.src + ')' }"
        ></div>
      </li>
    </ul>
  </div>
</template>

<script>
import { cardInfo } from '@/utils'
export default {
  name: 'envitement',
  data() {
    return {}
  },
  computed: {
    cardInfo() {
      return cardInfo
    },
  },
}
</script>

<style lang="scss" scoped>
#environment {
  padding: 64px 72px 64px 136px;
  @include for-phone-only {
    padding: 0 16px 16px 16px;
  }
  @include for-tablet-only {
    padding: 60px;
  }
  .container {
    h1 {
      font-family: Lora;
      font-style: normal;
      font-weight: normal;
      font-size: 48px;
      line-height: 98%;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #000000;
      margin-bottom: 50px;
      @include for-phone-only {
        font-size: 34px;
        margin-bottom: 0px;
        padding: 64px 0 30px 0;
      }
    }
    .sub-title {
      font-weight: 500;
      font-size: 16px;
      line-height: 30px;
      color: #090909;
      max-width: 718px;
      margin-bottom: 70px;
      @include for-phone-only {
        margin-bottom: 50px;
      }
    }
  }
  .card {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;

    li {
      height: 435px;
      width: 608px;
      position: relative;
      overflow: hidden;
      @include for-phone-only {
        max-height: 235px;
      }
      @include for-big-desktop-up {
        max-width: 750px;
      }
      .bg-img {
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center;
        transform: scale(1.2);
        transition: 0.5s ease all;
      }
      .info {
        background: rgba(244, 244, 244, 0.95);
        position: absolute;
        width: 70%;
        height: 100%;
        padding: 55px 30px;
        left: 0;
        top: 0;
        color: #090909;
        transition: 0.5s ease all;
        z-index: 10;
        @include for-phone-only {
          padding: 10px;
        }

        h4 {
          font-weight: 500;
          font-size: 24px;
          line-height: 30px;
          padding-bottom: 20px;
          @include for-phone-only {
            padding-bottom: 10px;
          }
        }
        p {
          font-weight: 500;
          font-size: 16px;
          line-height: 30px;
          @include for-phone-only {
            font-size: 14px;
            line-height: 18px;
          }
          @include for-tablet-only {
            font-size: 16px;
            line-height: 30px;
          }
        }
      }
      &:hover {
        .info {
          left: -100%;
        }
        .bg-img {
          transform: scale(1);
        }
      }
    }
  }
}
</style>
>
