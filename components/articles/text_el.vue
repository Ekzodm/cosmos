<template lang="pug">
.articles-progress(:style='{ width: percent }')
.articles-text(@scroll='progress')
  .articles-text_item(v-html='data' ref='content' )
</template>

<script setup>

import { ref } from 'vue'

const props = defineProps({
  data: { type: String, default: '' }
})
const content = ref(null)
const percent = ref('0%')
const progress = (e) => {
  const { offsetHeight, scrollHeight, scrollTop } = e.target
  percent.value = `${Math.floor(scrollTop * 100 / ((scrollHeight - offsetHeight) * 2))}%`
}

</script>

<style lang="sass" scoped>
.articles
  &-progress
    height: 2px
    background: $orange
    max-width: 50%
  &-text
    max-width: 50%
    width: 100%
    max-height: calc(100vh - em(65, 16))
    overflow-y: auto
    padding-top: em(62, 16)
    &::-webkit-scrollbar
      width: 0
    :deep(p)
      font: font(22, 32, 400, 'Roboto Flex')
      color: $grey
      & + p
        margin-top: em(40, 22)
      span
        display: block
        & + span
          margin-top: em(32, 22)
    :deep(.active)
      background: $text_active
      padding: em(32, 24)
      font: font(24, 32, 400, 'PT Mono')
      color: $white
      border-radius: em(20, 24)
</style>