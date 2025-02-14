<script setup lang="ts">

import { Icon } from "@iconify/vue";
import { Badge } from '@/components/ui/badge'

const RRSS = [
    {
        icon: "mdi:instagram",
        url: "www.youtube.com"
    },
    {
        icon: "mdi:facebook",
        url: "www.facebook.com"
    },
    {
        icon: "mdi:twitter",
        url: "www.twitter.com"
    },
    {
        icon: "ic:baseline-tiktok",
        url: "www.tiktok.com"
    }

]

</script>

<template>

    <footer class="w-full h-24 flex flex-col">

        <div class="w-full flex justify-between items-center px-6 py-4">

            <div class="flex justify-center items-center px-4">

                <Icon icon="mdi:bird" width="48" height="48" />
                <span class="text-xl font-bold px-4"> VeterinCap </span>
            </div>

            <div class="flex justify-center items-center text-sm opacity-75">
                <Icon icon="mdi:copyright" width="24" />
                <div class="w-1"></div>
                <b> Derechos reservados a Develp 2020 - 2024 </b>
            </div>


            <div class="flex justify-center gap-4 px-4">

                <ul v-for="value in RRSS">
                    <li>
                        <a :href="'https://' + value.url" target="_blank">
                            <Icon :icon="value.icon" width="24" />
                        </a>

                    </li>
                </ul>

            </div>

        </div>

        <hr>

        <div class="w-full flex justify-start gap-5 items-center py-4 px-8">
            <Badge> <b> Direction </b> <span class="px-1"> Mz #1120 av orellana </span> </Badge>
            <Badge> <b> Email </b> <span class="px-1"> examplemail@domain.com </span> </Badge>
            <Badge> <b> Reference </b> <span class="px-1"> This zone where this clinic </span> </Badge>
            <Badge> <b> Whatsapp </b> <span class="px-1"> 593+ 093 293 2039 </span> </Badge>
            <Badge> <b> Phone </b> <span class="px-1"> 002 292 823 </span> </Badge>

        </div>


    </footer>

</template>