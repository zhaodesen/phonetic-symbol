<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()

const toggleDark = useToggle (isDark)
</script>

<template>
  <header>
    <a href="/" absolute m-5 h-12 w-12 select-none outline-none xl:fixed>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#888888" d="M9 10h2v2H9zm0 4h2v2H9zm4-2h2v2h-2z" /><path fill="#888888" d="M9 28a5.169 5.169 0 0 1-.744-.054A5.093 5.093 0 0 1 4 22.866V11.199a7.162 7.162 0 0 1 6.31-7.165a6.96 6.96 0 0 1 4.464 1.07l7.97 4.981a6.98 6.98 0 0 1-.69 12.19l-10.88 5.229A4.976 4.976 0 0 1 9 28zm2.002-22q-.248 0-.5.024A5.146 5.146 0 0 0 6 11.198v11.669a3.084 3.084 0 0 0 2.543 3.1a3.027 3.027 0 0 0 1.763-.265l10.883-5.23a4.98 4.98 0 0 0 .488-8.696l-7.972-4.982A4.969 4.969 0 0 0 11.002 6zM26 7h-4a4.005 4.005 0 0 1-4-4V2h2v1a2.002 2.002 0 0 0 2 2h4z" /></svg>
    </a>
    <nav class="nav">
      <div m-auto />
      <div class="right" print:op0>
        <a href="/" i-carbon:chat-launch icon-btn />
        <a href="/" i-carbon:logo-github icon-btn />
        <a
          href="/" i-carbon-sun
          dark:i-carbon-moon
          icon-btn
          @click="toggleDark()"
        />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav{
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}
.nav .right{
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}
</style>
