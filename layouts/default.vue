<script lang="ts" setup>
import AppSideBar from '~/components/shared/AppSideBar.vue';
import { SidebarProvider } from '~/components/ui/sidebar';
</script>

<template>
    <SidebarProvider>
        <AppSideBar />
        <main class="w-full min-h-screen bg-dark text-white">
            <SharedAppHeader class="md:hidden" />
            <div class="w-full">
                <slot />
            </div>
            <SharedAppFooter />
        </main>
    </SidebarProvider>
</template>