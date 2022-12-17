<template lang="pug">
ArticlesEl(:tab='payload?.tab' :background='payload?.background' :active='tab' @progress='toggle_index')
  template(v-slot:content_1)
    ArticlesTextEl(:data='payload?.article?.content_1' :promt='payload?.promt' @change='change_tab' :progressItem='progress_tab' :id='payload?.tab[0]?.id')
  template(v-slot:media_1)
    ArticlesMediaEl(:media='payload?.media[0]?.item' :type='payload?.media[0]?.type' :background='payload?.media[0]?.background' :className='payload?.media[0]?.class_name')
  template(v-slot:content_2)
    ArticlesTextEl(:data='payload?.article?.content_2' :promt='payload?.promt' :progressItem='progress_tab' :id='payload?.tab[1]?.id')  
  template(v-slot:media_2)
    ArticlesMediaEl(:media='payload?.media[1]?.item' :type='payload?.media[1]?.type' :background='payload?.media[1]?.background' :className='payload?.media[1]?.class_name')
</template>

<script setup>

import { ref } from 'vue'

const props = defineProps({
  payload: { type: Object, default: {} }
})
const tab = ref(0)
const progress_tab = ref(0)
const change_tab = data => tab.value = data
const toggle_index = data => progress_tab.value = data

</script>