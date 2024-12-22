<script lang="ts" setup>
import Express from "../../assets/stack-icons/express.svg"
</script>

<template>
  <SharedAppSection :border-bottom=false>
    <div class="w-full min-h-10">
      <div class="items-center flex flex-col justify-start space-y-2">
        <span class="text-text ">This site is built with</span>
        <div class="flex space-x-2 xl:space-x-4 items-center text-lg">
          <span>VueJs</span>
          <span>Nuxt</span>
          <span>TailwindCSS</span>
          <!-- <SvgoNodejsIcon class="icon" /> -->
          <!-- <Express class="icon" width="55px" /> -->
        </div>
        <span class="text-orange-500">By Philip Tran</span>
      </div>
    </div>
  </SharedAppSection>
</template>
<style>
.icon {
  width: 55px;
}
</style>