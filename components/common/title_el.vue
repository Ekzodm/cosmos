<template lang="pug">
.title
  h1(v-if='banner') {{title}}
  h3(v-else) {{title}}
</template>

<script setup>

const props = defineProps({
  title: { type: String, default: '' },
  banner: { type: Boolean, default: false }
})

</script>

<style lang="sass" scoped>
.title
  max-width: em(1000, 16)
  width: 100%
  position: relative
  z-index: 5
  *
    color: $white
    font: font(160, 160, 600, 'Roboto Flex')
    letter-spacing: em(3.2, 160)
    text-align: center
    text-transform: uppercase
  @media only screen and (max-width: 1920px)
    *
      font-size: media_fz(998, 1920, 120, 160)
  @media only screen and (max-width: 998px)
    *
      font-size: em(120, 16)
  @media only screen and (max-width: 576px)
    *
      font: font(50, 55, 600, 'Roboto Flex')
</style>