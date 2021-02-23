<template>
  <div id="pdf-btn">
    <a :href="pdfUrl" target="_blank">
      <img :src="icon" alt="" />
      <p>{{ text }}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: ['text', 'pdfUrl', 'icon'],
}
</script>

<style lang="scss" scoped>
#pdf-btn {
  a {
    display: flex;
    padding: 20px;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    color: #000;
    font-weight: 500;
    font-size: 16px;
    line-height: 29px;
    letter-spacing: 0.045em;
    img {
      width: 44px;
      margin-right: 20px;
    }
  }
}
</style>
