<template>
  <div id="foundry">
    <h1 data-aos="fade-right" data-aos-duration="900" data-aos-offset="200">
      Foundry
    </h1>
    <div class="container">
      <div class="menu">
        <div v-for="(item, i) in machinery" :key="i" class="items">
          <p
            class="button"
            :class="selectedItem == i ? 'active' : ''"
            @click="goToSlide(i)"
          >
            {{ item.title }}
          </p>
        </div>
      </div>

      <div
        class="carousel-phone"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="200"
      >
        <carousel-3d
          :count="machinery.length"
          :perspective="0"
          :width="1100"
          :key="machinery.length"
          :autoplay="true"
          :height="sliderHeight + 16"
          :bias="'center'"
          :autoplay-timeout="10000"
          :display="3"
          @before-slide-change="onBeforeSlideChange"
          ref="mycarousel"
        >
          <slide
            class="slide"
            v-for="(item, i) in machinery"
            :key="item.title"
            :index="i"
          >
            <template slot-scope="{ selectedItem }">
              <div class="card-phone" :data-index="selectedItem">
                <div class="right">
                  <img :src="item.img" alt="" />
                </div>
                <div class="left">
                  <h3>{{ item.title }}</h3>
                  <div
                    class="text"
                    v-for="(point, i) in item.features"
                    :key="i"
                  >
                    <p>{{ i + 1 }}.</p>
                    <p class="points">{{ point }}</p>
                  </div>
                </div>
              </div>
            </template>
          </slide>
        </carousel-3d>
      </div>
    </div>
  </div>
</template>

<script>
import { machinery } from '@/utils'
export default {
  data() {
    return {
      selectedItem: 0,
      sliderHeight: 0,
    }
  },
  mounted() {
    if (this.$device.isTablet) {
      this.sliderHeight = 1400
    } else if (this.$device.isMobile) {
      this.sliderHeight = 2000
    } else {
      this.sliderHeight = 500
    }
  },
  computed: {
    machinery() {
      return machinery
    },
  },
  methods: {
    getSelected(i) {
      this.selectedItem = i
    },
    onBeforeSlideChange(index) {
      this.selectedItem = index
    },
    goToSlide(index) {
      this.$refs.mycarousel.goSlide(index)
    },
  },
}
</script>

<style lang="scss" scoped>
#foundry {
  position: relative;
  padding: 64px 136px 125px;
  height: 100%;
  width: 100%;
  @include for-phone-only {
    padding: 0;
  }
  @include for-tablet-only {
    padding: 60px;
  }
  h1 {
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 98%;
    letter-spacing: 0.05em;
    color: #000000;
    margin-bottom: 64px;
    text-transform: uppercase;
    @include for-phone-only {
      margin-bottom: 0;
      padding: 64px 16px 20px 16px;
    }
    @include for-tablet-only {
      margin-bottom: 40px;
    }
  }
  .container {
    position: relative;
    height: 100%;
    width: 100%;
    .menu {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @include for-phone-only {
        padding: 0 15px;
        justify-content: flex-start;
      }
      .items {
        position: relative;
        .button {
          position: relative;
          padding: 12px 55px;
          border-radius: 4px;
          margin-bottom: 80px;
          background: #f4f4f4;
          cursor: pointer;
          @include for-phone-only {
            margin-bottom: 0;
            margin-top: 8px;
            margin-right: 8px;
            padding: 6px;
          }
          @include for-tablet-only {
            margin-bottom: 30px;
          }
        }
        .active {
          background: $primary;
        }
        // .active::after {
        //   position: absolute;
        //   bottom: -9px;
        //   height: 0;
        //   width: 0;
        //   right: 45%;
        //   border: 10px solid transparent;
        //   border-bottom-color: $primary;
        //   border-right-color: $primary;
        //   transform: rotate(45deg);
        //   content: '';
        // }
      }
      .active-phone {
        background: $primary;
      }
    }
    .card-phone {
      border-radius: 5px;
      overflow: hidden;
      @include for-desktop-up {
        display: flex;
        flex-direction: row-reverse;
      }
      .left {
        width: 50%;
        padding: 20px;
        @include for-phone-only {
          padding: 10px;
          width: 100%;
        }
        @include for-tablet-only {
          width: 100%;
        }
        h3 {
          font-family: Quicksand;
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 30px;
          letter-spacing: 0.05em;
          color: $primary;
          padding-bottom: 26px;
        }
        .text {
          display: flex;
          p {
            padding: 2px;
            font-family: Quicksand;
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            letter-spacing: 0.05em;
            color: #090909;
            padding-bottom: 25px;
            @include for-phone-only {
              padding-bottom: 10px;
            }
          }
          .points {
            margin-left: 15px;
          }
        }
      }
      .right {
        position: relative;
        width: 50%;
        @include for-phone-only {
          width: 100%;
        }
        @include for-tablet-only {
          width: 100%;
        }
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;

          @include for-tablet-only {
            height: 300px;
          }
          @include for-phone-only {
            max-height: 300px;
          }
        }
      }
    }
  }
  .carousel-3d-container {
    @include for-phone-only {
      margin-top: 0px;
    }
    .carousel-3d-slide {
      background: #ffffff;
      border: none;
      border-radius: 5px;
      .card-phone {
        opacity: 0.2;
      }
    }
    .current {
      padding: 16px;
      box-sizing: border-box;
      .card-phone {
        opacity: 1;
        height: 100%;
        width: 100%;
        box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.137);
      }
    }
  }
}
</style>
