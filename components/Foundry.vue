<template>
  <div id="foundry">
    <h1>Foundry</h1>
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

      <carousel-3d
        :count="machinery.length"
        :perspective="0"
        :width="1100"
        :key="machinery.length"
        :autoplay="true"
        :height="500"
        :bias="'center'"
        :autoplay-timeout="5000"
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
            <div class="card" :data-index="selectedItem">
              <div class="left">
                <h3>{{ item.title }}</h3>
                <div class="text" v-for="(point, i) in item.features" :key="i">
                  <p>{{ i + 1 }}.</p>
                  <p class="points">{{ point }}</p>
                </div>
              </div>
              <div class="right">
                <img :src="item.img" alt="" />
              </div>
            </div>
          </template>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      machinery: [
        {
          title: 'HPML',
          features: [
            'Our foundry is well equipped with Sinto Horizontal Type Flaskless Molding Machine.',
            'The model of machine is FBO-II (L)',
            'Capacity of molds/hour is 120',
            'The mold dimension in (mm) are as follows:- a. L * W:- 550*450 b. H:- 130 to 200',
            'Maximum mismatch accuracy is 0.2 mm',
            'PLC controlled automaticmolding line',
          ],
          img: '/HPML.png',
        },
        {
          title: 'Sand Plant',
          features: [
            'Fully automated Sinto sand plant with computerized control panel.',
            'Sand hopper capacity 80 ton.',
            'Eirich RV-15mixerwith capacity 675 kg per batch.',
            'MIA unit installation for sand cooling.',
          ],
          img: '/HPML.png',
        },
        {
          title: 'Induction Furnace',
          features: [
            'Our foundry is well equipped with Sinto Horizontal Type Flaskless Molding Machine.',
            'The model of machine is FBO-II (L)',
            'Capacity of molds/hour is 120',
            'The mold dimension in (mm) are as follows:- a. L * W:- 550*450 b. H:- 130 to 200',
            'Maximum mismatch accuracy is 0.2 mm',
            'PLC controlled automaticmolding line',
          ],
          img: '/HPML.png',
        },
        {
          title: 'Shot Blasting',
          features: [
            'Our foundry is well equipped with Sinto Horizontal Type Flaskless Molding Machine.',
            'The model of machine is FBO-II (L)',
            'Capacity of molds/hour is 120',
            'The mold dimension in (mm) are as follows:- a. L * W:- 550*450 b. H:- 130 to 200',
            'Maximum mismatch accuracy is 0.2 mm',
            'PLC controlled automaticmolding line',
          ],
          img: '/HPML.png',
        },
        {
          title: 'Core Shop',
          features: [
            'Our foundry is well equipped with Sinto Horizontal Type Flaskless Molding Machine.',
            'The model of machine is FBO-II (L)',
            'Capacity of molds/hour is 120',
            'The mold dimension in (mm) are as follows:- a. L * W:- 550*450 b. H:- 130 to 200',
            'Maximum mismatch accuracy is 0.2 mm',
            'PLC controlled automaticmolding line',
          ],
          img: '/HPML.png',
        },
        {
          title: 'Others',
          features: [
            'Our foundry is well equipped with Sinto Horizontal Type Flaskless Molding Machine.',
            'The model of machine is FBO-II (L)',
            'Capacity of molds/hour is 120',
            'The mold dimension in (mm) are as follows:- a. L * W:- 550*450 b. H:- 130 to 200',
            'Maximum mismatch accuracy is 0.2 mm',
            'PLC controlled automaticmolding line',
          ],
          img: '/HPML.png',
        },
      ],
      selectedItem: 0,
    }
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
    padding: 30px;
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
    @include for-phone-only {
      margin-bottom: 30px;
    }
    @include for-tablet-only {
      margin-bottom: 40px;
    }
  }
  .container {
    display: block;
    .menu {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
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
            margin-bottom: 15px;
            padding: 6px;
          }
          @include for-tablet-only {
            margin-bottom: 30px;
          }
        }
        .active {
          background: $primary;
        }
        .active::after {
          position: absolute;
          bottom: -9px;
          height: 0;
          width: 0;
          right: 45%;
          border: 10px solid transparent;
          border-bottom-color: $primary;
          border-right-color: $primary;
          transform: rotate(45deg);
          content: '';
        }
      }
    }
    .card {
      display: flex;
      width: 100%;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      height: 500px;
      overflow: hidden;
      .left {
        width: 50vw;
        padding: 40px 100px;
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
          }
          .points {
            margin-left: 15px;
            width: 60%;
          }
        }
      }
      .right {
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .carousel-3d-container {
    .carousel-3d-slide {
      background: #ffffff;
      border: none;
      .card {
        opacity: 0.2;
      }
    }
    .current {
      .card {
        opacity: 1;
      }
    }
  }
}
</style>
