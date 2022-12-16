<template lang="pug">
.delimiter
  .delimiter-background
    img(:src='toggle_image')
  .container
    CommonTitleEl(:title='title')
</template>

<script setup>

import { ref, inject } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  image: { type: Array, default: [] }
})
const screen_width = inject('screen_width')
const toggle_image = ref('')
onMounted(() => {
  toggle_image.value = screen_width.value > 576 ? props.image[0] : props.image[1]
})

</script>

<style lang="sass" scoped>
.delimiter
  position: relative
  .container
    height: 100vh
    align-items: center
    justify-content: center
  &-background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: -1
    img
      width: 100%
      height: 100%
  @media only screen and (max-width: 576px)
    &-background
      display: flex
      align-items: center
      img
        height: auto
        position: relative
        top: 28%
</style>