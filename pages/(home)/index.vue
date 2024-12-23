<script lang="ts" setup>
// useHead({
//     title: AppData.logo_text
// })

import { AppData } from '~/lib/app';
import { homePage, projects, techStack } from '~/lib/content';
import HeroSection from './(components)/HeroSection.vue';
import ProjectSection from './(components)/ProjectSection.vue';
import StackSection from './(components)/StackSection.vue';

</script>

<template>
    <HeroSection :home-page="homePage" />
    <ProjectSection :projects="projects" />
    <StackSection :tech-stack="techStack" />
</template>