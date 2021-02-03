<template>
  <div id="contact-form">
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Company" />
    <input type="number" placeholder="Mobile" />
    <input type="email" placeholder="Email" />
    <button>Submit</button>
    <div class="social-icon">
      <nuxt-link to=""><img src="/instagram.svg" alt="" /></nuxt-link>
      <nuxt-link to=""><img src="/tweet.svg" alt="" /></nuxt-link>
      <nuxt-link to=""><img src="/fb.svg" alt="" /></nuxt-link>
      <nuxt-link to=""><img src="/linkedin.svg" alt="" /></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scopped>
#contact-form {
  position: relative;
  width: 100%;
  input {
    width: 100%;
    border-bottom: 0.5px solid #2f2f2f;
    background: $primary;
    padding: 10px;
    outline: none;
    border-top: none;
    border-right: none;
    border-left: none;
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 300;
    &::placeholder {
      color: #2f2f2f;
    }
  }
  button {
    width: 152px;
    height: 50px;
    background: $primary;
    border: 1px solid #000;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    transition: 0.2s ease all;
    @include for-phone-only {
      width: 100%;
    }
    &:hover {
      transform: scale(1.05);
    }
  }
  .social-icon {
    margin-top: 50px;
    text-align: right;
    a {
      text-decoration: none;
      margin-left: 30px;
    }
  }
}
</style>
