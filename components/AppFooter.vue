<template>
  <div id="footer">
    <div class="menu">
      <ul>
        <li v-for="(item, i) in menu" :key="i">
          <nuxt-link :to="item.route">{{ item.name }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="contact-info">
      <div class="phone">
        <div class="icon">
          <img src="/phone.png" alt="" />
        </div>
        <div class="text">
          <p>0230 – 2366148</p>
          <p>0230 – 2366149</p>
          <p>9552917160</p>
        </div>
      </div>
      <div class="phone">
        <div class="icon">
          <img src="/mail.png" alt="" />
        </div>
        <div class="text">
          <p>sanjay@malatifounders.com</p>
        </div>
      </div>
      <div class="phone">
        <div class="icon">
          <img src="/location.png" alt="" />
        </div>
        <div class="text">
          <p>
            Plot No.10, 2nd Phase ,Sector ‘B', Shri Laxmi Industrial Estate,
            Hatkanangale, Kolhapur 416109.
          </p>
        </div>
      </div>
    </div>
    <div class="contact-form">
      <ContactForm />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { name: 'Home', route: '/' },
        { name: 'Our Journey', route: '/ourJourney' },
        { name: 'Infrastructure', route: '/infrastructure' },
        { name: 'Clients', route: '/clients' },
        // { name: 'Compliance', route: '/' },
        { name: 'Career & Team', route: '/' },
        { name: 'Contact Us', route: '/contactUs' },
        { name: 'Products', route: '/products' },
      ],
    }
  },
}
</script>

<style lang="scss" scopped>
#footer {
  padding: 40px 135px;
  background: $primary;
  height: 500px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  @include for-phone-only {
    padding: 15px;
    flex-direction: column;
    height: 100%;
  }
  @include for-tablet-only {
    padding: 40px 60px;
  }
  .menu {
    max-width: 161px;
    @include for-tablet-only {
      width: 100%;
    }
    @include for-phone-only {
      display: none;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        margin-bottom: 20px;
        a {
          font-weight: 600;
          font-size: 16px;
          color: #2f2f2f;
          text-decoration: none;
          letter-spacing: 0.045em;
          line-height: 29px;
        }
      }
    }
  }
  .contact-info {
    max-width: 322px;

    .phone {
      display: flex;
      margin-bottom: 60px;
      align-items: baseline;
      @include for-phone-only {
        margin-bottom: 20px;
      }
      .icon {
        margin-right: 30px;
        img {
          width: 14px;
        }
      }
      .text {
        p {
          font-weight: 600;
          color: #2f2f2f;
          font-size: 16px;
          letter-spacing: 0.045em;
          line-height: 29px;
        }
      }
    }
  }
  .contact-form {
    padding: 0 20px;
    max-width: 488px;
    @include for-tablet-only {
      padding: 0 0 0 10px;
    }
    @include for-phone-only {
      padding: 0;
    }
  }
}
</style>
