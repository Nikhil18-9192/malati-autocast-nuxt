<template>
  <div id="our-journey">
    <div
      class="title"
      data-aos="fade-left"
      data-aos-duration="900"
      data-aos-offset="200"
    >
      <h1>Our Journey</h1>
    </div>
    <div v-if="$device.isDesktop" class="journey-list">
      <div class="list">
        <div class="road-bar">
          <transition name="icon-slide">
            <img
              v-if="offset > -1"
              :style="{ top: `${offset - 6}px` }"
              class="icon"
              src="marker-connector.png"
              alt=""
            />
          </transition>

          <nuxt-img src="road.png" class="bar" />
        </div>
        <ul data-aos="fade-up" data-aos-duration="900" data-aos-offset="200">
          <li
            class="journey-li"
            v-for="(item, i) in journey"
            :key="i"
            :id="`j${i}`"
            @mouseenter="getItem(i)"
            :class="hover && itemIndex !== i ? 'hover' : ''"
            @mouseleave="removItem"
          >
            <img src="/location.svg" alt="" />
            <h4>{{ item.year }}</h4>
            <div class="text">
              <h5>
                {{ item.name }}
              </h5>
              <div class="info">
                <p
                  :class="hover && itemIndex == i ? 'dispnone' : 'dispblock'"
                  class="list-title"
                >
                  {{ item.title }}
                </p>
                <ul class="desc-ul">
                  <li
                    v-for="(list, j) in item.desc"
                    :key="`l${j}`"
                    :style="{ transitionDelay: `${0.1 * j}s` }"
                    :class="hover && i == itemIndex ? 'enter-list' : ' '"
                    class="desc-li"
                  >
                    {{ list }}
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <transition name="slide">
        <div v-if="itemIndex > -1" class="carousel">
          <img
            v-for="(image, i) in journey[itemIndex].images"
            :key="`i${i}`"
            class="image"
            :style="{ top: `${offset}px` }"
            v-show="i == currentIndex"
            :src="image"
            alt=""
          />
        </div>
      </transition>
    </div>
    <div
      v-else
      class="journey"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-offset="200"
    >
      <div class="road">
        <img class="bar" src="road.png" alt="" />
      </div>
      <div class="info">
        <ul class="info-ul">
          <li class="info-li" v-for="(item, i) in journey" :key="i">
            <img class="marker" src="/marker.png" alt="" />
            <div class="year">
              <img src="/location.svg" alt="" />
              <h4>{{ item.year }}</h4>
            </div>
            <div class="text">
              <h5>
                {{ item.name }}
              </h5>
              <ul class="desc-ul-phone">
                <li
                  class="desc-li-phone"
                  v-for="(list, j) in item.desc"
                  :key="`l${j}`"
                >
                  {{ list }}
                </li>
              </ul>
            </div>
            <div class="carousel-phone">
              <img
                v-for="(image, k) in item.images"
                :key="k"
                class="image"
                v-show="item.year == currentYear ? k == currentIndex : k == 0"
                :src="image"
                alt=""
              />
            </div>
            <div class="control-btn">
              <button @click="next(i)" class="btn">Next</button>
              <button @click="prev(i)" class="btn">Prev</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { journey } from '@/utils'
export default {
  data() {
    return {
      currentIndex: 1,
      currentYear: -1,
      hover: false,

      itemIndex: -1,
      slideDuration: 2000,
      autoSlider: false,
      offset: -1,
    }
  },

  mounted() {
    if (this.$device.isDesktop) {
      this.getItem(0)
      this.initAutoSlide()
    }
  },
  computed: {
    journey() {
      return journey
    },
  },
  methods: {
    initAutoSlide: function () {
      this.autoSlider = setInterval(() => {
        if (this.itemIndex == -1) return
        this.currentIndex < this.journey[this.itemIndex].images.length - 1
          ? this.currentIndex++
          : (this.currentIndex = 0)
      }, this.slideDuration)
    },

    getItem(index) {
      this.offset = document.getElementById(`j${index}`).offsetTop
      this.hover = true
      this.itemIndex = index
    },
    removItem() {
      this.offset = -1
      this.hover = false
      this.itemIndex = -1
      if (!this.autoSlider) {
        clearInterval(this.autoSlider)
      }
    },
    next(index) {
      this.currentYear = this.journey[index].year
      this.currentIndex < this.journey[index].images.length - 1
        ? this.currentIndex++
        : (this.currentIndex = 0)
    },
    prev(index) {
      this.currentYear = this.journey[index].year
      this.currentIndex > 0
        ? this.currentIndex--
        : (this.currentIndex = this.journey[index].images.length - 1)
    },
  },
}
</script>

