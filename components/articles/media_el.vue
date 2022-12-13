<template lang="pug">
.articles-media
  img(:src='image' ali='image')
</template>

<script setup>

const props = defineProps({
  image: { type: String, default: '' }
})

</script>