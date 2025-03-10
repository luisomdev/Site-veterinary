<script setup lang="ts">
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { ref, watch } from 'vue'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Icon } from '@iconify/vue'
import SendDataForm from './SendDataForm.vue'

const formSchema = toTypedSchema(z.object({
    email: z.string().email().min(2).max(50),
    title: z.string().min(3).max(50),
    content: z.string().min(10).max(200)
}))

const { handleSubmit } = useForm({
    validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
    sendform.value = true
})


const sendform = ref(false)
watch(sendform, (value) => {
    sendform ? setTimeout(() => sendform.value = false, 1500) : false
})

</script>

<template>
    <Tabs default-value="SendMail" class="w-full h-full transition-all duration-500">
        <TabsList class="transition-all duration-500">
            <TabsTrigger value="SendMail">
                Send mail
            </TabsTrigger>
            <TabsTrigger value="Appointment">
                Appointment
            </TabsTrigger>
        </TabsList>
        <TabsContent value="SendMail" class="w-full h-full relative">

            <form class="w-full px-3" @submit="onSubmit">

                <FormField v-slot="{ componentField }" name="email">
                    <FormItem>
                        <div class="py-2">
                            <FormLabel> Email </FormLabel>
                            <div class="h-2"></div>
                            <FormControl>
                                <Input type="text" placeholder="Enter email" v-bind="componentField" />
                            </FormControl>

                        </div>

                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="title">
                    <FormItem>

                        <div class="py-2">
                            <FormLabel> Title </FormLabel>
                            <div class="h-2"></div>
                            <FormControl>
                                <Input type="text" placeholder="Email title" v-bind="componentField" />
                            </FormControl>
                        </div>

                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="content">
                    <FormItem>
                        <div class="py-2">
                            <FormLabel> Content </FormLabel>
                            <div class="h-2"></div>
                            <Textarea class="resize-none h-24" placeholder="Message body." v-bind="componentField" />

                        </div>

                        <FormDescription />
                        <FormMessage />
                    </FormItem>
                </FormField>



                <br>
                <Button type="submit">
                    <Icon icon="mdi:email-send" width="24" />
                    <b> Submit </b>
                </Button>
            </form>

            <Transition name="fade">
                <SendDataForm :status="sendform" v-show="sendform"></SendDataForm>
            </Transition>

        </TabsContent>
        <TabsContent value="Appointment">
            Content
        </TabsContent>
    </Tabs>
</template>


<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>