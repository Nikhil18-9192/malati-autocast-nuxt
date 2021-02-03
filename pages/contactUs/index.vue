<template>
  <div id="contact-us">
    <div class="title">
      <h1>Contact Us</h1>
    </div>
    <div class="contact">
      <div class="group">
        <h4>MALATI GROUP</h4>
        <hr />
        <p class="name">Sanjay S. Patil</p>
        <p class="position">Managing Director</p>
        <p class="position">Malati Group of Industries</p>
        <div class="phone">
          <img src="/phone.svg" alt="" />
          <p class="position">+91-9823077343</p>
        </div>
        <div class="phone">
          <img src="/envelop.svg" alt="" />
          <p class="position">sanjay@malatifounders.com</p>
        </div>
      </div>
      <div class="autocast">
        <h4>MALATI AUTOCAST PVT LTD.</h4>
        <hr />
        <p class="name">Shruti S. Patil</p>
        <p class="position">Chief Executive Officer</p>
        <p class="position">Malati Autocast Pvt. Ltd.</p>
        <div class="phone">
          <img src="/phone.svg" alt="" />
          <p class="position">+91-9823077343</p>
        </div>
        <div class="phone">
          <img src="/envelop.svg" alt="" />
          <p class="position">shruti@malatiautocast.com</p>
        </div>
      </div>
    </div>
    <div class="map-view">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10807.0770330372!2d74.40559579347986!3d16.732901757559322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc11d2a08424e79%3A0x94ded63aaaaf8743!2sShri%20Laxmi%20Co-op.%20Industrial%20Estate%2C%20Maharashtra%20416118!5e0!3m2!1sen!2sin!4v1612175452345!5m2!1sen!2sin"
        width="100%"
        height="100%"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#contact-us {
  position: relative;
  width: 100%;
  height: 100%;

  .title {
    padding: 0 $horizontalPadding;
    @include for-phone-only {
      padding: 0 30px;
    }
    @include for-tablet-only {
      padding: 0 60px;
    }
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
  .contact {
    display: flex;
    margin-bottom: 110px;
    padding: 0 $horizontalPadding;
    @include for-phone-only {
      padding: 0 30px;
      flex-direction: column;
      margin-bottom: 50px;
    }
    @include for-tablet-only {
      padding: 0 60px;
    }
    .group {
      margin-right: 100px;
      @include for-phone-only {
        margin-right: 0;
        margin-bottom: 40px;
      }
      @include for-tablet-only {
        margin-right: 45px;
      }
      h4 {
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.34em;
        margin-bottom: 25px;
        @include for-phone-only {
          margin-bottom: 15px;
        }
      }
      hr {
        height: 5px;
        width: 48px;
        background: #d6a477;
        float: 0;
        margin: 0 0 30px 0;
        border: none;
      }
    }
    .autocast {
      h4 {
        font-weight: normal;
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.34em;
        margin-bottom: 25px;
        @include for-phone-only {
          margin-bottom: 15px;
        }
      }
      hr {
        height: 5px;
        width: 48px;
        background: #d6a477;
        float: 0;
        margin: 0 0 30px 0;
        border: none;
      }
    }
    .name {
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
    }
    .position {
      font-weight: normal;
      font-size: 18px;
      line-height: 30px;
    }
    .phone {
      display: flex;
      margin-bottom: 7px;
      img {
        margin-right: 12px;
        width: 14px;
      }
    }
    p {
      margin-bottom: 7px;
    }
  }
  .map-view {
    height: 410px;
  }
}
</style>
