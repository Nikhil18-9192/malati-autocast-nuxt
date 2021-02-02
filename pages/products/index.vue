<template>
  <div id="products">
    <div class="title">
      <h1>Products</h1>
    </div>
    <div class="cast-products">
      <h4>Cast Iron Products</h4>
      <hr />
      <ul class="product-list">
        <li v-for="(product, i) in castProducts" :key="i">
          <img :src="product.src" alt="" />
          <p class="name">
            {{ product.name }}
          </p>
        </li>
      </ul>
    </div>
    <div class="cast-products">
      <h4>SG Iron Products</h4>
      <hr />
      <ul class="product-list">
        <li v-for="(product, i) in ironProducts" :key="i">
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
      castProducts: [
        { src: '/brake-drum.png', name: 'Brake Drum' },
        { src: '/hydraulic-lift-piston.png', name: 'Hydraulic Lift Piston' },
        { src: '/flywheel.png', name: 'Flywheel' },
        { src: '/hydraulic-lift.png', name: 'Hydraulic Lift Piston' },
        { src: '/spacer.png', name: 'Spacer' },
        { src: '/hydraulic-control-lift.png', name: 'Hydraulic Control Lift' },
        { src: '/strainer-housing.png', name: 'Strainer Housing' },
      ],
      ironProducts: [
        { src: '/iron1.png', name: 'Hydraulic Piston' },
        { src: '/bearing-housing-cargo.png', name: 'Bearing Housing Cargo' },
        { src: '/iron2.png', name: 'Hydraulic Piston' },
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
  .cast-products {
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
            transition: 0.3s ease all;
            transform: translateY(-10px);
          }
        }
      }
    }
  }
}
</style>
