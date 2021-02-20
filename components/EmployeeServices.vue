<template>
  <div id="services">
    <div v-if="!unlock" class="lock">
      <img src="/lock.svg" alt="" />
      <p>Please Enter the password to view the data !</p>
      <input
        type="password"
        v-model="pass"
        name="password"
        placeholder="Enter Password"
      />
      <button @click="submit">Submit</button>
    </div>
    <div v-else class="qrcode">
      <div class="card-wrap">
        <div class="card" v-for="(item, i) in qrCard" :key="i">
          <a :href="item.link">
            <img :src="item.src" alt="" />
          </a>
          <h4>{{ item.title }}</h4>
          <p>Scan Or Click the QR code</p>
        </div>
      </div>
      <PdfButton class="btn" :text="pdfText" :pdfUrl="pdfLink" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'servicesSection',
  data() {
    return {
      pass: '',
      unlock: false,
      pdfLink: 'https://www.google.com/',
      pdfText: 'Malati Autocast Pvt. Ltd. Policy on Leaves',
      qrCard: [
        {
          src: '/qr1.jpg',
          title: 'Employment Database',
          link:
            'https://docs.google.com/forms/d/e/1FAIpQLSdNqWBG0Ntood_6xGAZOYHgt3YXKWXZRF1lYfPvQ2nId8TW2w/viewform',
        },
        {
          src: '/qr2.jpg',
          title: 'Incident Report',
          link:
            'https://docs.google.com/forms/d/e/1FAIpQLScl0ynYu3fITDyVL92m1HjgELxXZVwdexRckqlxcquSZ2cwyw/viewform',
        },
        {
          src: '/qr3.jpg',
          title: 'Leave Form',
          link:
            'https://docs.google.com/forms/d/e/1FAIpQLSdreVp0ixYk1m912u4_qMPx7LQ7mORDTa0wK_AZQIj6v2RYSw/viewform',
        },
      ],
    }
  },
  methods: {
    submit() {
      if (this.pass === '1234') {
        this.unlock = true
      } else {
        this.$toast.error('Incorrect Password')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#services {
  position: relative;
  width: 100%;
  height: 550px;
  background: #f4f4f4;
  padding: 20px;
  border-radius: 4px;
  @include for-phone-only {
    height: 100%;
    padding: 8px;
  }
  @include for-tablet-only {
    height: 450px;
  }
  .lock {
    border: 1px solid #d6d6d6;
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include for-phone-only {
      padding: 8px;
      text-align: center;
    }
    img {
      width: 36px;
      height: 48px;
      object-fit: contain;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 29px;
      letter-spacing: 0.045em;
      @include for-phone-only {
        line-height: 20px;
        max-width: 80%;
        margin-top: 8px;
      }
    }
    input {
      border: 0.5px solid #606060;
      background: #fff4eb;
      width: 100%;
      max-width: 400px;
      height: 40px;
      margin: 15px 0;
      text-align: center;
      font-size: 20px;
      letter-spacing: 0.35em;
      &::placeholder {
        letter-spacing: 0;
        font-size: 16px;
        opacity: 0.7;
      }
    }
    button {
      background: #d6a477;
      border-radius: 4px;
      width: 100%;
      max-width: 400px;
      height: 50px;
      border: none;
      outline: none;
      font-weight: 500;
      font-size: 16px;
      line-height: 29px;
      letter-spacing: 0.045em;
      @include for-phone-only {
        height: 40px;
      }
    }
  }
  .qrcode {
    width: 100%;
    position: relative;
    .card-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      @include for-phone-only {
        flex-direction: column;
        padding: 20px 0;
        padding-bottom: 0;
      }
      .card {
        background: #fff;
        padding: 20px 55px;
        margin: 0 15px;
        text-align: center;
        border-radius: 4px;
        @include for-phone-only {
          margin-bottom: 30px;
        }
        @include for-tablet-only {
          padding: 10px;
        }
        img {
          width: 100%;
          object-fit: contain;
        }
        h4 {
          font-weight: 500;
          font-size: 18px;
          line-height: 29px;
          margin-top: 35px;
          @include for-tablet-only {
            font-size: 14px;
            margin-top: 0;
          }
        }
        p {
          font-weight: 500;
          font-size: 13px;
          line-height: 29px;
          color: #828282;
          @include for-tablet-only {
            font-size: 12px;
          }
        }
      }
    }
    .btn {
      background: #fff;
      width: 460px;
      height: 88px;
      margin: 24px auto 0 auto;
      border-radius: 4px;
      @include for-phone-only {
        width: 100%;
        margin-top: 0;
      }
    }
  }
}
</style>
