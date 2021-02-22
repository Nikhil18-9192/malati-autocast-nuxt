<template>
  <div id="products">
    <Legend class="legend" :title="title" />
    <div class="cast-products">
      <h4 data-aos="fade-right">Cast Iron Products</h4>
      <hr />
      <ul class="product-list">
        <li
          v-for="(product, i) in castProducts"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="i * 200"
        >
          <img :src="product.src" alt="" />
          <p class="name">
            {{ product.name }}
          </p>
        </li>
      </ul>
    </div>
    <div class="cast-products">
      <h4 data-aos="fade-right">SG Iron Products</h4>
      <hr />
      <ul class="product-list">
        <li
          v-for="(product, i) in ironProducts"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="i * 50"
        >
          <img :src="product.src" alt="" />
          <p class="name">
            {{ product.name }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsPage',
  data() {
    return {
      title: {
        img: '/infra1.jpg',
        name: 'Products',
      },
      castProducts: [
        { src: '/brake-drum.jpg', name: 'Brake Drum' },
        { src: '/hydraulic-lift-piston.jpg', name: 'Hydraulic Lift Piston' },
        { src: '/flywheel.jpg', name: 'Flywheel' },
        { src: '/hydraulic-lift.jpg', name: 'Hydraulic Lift Piston' },
        { src: '/spacer.jpg', name: 'Spacer' },
        { src: '/hydraulic-control-lift.jpg', name: 'Hydraulic Control Lift' },
        { src: '/strainer-housing.jpg', name: 'Strainer Housing' },
        { src: '/front-wheel-hub.jpg', name: 'Front Wheel Hub' },
        { src: '/brake-disc.jpg', name: 'Brake Disk' },
      ],
      ironProducts: [
        { src: '/iron1.jpg', name: 'Hydraulic Piston' },
        { src: '/bearing-housing-cargo.jpg', name: 'Bearing Housing Cargo' },
        { src: '/iron2.jpg', name: 'Hydraulic Piston' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#products {
  position: relative;
  width: 100%;
  height: 100%;

  .legend {
    margin-bottom: 65px;
  }
  .cast-products {
    padding: 0 $horizontalPadding;
    @include for-phone-only {
      padding: 0 15px;
    }
    @include for-tablet-only {
      padding: 0 60px;
    }
    h4 {
      font-family: 'Lora';
      font-weight: normal;
      font-size: 48px;
      line-height: 98%;
      padding: 30px 0;
      @include for-phone-only {
        font-size: 36px;
        padding: 15px 0;
      }
    }
    hr {
      height: 5px;
      width: 100px;
      background: #d6a477;
      float: 0;
      margin: 0 0 60px 0;
      border: none;
      @include for-phone-only {
        margin: 0 0 10px 0;
      }
      @include for-tablet-only {
        margin: 0 0 20px 0;
      }
    }
    .product-list {
      list-style: none;
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-gap: 30px;
      margin: 0 0 150px 0;
      padding: 0;
      @include for-phone-only {
        grid-template-columns: auto;
        margin: 0 0 50px 0;
        grid-gap: 75px;
      }
      @include for-tablet-only {
        grid-template-columns: auto auto;
        margin: 0 0 50px 0;
      }

      li {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        img {
          width: 225px;
          transform: translateY(0);
          transition: 0.3s ease all;
        }
        .name {
          background: #ebc5a3;
          padding: 10px;
          border-radius: 97px;
          width: 100%;
          max-width: 230px;
          text-align: center;
          margin-top: 20px;
          font-weight: 500;
          font-size: 18px;
          line-height: 30px;
          color: #090909;
        }
        &:hover {
          img {
            transform: translateY(-10px);
          }
        }
      }
    }
  }
}
</style>
