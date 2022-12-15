<template lang="pug">
.articles-media(:class='className')
  img(v-if='type === "image"' :src='media' ali='image')
  video(v-else mute :src="media")
</template>

<script setup>

const props = defineProps({
  media: { type: String, default: '' },
  className: { type: String, default: '' },
  type: { type: String, default: 'image' }
})

</script>

<style lang="sass" scoped>
.articles-media
  width: 100%
  height: 90%
  img
    width: inherit
    height: 90%
    object-fit: contain
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