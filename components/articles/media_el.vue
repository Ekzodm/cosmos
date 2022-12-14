<template lang="pug">
.articles-media(:class='className')
  img(:src='image' ali='image')
</template>

<script setup>

const props = defineProps({
  image: { type: String, default: '' },
  className: { type: String, default: '' }
})

</script>

<style lang="sass" scoped>
.animate1
  animation: media1 20s linear infinite
  position: relative

@keyframes media1
  0%
    transform: translate(0, 0) rotate(0)
  12%
    transform: translate(10px, 0) rotate(2deg)
  25%
    transform: translate(10px, 5px) rotate(3deg)
  33%
    transform: translate(5px, 10px) rotate(2deg)
  50%
    transform: translate(0, 10px) rotate(0)
  66%
    transform: translate(-5px, 10px) rotate(2deg)
  75%
    transform: translate(-10px, 5px) rotate(3deg)
  87%
    transform: translate(-5px, 0) rotate(2deg)
  100%
    transform: translate(0, 0) rotate(0)
</style>