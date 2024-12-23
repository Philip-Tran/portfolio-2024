<script setup lang="ts">
import { AppData } from '~/lib/app';
import { mainMenu } from '~/lib/menus';
import { CircleX, Menu } from 'lucide-vue-next';
const route = useRoute()

const isMenuOpen = ref<boolean>(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

watch(() => {
    route.fullPath
},
    () => {
        isMenuOpen.value = false
    },
    { deep: true }
)

</script>

<template>
    <div class="min-h-12 w-full sticky top-0 z-50 bg-dark">
        <div>
            <div class="flex flex-col">
                <div
                    class="pl-6 flex items-center  border-b-[0.2px] border-opacity-50 border-text  justify-between w-full  space-x-4">
                    <div class="items-center">
                        <NuxtLink to="/">
                            <h3 class="text-lg font-medium">
                                {{ AppData.logo_text }}
                            </h3>
                        </NuxtLink>
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

                <!-- Mobile menu -->
                <div v-show="isMenuOpen" class="flex flex-col">
                    <div v-for="(item, index) in mainMenu" :key="item.label + index" class="">
                        <NuxtLink :to="item.url" active-class="text-white bg-text bg-opacity-10"
                            class="flex items-center justify-start space-x-5 px-7 text-text py-5 border-b-[0.2px] border-text border-opacity-45">
                            <component :is="item.icon" class="w-4 h-4"></component>
                            <span>{{ item.label }}</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>