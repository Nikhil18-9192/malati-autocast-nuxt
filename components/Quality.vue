<template>
  <div id="quality">
    <div class="container">
      <h1 data-aos="fade-right">Quality</h1>
      <ul class="card-container">
        <li
          v-for="(item, i) in tests"
          :key="i"
          class="card"
          data-aos="fade-up"
          :data-aos-delay="i * 200"
        >
          <div class="text">
            <h3>{{ item.title }}</h3>
            <p v-for="(point, j) in item.features" :key="j">
              {{ point }}
            </p>
          </div>
          <img :src="item.img" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { tests } from '@/utils'
export default {
  data() {
    return {}
  },
  computed: {
    tests() {
      return tests
    },
  },
}
</script>
<style lang="scss" scoped>
#quality {
  position: relative;
  background: #f4f4f4;
  padding: 64px 136px;
  @include for-phone-only {
    padding: 64px 16px 15px 16px;
  }
  @include for-tablet-only {
    padding: 60px;
  }
  .container {
    position: relative;
    h1 {
      font-family: Lora;
      font-style: normal;
      font-weight: normal;
      font-size: 48px;
      line-height: 98%;
      letter-spacing: 0.05em;
      color: #000000;
      margin-bottom: 64px;
      text-transform: uppercase;
      @include for-phone-only {
        margin-bottom: 30px;
      }
      @include for-tablet-only {
        margin-bottom: 40px;
      }
    }

    .card-container {
      margin: 0;
      padding: 0;
      list-style: none;
      display: grid;
      grid-template-columns: auto auto auto;
      grid-column-gap: 10px;
      grid-row-gap: 20px;
      @include for-tablet-only {
        grid-template-columns: auto auto;
      }
      @include for-phone-only {
        grid-template-columns: auto;
        justify-content: center;
      }

      .card {
        position: relative;
        width: 400px;
        height: 565px;
        background: white;
        @include for-tablet-only {
          width: 325px;
        }
        @include for-phone-only {
          width: 100%;
          height: 545px;
        }
        .text {
          padding: 24px;
          h3 {
            font-family: 'Quicksand';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 30px;
            letter-spacing: 0.16em;
            color: $primary;
            margin-bottom: 30px;
            text-transform: uppercase;
            min-height: 60px;
            @include for-phone-only {
              margin-bottom: 25px;
            }
          }
          p {
            font-family: Quicksand;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            letter-spacing: 0.05em;

            color: #090909;
            margin-bottom: 16px;

            &::before {
              content: ' ';
              display: inline-block;
              border-radius: 50%;
              background: #000;
              width: 5px;
              height: 5px;
              margin-right: 8px;
              margin-bottom: 2px;
            }
          }
        }
        img {
          position: absolute;
          width: 290px;
          height: 254px;
          bottom: 0;
          right: 0;
          object-fit: cover;
          @include for-phone-only {
            width: 265px;
          }
        }
      }
    }
  }
}
</style>
