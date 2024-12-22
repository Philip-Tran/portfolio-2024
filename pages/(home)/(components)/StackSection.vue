<script lang="ts" setup>
import type { stack } from '~/lib/content';
defineProps<{
    techStack: stack[]
}>()
</script>

<template>
    <SharedAppSection title="Stack">
        <div class="flex flex-col lg:flex-row items-start">
            <div class="flex flex-row lg:w-2/3 flex-wrap justify-center lg:justify-start space-x-4 lg:space-x-7">
                <div v-for="item in techStack" :key="item.name"
                    class="flex flex-row items-center text-lg lg:text-2xl font-normal mb-5">
                    <span>{{ item.name }}</span>
                    <!-- <Separator orientation="vertical" class="text-text bg-text" /> -->
                </div>
            </div>
            <div class=" flex lg:w-1/3 flex-wrap justify-center space-x-2 lg:space-x-3 ">
                <SvgoVue :fontControlled="false" class="w-8 h-8 m-2 2xl:m-3" filled />
                <SvgoNuxtIcon :fontControlled="false" class="w-8 h-8 m-2 2xl:m-3" filled />
                <SvgoNodejsIcon :fontControlled="false" class="w-8 h-8 m-2 2xl:m-3" filled />
                <!-- <SvgoExpress :fontControlled="false" class="w-8 h-8" filled font-red-500 bg-slate-400 /> -->
                <SvgoJavascript :fontControlled="false" class="w-8 h-8 m-2 2xl:m-3" filled />
                <SvgoTypescriptIcon :fontControlled="false" class="w-8 h-8 m-2 2xl:m-3" filled />
                <SvgoVitejs :fontControlled="false" class="w-8 h-8 m-2 2xl:m-3" filled />
                <SvgoZod :fontControlled="false" class="w-8 h-8 m-2 2xl:m-3" filled />
                <SvgoTailwindcssIcon :fontControlled="false" class="w-8 h-8 m-2 2xl:m-3" filled />
                <SvgoHtml5 :fontControlled="false" class="w-8 h-8 m-2 2xl:m-3" filled />
                <SvgoCss3 :fontControlled="false" class="w-8 h-8 m-2 2xl:m-3" filled />
                <SvgoFigma :fontControlled="false" class="w-8 h-8 m-2 2xl:m-3" filled />
                <SvgoNotionIcon :fontControlled="false" class="w-8 h-8 m-2 2xl:m-3" filled />
            </div>

        </div>
    </SharedAppSection>
</template>