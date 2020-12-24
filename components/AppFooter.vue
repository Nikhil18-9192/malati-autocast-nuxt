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
          <p>0230 – 2366148 0230 – 2366149 9552917160</p>
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
        { name: 'Our Journey', route: '/' },
        { name: 'Infrastructure', route: '/' },
        { name: 'Clients & Partners', route: '/' },
        { name: 'Compliance', route: '/' },
        { name: 'Career & Team', route: '/' },
        { name: 'Contact Us', route: '/' },
        { name: 'Products', route: '/' },
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
  .menu {
    width: 20%;
    ul {
      list-style: none;
      padding: 0;
      li {
        margin-bottom: 20px;
        a {
          font-weight: 500;
          font-size: 16px;
          color: #2f2f2f;
          text-decoration: none;
        }
      }
    }
  }
  .contact-info {
    width: 40%;

    .phone {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      .icon {
        margin-right: 30px;
        img {
          width: 14px;
        }
      }
    }
  }
  .contact-form {
    padding: 0 20px;
    width: 40%;
  }
}
</style>
