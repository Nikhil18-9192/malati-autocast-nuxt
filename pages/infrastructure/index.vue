<template>
  <div id="infrastructure">
    <Legend :title="title" />
    <Foundry />
    <Quality />
    <Environment />
  </div>
</template>

<script>
import Environment from '~/components/Environment.vue'
export default {
  components: { Environment },
  data() {
    return {
      title: {
        img: '/infra1.jpg',
        name: 'Infrastructure',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
