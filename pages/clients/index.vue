<template>
  <div id="clients">
    <Legend class="legend" :title="title" />
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
    return {
      title: {
        img: '/clients_bg.jpg',
        name: 'Clients',
      },
    }
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

  .legend {
    margin-bottom: 65px;
  }
  .card-container {
    padding: 0 $horizontalPadding;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 150px;
    @include for-phone-only {
      padding: 0 15px;
      margin-bottom: 50px;
      justify-content: center;
    }
    @include for-tablet-only {
      margin-bottom: 80px;
      padding: 0 60px;
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
      margin-bottom: 30px;
      @include for-phone-only {
        width: 100%;
        height: 300px;
        margin-bottom: 36px;
      }
      @include for-tablet-only {
        width: 300px;
        height: 300px;
        margin-bottom: 36px;
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
