<template>
  <div id="clients">
    <div class="title">
      <h1 data-aos="fade-left">Clients</h1>
    </div>
    <div class="card-container">
      <div
        class="card"
        v-for="(item, i) in clients"
        :key="i"
        data-aos="fade-up"
        :data-aos-delay="i * 200"
      >
        <img :src="item.logo" alt="" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { clients } from '@/utils'
export default {
  name: 'ClientsPage',
  data() {
    return {}
  },
  computed: {
    clients() {
      return clients
    },
  },
}
</script>

<style lang="scss" scoped>
#clients {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 $horizontalPadding;
  @include for-phone-only {
    padding: 0 15px;
  }
  @include for-tablet-only {
    padding: 0 60px;
  }
  .title {
    h1 {
      font-family: 'Lora';
      font-weight: normal;
      font-size: 144px;
      color: #e0e0e0;
      text-align: right;
      margin: 90px 0;
      @include for-phone-only {
        font-size: 50px;
        margin-bottom: 20px;
      }
      @include for-tablet-only {
        font-size: 100px;
        margin-bottom: 30px;
      }
    }
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 150px;
    @include for-phone-only {
      margin-bottom: 50px;
      justify-content: center;
    }
    @include for-tablet-only {
      margin-bottom: 80px;
    }

    .card {
      position: relative;
      width: 260px;
      height: 275px;
      background: #f4f4f4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @include for-phone-only {
        width: 100%;
        height: 300px;
        margin-bottom: 36px;
      }
      @include for-tablet-only {
        width: 300px;
        height: 300px;
      }
      @include for-big-desktop-up {
        width: 300px;
        height: 300px;
      }
      img {
        width: 200px;
        height: 200px;
        object-fit: contain;
      }
      p {
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;
        position: absolute;
        bottom: 60px;
      }
    }
  }
}
</style>
