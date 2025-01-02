<script lang="ts" setup>
import { Command, Component } from "lucide-vue-next"
</script>

<template>
  <SharedAppSection :border-bottom=false>
    <div class="w-full min-h-10 text-text flex">
      <div
        class="items-center flex flex-col lg:flex-row lg:space-x-5 xl:space-x-6 2xl:space-x-7 self-center mx-auto justify-start space-y-2 lg:space-y-0">
        <div class="flex items-center flex-col sm:flex-row space-x-2">
          <p class="text-text ">This site is built with</p>
          <div class="flex space-x-2 xl:space-x-4 items-center text-base">
            <span>VueJs, Nuxt, Tailwind CSS</span>
          </div>
        </div>
        <Component :stroke-width="0.8" class="w-4 h-4" />
        <div>
          <p class="">Developed by <span>
              <NuxtLink to="/about" class="hover:text-orange-500">Philip Tran</NuxtLink>
            </span></p>
        </div>
        <Component :stroke-width="0.8" class="w-4 h-4" />
        <div class="flex space-x-2">
          <p>Designed by</p>
          <a href="https://kevinbhagat.com/" target="_blank">Kevin Bhagat</a>
        </div>
      </div>
    </div>
  </SharedAppSection>
</template>

<style scoped></style>