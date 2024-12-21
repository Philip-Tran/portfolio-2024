<script setup lang="ts">
import { mainMenu } from '~/lib/menus';
import { CircleX, Menu } from 'lucide-vue-next';

const isMenuOpen = ref<boolean>(true)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

</script>

<template>
    <div class="min-h-12 w-full">
        <div>
            <div class="flex flex-col">
                <div
                    class="pl-6 flex items-center  border-b-[0.2px] border-opacity-50 border-text  justify-between w-full  space-x-4">
                    <div class="items-center">
                        <h3 class="text-lg font-medium">
                            Philip Tran
                        </h3>
                    </div>
                    <div
                        class="w-16 h-16 relative items-center flex justify-center border-l-[0.2px] border-opacity-50 border-text">
                        <button @click="toggleMenu" class="absolute inset-0">
                            <div class="w-full h-full flex items-center justify-center">
                                <Menu v-if="!isMenuOpen" :stroke-width="1.25" />
                                <CircleX v-else :stroke-width="1.25" />
                            </div>
                        </button>
                    </div>
                </div>
                <div v-show="isMenuOpen" class="flex flex-col">
                    <div v-for="(item, index) in mainMenu" :key="item.label" class="">
                        <NuxtLink :to="item.url"
                            class="flex items-center justify-start space-x-5 px-7 py-5 border-b-[0.2px] border-text border-opacity-45">
                            <component :is="item.icon"></component>
                            <span>{{ item.label }}</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>