<template lang="pug">
.popup(:style='{ top: params.y + "px", left: params.x + "px"}' :class='[params.visible && "active"]')
  .popup-title
    h4 {{payload?.title}}
  .popup-description
    p {{payload?.description}}
</template>

<script setup>

const props = defineProps({
  payload: { type: Object, required: true },
  params: { type: Object, required: true }
})

</script>

<style lang="sass" scoped>
.popup
  background: $body
  border: 1px solid $text_active
  box-shadow: 0 4px 40px rgba(0, 0, 0, .35)
  border-radius: 8px 20px 20px 20px
  position: absolute
  z-index: 10
  padding: em(24, 16)
  display: flex
  flex-direction: column
  align-items: flex-start
  max-width: em(440, 16)
  width: 100%
  transition: .3s
  opacity: 0
  visibility: hidden
  &-title
    font: font(28, 40, 400, 'Roboto Flex')
    color: $orange
  &-description
    font: font(20, 28, 400, 'Roboto Flex')
    color: $white
  &.active
    opacity: 1
    visibility: visible
</style>