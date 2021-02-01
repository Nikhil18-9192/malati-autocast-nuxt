<template>
  <div id="menu-comp">
    <div class="line1 line"></div>
    <div class="line2 line"></div>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
}
</script>

<style lang="scss" scopped>
#menu-comp {
  position: fixed;
  z-index: 2000;

  .line {
    width: 10px;
    height: 1px;
  }
}
</style>
