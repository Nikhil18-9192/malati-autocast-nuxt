<template>
  <div id="environment">
    <div class="container">
      <h1>Environment</h1>
      <p class="sub-title">
        Malati Autocast Pvt. Ltd. is committed to safety & minimizing waste.
        This thought was embedded during the installation of infrastructure.
      </p>
    </div>
    <ul class="card">
      <li v-for="(item, i) in cardInfo" :key="i">
        <div class="info">
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
          <p>{{ item.L1 }}</p>
          <p>{{ item.L2 }}</p>
        </div>
        <img :src="item.src" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'envitement',
  data() {
    return {
      cardInfo: [
        {
          title: 'Dust collector',
          src: '/env1.png',
          desc:
            'Only waste generated is dust. To reduce the impact of waste dust in the surrounding dust collectors are installed in the premises.',
          L1: 'a. Neo-Airtech:- Sand plant and cooler.',
          L2: 'b. Technoblast :-shot-blasting machines.',
        },
        {
          title: 'Water',
          src: '/env2.png',
          desc:
            '100% water used for manufacturing process is recycled. The rain water harvesting system adds to reduction of fresh water required.',
        },
        {
          title: 'Electricity',
          src: '/env3.png',
          desc:
            'Initiatives to use natural light has reduced the electric consumption. Well ventilated space helps to free-flowing air.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#environment {
  padding: 64px 136px;
  @include for-phone-only {
    padding: 30px;
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
        font-size: 38px;
        margin-bottom: 30px;
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
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 15px;
    margin: 0;
    padding: 0;
    @include for-phone-only {
      grid-template-columns: auto;
    }
    @include for-tablet-only {
      grid-template-columns: auto;
    }
    li {
      height: 100%;
      max-height: 435px;
      position: relative;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      .info {
        background: rgba(244, 244, 244, 0.95);
        position: absolute;
        width: 70%;
        height: 100%;
        padding: 20px;
        color: #090909;
        @include for-phone-only {
          padding: 10px;
        }
        @include for-big-desktop-up {
          padding: 55px 30px;
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
          font-size: 14px;
          line-height: 20px;
          @include for-phone-only {
            font-size: 14px;
            line-height: 18px;
          }
          @include for-tablet-only {
            font-size: 16px;
            line-height: 30px;
          }
          @include for-big-desktop-up {
            font-size: 16px;
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>
>
