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
    <Sidebar class="bg-dark text-text border-r-text border-opacity-30 ">
        <SidebarHeader class="p-0">
            <SidebarMenu class="border-b-[0.2px] border-opacity-40 border-text ">
                <SidebarMenuItem>
                    <div class="min-h-32 py-6 xl:py-8 xl:px-8 px-5">
                        <h3 class="text-white text-2xl mb-1">Phil Tran</h3>
                        <p>Web Developer</p>
                    </div>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup class="p-0">
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem v-for="item in mainMenu" :key="item.label" class="rounded-none">
                            <SidebarMenuButton asChild class="min-h-10 rounded-none">
                                <NuxtLink :to="item.url"
                                    class="flex items-center justify-start min-h-16 space-x-3 px-7 py-5 border-b-[0.2px] border-text border-opacity-45">
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
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger as-child>
                            <SidebarMenuButton size="lg"
                                class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                                <Avatar class="h-8 w-8 rounded-lg">
                                    <!-- <AvatarImage  /> -->
                                    <AvatarFallback class="rounded-lg">
                                        CN
                                    </AvatarFallback>
                                </Avatar>
                                <div class="grid flex-1 text-left text-sm leading-tight">
                                    <span class="truncate font-semibold"> hnh</span>
                                    <span class="truncate text-xs"> jhj</span>
                                </div>
                                <ChevronsUpDown class="ml-auto size-4" />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                            side="bottom" align="end" :side-offset="4">
                            <DropdownMenuLabel class="p-0 font-normal">
                                <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                    <Avatar class="h-8 w-8 rounded-lg">
                                        <!-- <AvatarImage :src="user.avatar" :alt="user.name" /> -->
                                        <AvatarFallback class="rounded-lg">
                                            CN
                                        </AvatarFallback>
                                    </Avatar>
                                    <div class="grid flex-1 text-left text-sm leading-tight">
                                        <span class="truncate font-semibold"> jhjh</span>
                                        <span class="truncate text-xs">gfgggg</span>
                                    </div>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <Sparkles />
                                    Upgrade to Pro
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <BadgeCheck />
                                    Account
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Button variant="link" class="w-full p-0 justify-start py-0 h-min"
                                    @click="handleLogout">
                                    <LogOut />
                                    <span>Log out</span>
                                </Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
</template>