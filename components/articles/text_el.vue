<template lang="pug">
.articles-progress(:style='{ width: percent, left: !!progressItem ? "50%" : "0" }')
.articles-text(@scroll='progress')
  .articles-text_item(v-html='data' ref='content' )
ArticlesPromtEl(:payload='promt_search' :params='params' @close='close_promt')
</template>

<script setup>

import { ref, onMounted, inject } from 'vue'
const props = defineProps({
  data: { type: String, default: '' },
  promt: { type: Object, default: {} },
  progressItem: { type: Number, default: 0 }
})
const screen_width = inject('screen_width')
const emit = defineEmits(['change'])
const transform = ref('translateX(0)')
const content = ref(null)
const percent = ref('0%')
const promt_search = ref({})
const params = ref({})
const progress = (e) => {
  const { offsetHeight, scrollHeight, scrollTop } = e.target
  percent.value = `${Math.ceil(scrollTop * 100 / ((scrollHeight - offsetHeight) * 2))}%`
  percent.value === '50%' && emit('change', 1)
}

const prompt_select = () => {
  const prompt_array = content.value.querySelectorAll('.promt')
  for(const i of prompt_array) {
    if ( screen_width.value > 576) {
      i.addEventListener('mouseover', e => {
        params.value = { x: +e.layerX + 15, y: +e.layerY + 15, visible: true}
        promt_search.value = props.promt.promt.filter(x => x.search.indexOf(e.target.textContent.toLowerCase()) > -1)[0]
      })
      i.addEventListener('mouseout', e => {
        params.value.visible = false
      })
    } else {
      i.addEventListener('click', e => {
        params.value = { x: 0, y: 0, visible: true}
        promt_search.value = props.promt.promt.filter(x => x.search.indexOf(e.target.textContent.toLowerCase()) > -1)[0]
        document.querySelector('html').style.overflow = 'hidden'
      })
    }
  }
}
const close_promt = data => params.value.visible = data
onMounted(() => prompt_select())


</script>

<style lang="sass" scoped>
.articles
  &-progress
    height: 2px
    background: $orange
    max-width: 50%
    position: relative
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
  @media only screen and (max-width: 576px)
    &-progress
      display: none
    &-text
      max-width: 100%
      max-height: none
      padding-top: 0
      :deep(p)
        font: font(16, 24, 400, 'Roboto Flex')
        & + p
          margin-top: em(20, 16)
      :deep(.active)
        padding: em(20, 16)
        font: font(18, 24, 400, 'PT Mono')
      :deep(.author)
        margin-bottom: 1em
        img
          width: em(40, 16)
          height: em(40, 16)
        span
          font: font(14, 18, 400, 'PT Mono')
</style>