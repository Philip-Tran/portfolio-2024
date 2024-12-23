<script lang="ts" setup>
import { homePage, projects, techStack } from '~/lib/content';
import HeroSection from './(components)/HeroSection.vue';
import ProjectSection from './(components)/ProjectSection.vue';
import StackSection from './(components)/StackSection.vue';

useSeoMeta({
    description: "A Progressive Frontend Developer - Designer",
    ogLocale: "en"
})

</script>

<template>
    <HeroSection :home-page="homePage" />
    <ProjectSection :projects="projects" />
    <StackSection :tech-stack="techStack" />
</template>