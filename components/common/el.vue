<template lang="pug">
ArticlesEl(:tab='payload?.tab' :background='payload?.background' :active='tab')
  template(v-slot:content_1)
    ArticlesTextEl(:data='payload?.article?.content_1' :promt='payload?.promt' @change='change_tab')
  template(v-slot:media_1)
    ArticlesMediaEl(:media='payload?.media[0]')
  template(v-slot:content_2)
    ArticlesTextEl(:data='payload?.article?.content_1' :promt='payload?.promt')  
  template(v-slot:media_2)
    ArticlesMediaEl(:media='payload?.media[1]')
</template>

<script setup>

import { ref } from 'vue'

const props = defineProps({
  payload: { type: Object, default: {} }
})
const tab = ref(0)
const change_tab = data => tab.value = data


</script>