<style lang="scss" scopped>
#our-journey {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .title {
    padding: 0 $horizontalPadding;
    @include for-tablet-only {
      padding: 0 60px;
    }
    @include for-phone-only {
      padding: 0 15px;
    }
    h1 {
      font-family: 'Lora';
      font-weight: normal;
      font-size: 144px;
      color: #e0e0e0;
      text-align: right;
      margin: 90px 0;
      @include for-tablet-only {
        font-size: 80px;
      }
      @include for-phone-only {
        font-size: 50px;
      }
    }
  }
  .journey-list {
    position: relative;
    display: flex;
    width: 100%;
    overflow: hidden;
    padding: 0 $horizontalPadding;
    @include for-tablet-only {
      padding: 0 60px;
    }
    @include for-phone-only {
      padding: 0 30px;
    }
    .list {
      width: 50%;
      display: flex;
      position: relative;
      .road-bar {
        margin-top: 32px;
        margin-right: 32px;
        position: relative;
        height: 100%;
        position: relative;

        .line {
          position: absolute;
          left: -50%;
          z-index: 99;
        }
        .icon {
          position: absolute;
          left: -4px;
          max-height: 32px;
          z-index: 101;
          max-width: 80px;
          object-fit: contain;
        }
        .bar {
          position: relative;
          z-index: 100;
          width: 24px;
          min-height: 100%;
        }
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        .journey-li {
          display: flex;
          min-height: 150px;
          cursor: default;
          margin-bottom: 100px;
          @include for-tablet-only {
            flex-direction: column;
          }
          &:last-child {
            padding-bottom: 200px;
            @include for-desktop-up {
              padding-bottom: 315px;
            }
            @include for-big-desktop-up {
              padding-bottom: 325px;
            }
          }

          img {
            width: 30px;
            height: 42px;
          }
          h4 {
            font-weight: 500;
            font-size: 36px;
            margin: 0 30px 0 20px;
            min-width: 100px;
            letter-spacing: 0.095em;
            transition: 0.5s ease all;
            @include for-tablet-only {
              margin: 0;
            }
          }
          .text {
            letter-spacing: 0.05em;
            h5 {
              font-weight: 500;
              font-size: 24px;
              transition: 0.5s ease all;
            }
            .info {
              position: relative;
              margin-top: 15px;
              .list-title {
                position: absolute;
                top: 0;
                font-weight: 500;
                font-size: 16px;
                color: #c6c6c6;
                transition: 0.6s ease all;
              }
              .desc-ul {
                overflow: hidden;
                .desc-li {
                  font-weight: 500;
                  font-size: 16px;
                  color: #000;
                  line-height: 25px;
                  transform: translateX(-50%);
                  opacity: 0;
                  -webkit-transition: all 1s cubic-bezier(0.16, 0.15, 0.25, 1);
                  transition: all 0.4s cubic-bezier(0.16, 0.15, 0.25, 1);
                }
                .enter-list {
                  transform: translateX(0%);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }

    .carousel {
      width: 50%;
      position: relative;
      transition: 0.5s ease all;
      .image {
        border-radius: 4px;
        position: absolute;
        top: 0;
        width: 100%;
        max-height: 520px;
        object-fit: contain;
        object-position: top;
        border: 12px solid #dddddd;
      }
    }
  }
  .journey {
    position: relative;
    padding: 0 15px;
    display: flex;
    .road {
      margin-right: 30px;
      margin-top: 6px;
      .bar {
        position: relative;
        z-index: 100;
        width: 24px;
        min-height: 100%;
        padding-top: 8px;
      }
    }
    .info {
      .info-ul {
        list-style: none;
        padding: 0;
        margin: 0;
        .info-li {
          margin-bottom: 80px;
          .marker {
            width: 32px;
            height: 32px;
            position: absolute;
            left: 11px;
            z-index: 999;
          }
          .year {
            display: flex;
            margin-bottom: 15px;
            align-items: center;
            img {
              width: 32px;
              margin-right: 20px;
            }
            h4 {
              font-weight: 600;
              font-size: 36px;
              letter-spacing: 0.095em;
            }
          }
          .text {
            h5 {
              font-weight: 500;
              font-size: 18px;
              line-height: 30px;
              letter-spacing: 0.05em;
            }
            .desc-ul-phone {
              list-style: none;
              padding: 0;
              margin: 0 0 20px 0;
              .desc-li-phone {
                font-weight: 500;
                font-size: 16px;
                line-height: 30px;
                letter-spacing: 0.05em;
                color: #a4a4a4;
              }
            }
          }
          .carousel-phone {
            img {
              width: 100%;
              height: 265px;
              object-fit: contain;
              border-radius: 4px;
              border: 12px solid #dddddd;
            }
          }
          .control-btn {
            display: flex;
            flex-direction: row-reverse;
            margin-top: 8px;
            .btn {
              outline: none;
              background: $primary;
              border: none;
              margin-left: 8px;
              border-radius: 4px;
              @include for-tablet-only {
                padding: 6px 12px;
              }
            }
          }
        }
      }
    }
  }
  .hover {
    color: #c6c6c6;
  }
  .dispblock {
    transition: 0.9s ease all;
    opacity: 1;
  }
  .dispnone {
    opacity: 0;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: 0.5s ease all;
    transform: translateX(0%);
  }
  .slide-enter,
  .slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }
  .icon-slide-enter-active,
  .icon-slide-leave-active {
    transition: 0.3s ease all;
    transform: scale(1);
  }
  .icon-slide-enter,
  .icon-slide-leave-to {
    transform: scale(0);
    opacity: 0;
  }
  .line-enter-active,
  .line-leave-active {
    transition: 0.3s ease all;
    transform: translateX(1);
    opacity: 1;
  }
  .line-enter,
  .line-leave-to {
    transform: scaleX(-1);
    opacity: 0;
  }
}
</style>
