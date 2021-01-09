<template>
  <div id="legend">
    <img :src="title.img" alt="" />
    <h1>{{ title.name }}</h1>
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
    max-height: 500px;
    z-index: 10;
  }
  h1 {
    position: absolute;
    top:25%;
    right: 10%;
    z-index: 11;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 144px;
    line-height: 141px;
    color: #e0e0e0;

  }
}
</style>
