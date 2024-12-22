<script lang="ts" setup>
import { homePage, projects, techStack } from '~/lib/content';
import HeroSection from './(components)/HeroSection.vue';
import ProjectSection from './(components)/ProjectSection.vue';

</script>

<template>
    <HeroSection :home-page="homePage" />
    <ProjectSection :projects="projects" />
    <SharedAppSection title="Stack">
        <div class="flex flex-row flex-wrap justify-center lg:justify-start space-x-4 lg:space-x-7">
            <div v-for="item in techStack" :key="item.name"
                class="flex flex-row items-center text-lg lg:text-2xl font-normal">
                <span>{{ item.name }}</span>
                <!-- <Separator orientation="vertical" class="text-text bg-text" /> -->
            </div>
        </div>
    </SharedAppSection>
</template>