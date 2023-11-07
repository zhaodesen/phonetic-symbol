<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
import { CONSONANT, RESOURCE_ADDRESS, VOWEL } from '@/const/index'

const audio = ref()
const vowel = ref(VOWEL)
const consonant = ref(CONSONANT)

function play(phonetic: string) {
  audio.value.src = `${RESOURCE_ADDRESS}${phonetic}.mp3`
  audio.value.currentTime = 0
  audio.value.play()
}
</script>

<template>
  <Header />
  <main px-7 py-10>
    <div class="prose" m-auto mb-8 text-center>
      <h1 mb-0>
        k.k.音标
      </h1>
    </div>
    <article class="project-grid" lg:grid-clos-3 mx-auto max-w-500 w-max py-2 grid="~ cols-1 md:cols-8 gap-4">
      <section v-for="(item, index) in vowel" :key="index" class="item" relative flex cursor-pointer items-center justify-center hover:text-teal-400 @click="play(item.name)">
        {{ item.label }}
      </section>
      <section v-for="(item, index) in consonant" :key="index" class="item" relative flex cursor-pointer items-center justify-center hover:text-teal-400 @click="play(item.name)">
        {{ item.label }}
      </section>
      <audio ref="audio" />
    </article>
  </main>
</template>

<style scoped>
.prose {
  --fg: #555;
  --fg-deep: #222;
  --fg-deeper: #000;
  color: var(--fg);
}

.prose h1 {
  color: var(--fg-deeper);
  font-weight: 800;
  font-size: 2.25em;
}

.project-grid .item {
  background: transparent;
  font-size: 1.1rem;
  width: 70px;
  max-width: 100%;
  padding: 0.5rem 0.875rem 0.875rem;
  border-radius: 6px;
}

.item {
  transition: .2s all ease-out;
  text-decoration: none;
  border-bottom: none !important;
  opacity: .6;
}
.project-grid .item:hover {
    background: #88888811;
}
</style>
