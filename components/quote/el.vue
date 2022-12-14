<template lang="pug">
section.quote
  .container
    .quote-block(:class='payload?.class')
      .quote-background
        img(:src='payload?.background')
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
    &.first
      padding: em(206, 16) em(145, 16)
      .quote
        &-image
          order: 1
          display: flex
          width: em(949, 16)
          img
            left: 0
            width: inherit
        &-wrapper
          order: 2
          max-width: em(554, 16)
    &.second
      padding: em(146, 16) em(145, 16)
      .quote
        &-image
          order: 2
          img
            right: 0
            width: em(841, 16)
        &-wrapper
          order: 1
          max-width: em(705, 16)
  &-background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
  &-image
    img
      position: absolute
      bottom: 0
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

</style>