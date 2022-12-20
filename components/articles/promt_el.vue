<template lang="pug">
.popup(:style='{ top: params.y + "px", left: params.x + "px", zIndex: visible ? "1": "-1"}' :class='[visible && "active"]' ref='popup')
  .popup-close(@click.prevent='close')
    CommonSvgEl(title='close')
  .popup-content
    h4 {{payload?.title}}
    p {{payload?.description}}
</template>

<script setup>

import { ref, watch } from 'vue'

const props = defineProps({
  payload: { type: Object, required: true },
  params: { type: Object, required: true },
  visible: { type: Boolean, default: false }
})
const emit = defineEmits(['height', 'close'])
const popup = ref(null)
watch(() => props.params, () => setTimeout(() => { emit('height', popup.value.offsetHeight) }, 300), { deep: true })

const close = () => {
  emit('close', false)
  document.querySelector('html').style.overflow = 'visible'
}

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
  max-width: em(440, 16)
  width: 100%
  opacity: 0
  display: flex
  flex-direction: column
  align-items: flex-end
  &-close
    display: none
    margin-top: em(40, 16)
    :deep(svg)
      width: 2em
      height: 2em
  &-content
    h4
      font: font(28, 36, 400, 'Roboto Flex')
      color: $orange
      display: inline
    p
      font: font(20, 28, 400, 'Roboto Flex')
      color: $white
      display: inline
  &.active
    opacity: 1
  @media only screen and (max-width: 576px)
    background: rgba(255, 255, 255, .1)
    backdrop-filter: blur(20px)
    position: fixed
    top: 0 !important
    left: 0 !important
    padding: 0 em(20, 16)
    height: 100vh
    border-radius: 0
    box-shadow: none
    z-index: 1000
    &-close
      display: block
    &-content
      padding: em(20, 16)
      background: $body
      border-radius: 1em
      margin-top: em(4, 16)
      width: 100%
      h4
        font: font(20, 28, 400, 'Roboto Flex')
      p
        font: font(16, 24, 400, 'Roboto Flex')
</style>