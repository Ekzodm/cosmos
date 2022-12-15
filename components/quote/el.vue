<template lang="pug">
section.quote
  .container
    .quote-block(:class='payload?.class')
      .quote-background
        img(:src='payload?.background')
      .quote-meteor
        img(:src='payload?.meteor')
      .quote-image
        img(:src='payload?.image')
      .quote-wrapper
        span.quote-wrapper_name {{payload?.name}}
        span.quote-wrapper_description {{payload?.description}}
</template>

<script setup>

const props = defineProps({
  payload: { type: Object, default: {} }
})

</script>

<style lang="sass" scoped>
.quote
  .container
    height: 100vh
    align-items: center
  &-block
    position: relative
    width: 100%
    background: $blue
    display: flex
    align-items: center
    border-radius: em(48, 16)
    height: em(780, 16)
    padding: em(20, 16) em(145, 16)
    &.first
      .quote
        &-image
          order: 1
          display: flex
          width: 50.21vw
          img
            left: 0
            width: inherit
        &-meteor
          top: em(-24, 16)
          right: em(-36, 16)
        &-wrapper
          order: 2
          max-width: em(554, 16)
    &.second
      .quote
        &-image
          order: 2
          display: flex
          width: 44.45vw
          img
            right: 0
            width: inherit
        &-meteor
          top: 0
          left: em(-100, 16)
        &-wrapper
          order: 1
          max-width: em(705, 16)
  &-background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    img
      width: 100%
  &-image
    img
      position: absolute
      bottom: 0
  &-meteor
    position: absolute
  &-wrapper
    display: flex
    flex-direction: column
    align-items: flex-start
    width: 100%
    &_name
      color: $white
      font: font(64, 72, 600, 'Roboto Flex')
      text-transform: uppercase
      max-width: em(450, 64)
    &_description
      color: $white
      font: font(28, 40, 400, 'Roboto Flex')
      margin-top: em(24, 28)
  @media only screen and (max-width: 1920px)
    font-size: media_fz(998, 1920, 14, 16)
    &-block
      height: media_fz(998, 1920, 450, 780)

</style>