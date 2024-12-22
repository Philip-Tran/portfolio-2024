<script setup lang="ts">
import { mainMenu } from "~/lib/menus"
import { BadgeCheck, Calendar, ChevronDown, ChevronsUpDown, Home, Inbox, LogOut, PenLine, Search, Settings, Sparkles } from "lucide-vue-next"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter
} from "~/components/ui/sidebar"
import {
    DropdownMenuItem,
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent
} from "~/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'

const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "Account",
        url: "/dashboard/account",
        icon: PenLine,
    },
]

const handleLogout = async () => {
    if (true) {
        navigateTo("/")
        if (false) {
            console.error("Error logout:")
        }
    }
}

</script>

<template>
    <Sidebar class="bg-dark text-text border-r-text border-opacity-25 ">
        <SidebarHeader class="p-0">
            <SidebarMenu class="border-b-[0.2px] border-opacity-25 border-text ">
                <SidebarMenuItem>
                    <div class="min-h-32 py-6 xl:py-8 xl:px-8 px-5">
                        <h3 class="text-white text-2xl mb-1">Phil Tran</h3>
                        <p>Web Developer</p>
                    </div>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup class="p-0 ">
                <SidebarGroupContent>
                    <SidebarMenu class="gap-0">
                        <SidebarMenuItem v-for="item in mainMenu" :key="item.label"
                            class="rounded-none  hover:bg-text hover:text-white hover:bg-opacity-40">
                            <SidebarMenuButton asChild class="min-h-10 rounded-none">
                                <NuxtLink :to="item.url" active-class="text-white"
                                    class="flex items-center justify-start min-h-16 space-x-3 px-7 py-5 border-b-[0.2px] border-text border-opacity-25">
                                    <component :is="item.icon" />
                                    <span class="text-lg">{{ item.label }}</span>
                                </NuxtLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
        </SidebarFooter>
    </Sidebar>
</template>