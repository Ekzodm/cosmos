<template lang="pug">
main.main 
  BannerEl
  DescriptionEl
  QuoutEl(:payload='{ title: "Андрей Борисенко", description: "летчик-космонавт, Герой России (2012). В 1987 году окончил ленинградский «Военмех», в 2003-2021-х входил в отряд космонавтов. Дважды участвовал в полетах к Международной космической станции." }')
  ArticlesEl(:tab='tab_1' :background='background_1_1' v-if='article_1')
    template(v-slot:content_1)
      ArticlesTextEl(:data='article_1?.content_1')
    template(v-slot:media_1)
      ArticlesMediaEl(:image='media_1_1')
  QuoutEl(:payload='{ title: "Александр Угрюмов", description: "руководитель блока по разработке трудноизвлекаемых запасов «Газпромнефть-Технологических партнерств». С отличием окончил геологический факультет РГУ нефти и газа имени И. М. Губкина. Имеет две магистерские степени по разработке месторождений Университета Хериота-Уатта (Эдинбург, Шотландия). Работал в ведущих российских и международных нефтегазовых компаниях." }')
  ArticlesEl(:tab='tab_1' :background_2='background_1_2' v-if='article_1')
    template(v-slot:content_2)
      ArticlesTextEl(:data='article_1?.content_2')
    template(v-slot:media_2)
      ArticlesMediaEl(:image='media_1_2')
  DelimiterEl(title='Цели')
    .delimiter-background
      img(src='@/assets/images/delimiter1.png')
  ArticlesEl(:tab='tab_2' :background='background_2_1' v-if='article_2')
    template(v-slot:content_1)
      ArticlesTextEl(:data='article_2["content_1"]')
    template(v-slot:media_1)
      ArticlesMediaEl(:image='media_2_1')
    template(v-slot:content_2)
      ArticlesTextEl(:data='article_2["content_2"]')  
    template(v-slot:media_2)
      ArticlesMediaEl(:image='media_2_2')
  DelimiterEl(title='Управление')
    .delimiter-background
      img(src='@/assets/images/delimiter2.png')
  ArticlesEl(:tab='tab_3' v-if='article_3')
    template(v-slot:content_1)
      ArticlesTextEl(:data='article_3["content_1"]')
    template(v-slot:media_1)
      ArticlesMediaEl(:image='media_3_1')
    template(v-slot:content_2)
      ArticlesTextEl(:data='article_3["content_2"]')
    template(v-slot:media_2)
      ArticlesMediaEl(:image='media_3_2')
  DelimiterEl(title='Подготовка')
    .delimiter-background
      img(src='@/assets/images/delimiter3.png')
  ArticlesEl(:tab='tab_4' v-if='article_4')
    template(v-slot:content_1)
      ArticlesTextEl(:data='article_4["content_1"]')
    template(v-slot:media_1)
      ArticlesMediaEl(:image='media_4_1')
    template(v-slot:content_2)
      ArticlesTextEl(:data='article_4["content_2"]')
    template(v-slot:media_2)
      ArticlesMediaEl(:image='media_4_2')
  DelimiterEl(title='Полёты: вверх и вниз')
    .delimiter-background
      img(src='@/assets/images/delimiter4.png')
  ArticlesEl(:tab='tab_5' v-if='article_5')
    template(v-slot:content_1)
      ArticlesTextEl(:data='article_5["content_1"]')
    template(v-slot:media_1)
      ArticlesMediaEl(:image='media_5_1')
    template(v-slot:content_2)
      ArticlesTextEl(:data='article_5["content_2"]')
    template(v-slot:media_2)
      ArticlesMediaEl(:image='media_5_2')
  DelimiterEl(title='Ключи')
    .delimiter-background
      img(src='@/assets/images/delimiter5.png')
  ArticlesEl(:tab='tab_6' v-if='article_6')
    template(v-slot:content_1)
      ArticlesTextEl(:data='article_6["content_1"]')
    template(v-slot:media_1)
      ArticlesMediaEl(:image='media_6_1')
    template(v-slot:content_2)
      ArticlesTextEl(:data='article_6["content_2"]')
    template(v-slot:media_2)
      ArticlesMediaEl(:image='media_6_2')
</template>

<script setup>

const tab_1 = [{ to: 'star', title: 'На пути к звёздам' }, { to: 'bosom', title: 'На пути к недрам' }]
const tab_2 = [{ title: 'Цели для полёта' }, { title: 'Цели для бурения' }]
const tab_3 = [{ title: 'Управление полётом' }, { title: 'Управление бурением' }]
const tab_4 = [{ title: 'Подготовка к взлёту' }, { title: 'Подготовка к бурению' }]
const tab_5 = [{ title: 'На орбите' }, { title: 'В недрах' }]
const tab_6 = [{ title: 'Ключи к космосу' }, { title: 'Ключи к недрам' }]

// Background Articles
import background_1_1 from '@/assets/images/background_1_1.png'
import background_1_2 from '@/assets/images/background_1_2.png'
import background_2_1 from '@/assets/images/article_2_1.png'

// JSON Articles
import article_1 from '@/assets/json/article_1.json'
import article_2 from '@/assets/json/article_2.json'
import article_3 from '@/assets/json/article_3.json'
import article_4 from '@/assets/json/article_4.json'
import article_5 from '@/assets/json/article_5.json'
import article_6 from '@/assets/json/article_6.json'

// Media Image Articles
import media_1_1 from '@/assets/images/media_1_1.png'
import media_1_2 from '@/assets/images/media_1_2.png'
import media_2_1 from '@/assets/images/fly.png'
import media_2_2 from '@/assets/images/drilling.png'
import media_3_1 from '@/assets/images/media_3_1.png'
import media_3_2 from '@/assets/images/media_3_2.png'
import media_4_1 from '@/assets/images/media_4_1.png'
import media_4_2 from '@/assets/images/media_4_2.png'
import media_5_1 from '@/assets/images/media_5_1.png'
import media_5_2 from '@/assets/images/media_5_2.png'
import media_6_1 from '@/assets/images/media_6_1.png'
import media_6_2 from '@/assets/images/media_6_2.png'
</script>

<style lang="sass" scoped>
.delimiter-background
  width: 100%
  height: 100%
  img
    width: 100%
    height: 100%
</style>