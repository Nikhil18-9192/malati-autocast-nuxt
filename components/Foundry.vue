<template>
  <div id="foundry">
    <h1>Foundry</h1>
    <div class="container">
      <div class="menu">
        <div v-for="(item, i) in machinery" :key="i" class="items">
          <p
            class="button"
            :class="selectedItem == i ? 'active' : ''"
            @click="getSelected(i)"
          >
            {{ item.title }}
          </p>
        </div>
      </div>
      <div class="card">
        <div class="left">
          <h3>{{ machinery[selectedItem].title }}</h3>
          <div
            class="text"
            v-for="(point, i) in machinery[selectedItem].features"
            :key="i"
          >
            <p>{{ i + 1 }}.</p>
            <p class="points">{{ point }}</p>
          </div>
        </div>
        <div class="right">
          <img :src="machinery[selectedItem].img" alt="" />
        </div>
      </div>
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
  },
}
</script>

<style lang="scss" scoped>
#foundry {
  position: relative;
  padding: 64px 136px 125px;
  h1 {
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 98%;
    letter-spacing: 0.05em;

    color: #000000;
    margin-bottom: 64px;
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
          height: 520px;
        }
      }
    }
  }
}
</style>
