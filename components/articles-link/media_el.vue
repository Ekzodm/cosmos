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
  animation: 10s infiniti linear media_1

@keyframes media_1
  0%
    transform: translate(0, 0)
  12%
    transform: translate(10px, 0)
  25%
    transform: translate(10px, 5px)
  33%
    transform: translate(5px, 10px)
  50%
    transform: translate(0, 10px)
  66%
    transform: translate(-5px, 10px)
  75%
    transform: translate(-10px, 5px)
  87%
    transform: translate(-5px, 0)
  100%
    transform: translate(0, 0)
</style>