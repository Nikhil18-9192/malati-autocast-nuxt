<template>
  <div id="clients">
    <div class="title">
      <h1>Clients</h1>
    </div>
    <div class="card-container">
      <div class="card" v-for="(item, i) in clients" :key="i">
        <img :src="item.logo" alt="" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientsPage',
  data() {
    return {
      clients: [
        { logo: '/Mahindra.png', title: 'Automotive sector' },
        { logo: '/escort.png', title: ' ' },
        { logo: '/Mahindra.png', title: 'Tractor sector' },
        { logo: '/tmtl.png', title: ' ' },
      ],
    }
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
    padding: 0 30px;
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
        font-size: 60px;
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
    justify-content: center;
    gap: 30px;
    margin-bottom: 150px;
    @include for-phone-only {
      margin-bottom: 50px;
    }
    @include for-tablet-only {
      margin-bottom: 80px;
    }
    @include for-desktop-up {
      justify-content: unset;
    }
    .card {
      width: 300px;
      height: 300px;
      background: #f4f4f4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 200px;
        height: 200px;
        object-fit: contain;
      }
      p {
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;
      }
    }
  }
}
</style>
