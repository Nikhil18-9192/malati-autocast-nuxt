<template>
  <div id="our-journey">
    <div class="title">
      <h1>Our Journey</h1>
    </div>
    <div class="journey-list">
      <div class="list">
        <ul>
          <li
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
              <p
                :class="hover && itemIndex == i ? 'dispnone' : 'dispblock'"
                class="list-title"
              >
                {{ item.title }}
              </p>
              <p
                :class="hover && itemIndex == i ? 'dispblock' : 'dispnone'"
                class="desc"
              >
                {{ item.desc }}
              </p>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 1,
      hover: false,
      journey: [
        {
          year: '1970',
          name: 'Patil Engineering Works, Kolhapur.',
          title: 'Manufacturer of betel nut cutting machines.',
          desc:
            'Dedicated machining shop Machines : CNC, Balancing Machines Machining Capacity : 1000 drums/day',
          images: ['/1.jfif', '/2.jfif', '/3.jfif', '/4.jfif'],
        },
        {
          year: '1988',
          name: 'S.K.P. Industries, MIDC Shiroli.',
          title: 'Dedicated machining shop',
          desc:
            'Dedicated machining shop Machines : CNC, Balancing Machines Machining Capacity : 1000 drums/day',
          images: [
            '/ourjourney.png',
            '/ourjourney.png',
            '/ourjourney.png',
            '/ourjourney.png',
          ],
        },
        {
          year: '1995',
          name: 'Malati Founders Pvt. Ltd. , Hatkanangle.',
          title: 'Manufacturer of C.I. graded castings',
          desc: `Dedicated machining shop Machines : CNC, Balancing Machines Machining Capacity : 1000 drums/day`,
          images: ['2.jfif', '1.jfif', '3.jfif', '4.jfif'],
        },
        {
          year: '2000',
          name: 'Malati Enterprises, Hatkanangle. ',
          title: 'Dedicated machining shop',
          desc:
            'Dedicated machining shop Machines : CNC, Balancing Machines Machining Capacity : 1000 drums/day',
          images: ['4.jfif', '2.jfif', '1.jfif', '3.jfif'],
        },
        {
          year: '2002',
          name: 'Malati Enterprises, Hatkanangle. ',
          title: 'Dedicated machining shop',
          desc:
            'Dedicated machining shop Machines : CNC, Balancing Machines Machining Capacity : 1000 drums/day',
          images: ['3.jfif', '1.jfif', '4.jfif', '2.jfif'],
        },
      ],
      itemIndex: -1,
      slideDuration: 2000,
      autoSlider: false,
      offset: 0,
    }
  },

  mounted() {
    this.initAutoSlide()
  },
  methods: {
    initAutoSlide: function () {
      this.itemIndex = 0

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
      this.hover = false
      this.itemIndex = -1
      if (this.autoSlider) {
        clearInterval(this.autoSlider)
      }
    },
  },
}
</script>

<style lang="scss" scopped>
#our-journey {
  position: relative;
  width: 100%;
  .title {
    padding: 0 $horizontalPadding;
    h1 {
      font-family: 'Lora';
      font-weight: normal;
      font-size: 144px;
      color: #e0e0e0;
      text-align: right;
      margin: 90px 0;
    }
  }
  .journey-list {
    position: relative;
    display: flex;
    width: 100%;
    overflow: hidden;
    padding: 0 $horizontalPadding;
    @include for-desktop-up {
      padding-bottom: 325px;
    }
    .list {
      width: 50%;
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          display: flex;
          min-height: 150px;
          cursor: default;
          margin-bottom: 60px;
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
          }
          .text {
            letter-spacing: 0.05em;
            h5 {
              font-weight: 500;
              font-size: 24px;
              transition: 0.5s ease all;
            }
            .list-title {
              font-weight: 500;
              font-size: 16px;
              color: #c6c6c6;
              transition: 0.5s ease all;
            }
            .desc {
              transition: 0.5s ease all;
              font-weight: 500;
              font-size: 16px;
              color: #000;
              line-height: 30px;
              max-width: 313px;
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
        position: absolute;
        top: 0;
        max-width: 500px;
        height: 520px;
        object-fit: cover;
      }
    }
  }
  .hover {
    color: #c6c6c6;
  }
  .dispblock {
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
}
</style>
