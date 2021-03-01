<template>
  <div id="legend">
    <img :src="title.img" alt="" />
    <h1 data-aos="fade-left">
      {{ title.name }}
    </h1>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style lang="scss" scoped>
#legend {
  position: relative;
  img {
    width: 100%;
    max-height: 390px;
    object-fit: cover;
    object-position: right;
    z-index: 10;
    filter: grayscale(1);
    @include for-phone-only {
      min-height: 250px;
      object-fit: cover;
    }
    @include for-tablet-only {
      min-height: 400px;
      object-fit: cover;
    }
  }
  h1 {
    position: absolute;
    top: 25%;
    right: 10%;
    z-index: 11;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 144px;
    line-height: 141px;
    color: #e0e0e0;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.561);
    @include for-phone-only {
      font-size: 45px;
      top: 25%;
      right: 4%;
    }
    @include for-tablet-only {
      font-size: 85px;
      top: 35%;
    }
  }
}
</style>
