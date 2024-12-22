<script lang="ts" setup>
import Express from "../../assets/stack-icons/express.svg"
import Css from "../../assets/stack-icons/css-3.svg"
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

        </div>
        <span class="text-orange-500">By Philip Tran</span>
      </div>
    </div>
  </SharedAppSection>
</template>
<style scoped>
.icon {
  width: 55px;
}

.svg-icon {
  fill: none;
  /* or whatever your default state is */
}

.svg-icon:hover {
  fill: currentColor;
  /* or your specific color */
}
</style>