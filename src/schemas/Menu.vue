<script setup lang="ts">
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/vue";
import { useColorMode } from '@vueuse/core'
import { useToast } from "@/components/ui/toast/use-toast";
import { Toaster } from "@/components/ui/toast";
import { onBeforeMount, ref, watch } from "vue";

const { toast } = useToast()
const mode = useColorMode({ disableTransition: false })
const themeText = ref(mode.value)

onBeforeMount(()=> themeText.value = mode.value === 'light' ? 'dark' : 'light' )
watch(mode, (value)=> themeText.value = value === 'light' ? 'dark' : 'light')

const changeTheme = ()=>{
    toast({
        title: 'Change theme to ${mode.value}',
        description: 'theme updated'
    })
}

</script>


<template>

    <nav class="w-full h-20 flex justify-between items-center px-6 ">

        <div class="flex justify-center items-center">
            <Icon icon="mdi:bird" width="48" height="48" />
                        <span class="text-xl font-bold px-4"> VeterinCap </span>

        </div>

        <div class="flex">
            <div class="px-2"> <Button variant="outline" as-child> <a href="/"> <Icon icon="mdi:home-circle-outline" />  Home </a> </Button> </div>
            
            <div class="px-2"> <Button variant="outline" as-child> <a href="/"> <Icon icon="mdi:account-service-outline" /> Services </a> </Button> </div>
            <div class="px-2"> <Button variant="outline" as-child> <a href="/"> <Icon icon="mdi:notebook-edit-outline" width="24" height="24" /> Appointment </a> </Button> </div>
            <div class="px-2"> <Button variant="outline" as-child> <a href="/"> <Icon icon="mdi:about-circle-outline" /> About us </a> </Button> </div> 

            <div class="px-4">
                <Separator orientation="vertical"></Separator>
            </div>
            <Button @click="()=>{
                mode = mode == 'light' ? 'dark' : 'light'
                toast({
                    title: `Theme change to ${mode}`,
                    description: 'Updated configuration of theme'
                })
            }">
                
                <Icon class="transition-all duration-500 " :class="mode == 'light' ? 'opacity-100 scale-100 rotate-0' : 'opacity-100 scale-100 rotate-180' " icon="mdi:sun-moon-stars" />

                Theme to {{ themeText }}
            </Button>

        </div>

    </nav>

    <Toaster/>

</template>
