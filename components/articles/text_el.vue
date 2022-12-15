<template lang="pug">
.articles-progress(:style='{ width: percent }')
.articles-text(@scroll='progress')
  .articles-text_item(v-html='data' ref='content' )
ArticlesPromtEl(:payload='promt_search' :params='params')
</template>

<script setup>

import { ref, onMounted } from 'vue'
const props = defineProps({
  data: { type: String, default: '' },
  promt: { type: Object, default: {} }
})
const content = ref(null)
const percent = ref('0%')
const promt_search = ref({})
const params = ref({})
const progress = (e) => {
  const { offsetHeight, scrollHeight, scrollTop } = e.target
  percent.value = `${Math.floor(scrollTop * 100 / ((scrollHeight - offsetHeight) * 2))}%`
}

const prompt_select = () => {
  const prompt_array = content.value.querySelectorAll('.promt')
  for(const i of prompt_array) {
    i.addEventListener('mouseover', e => {
      console.log(e)
      params.value = { x: e.layerX, y: e.layerY, visible: true}
      promt_search.value = props.promt.promt.filter(x => x.search.indexOf(e.target.textContent.toLowerCase()) > -1)[0]
    })
  }
  for(const i of prompt_array) {
    i.addEventListener('mouseout', e => {
      params.value.visible = false
    })
  }
}
onMounted(() => prompt_select())


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
      & + .author
        margin-top: em(48, 16)
      span
        display: block
        & + span
          margin-top: em(32, 22)
    :deep(.promt)
      color: $orange
      background: rgba(224, 116, 56, .1)
      padding: 0 em(8, 22)
      border-radius: em(6, 22)
      display: inline-block
      cursor: pointer
      z-index: 15
    :deep(.active)
      background: $text_active
      padding: em(32, 24)
      font: font(24, 32, 400, 'PT Mono')
      color: $white
      border-radius: em(20, 24)
    :deep(.author)
      display: flex
      align-items: center
      gap: em(14, 16)
      margin-bottom: em(24, 16)
      img
        width: em(48, 16)
        height: em(48, 16)
      span
        font: font(18, 24, 400, 'PT Mono')
        color: $white
        display: block
        max-width: em(275, 18)
</style>