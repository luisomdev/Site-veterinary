<script setup lang="ts">

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from '@/components/ui/carousel'


import { Icon } from "@iconify/vue";
import { ref } from 'vue';
import Button from '@/components/ui/button/Button.vue';


const queryAPI = [
  {
    name: "Carlos Mendoza",
    petName: "Luna",
    petCondition: "Luna está decaída y no quiere comer desde ayer. También tiene vómitos ocasionales.",
    customerReview: "El servicio fue excelente. El veterinario fue muy atento, se tomó su tiempo para escucharme y explicó todo con detalle. Me sentí muy cómodo durante toda la consulta. Definitivamente regresaré para futuros chequeos.",
    rating: 5,
    photos: [
      "https://source.unsplash.com/300x200/?dog",
      "https://source.unsplash.com/300x200/?puppy"
    ]
  },
  {
    name: "Mariana Ríos",
    petName: "Rocky",
    petCondition: "Rocky tiene una herida en la pata y cojea al caminar. Parece estar adolorido.",
    customerReview: "Muy buen servicio, el personal fue amable y trató a Rocky con mucho cuidado. Aunque la espera fue algo larga, todo valió la pena cuando vi lo bien que lo atendieron. Me dieron instrucciones claras para su cuidado en casa.",
    rating: 4,
    photos: [
      "https://source.unsplash.com/300x200/?golden-retriever"
    ]
  },
  {
    name: "Luis Fernández",
    petName: "Milo",
    petCondition: "Milo tiene fiebre y está muy inactivo. No ha querido jugar ni comer.",
    customerReview: "El trato fue amable, el veterinario se mostró muy profesional y atento. Me explicó los síntomas de Milo y me recetó un tratamiento adecuado. Aunque la medicación es algo cara, valió la pena por el cuidado que recibió.",
    rating: 3,
    photos: [
      "https://source.unsplash.com/300x200/?cat",
      "https://source.unsplash.com/300x200/?kitten",
      "https://source.unsplash.com/300x200/?pet"
    ]
  },
  {
    name: "Andrea Pérez",
    petName: "Canela",
    petCondition: "Canela tiene tos frecuente y parece tener dificultad para respirar.",
    customerReview: "Me ayudaron rápidamente y explicaron bien el tratamiento. El ambiente en la clínica es tranquilo y acogedor, lo cual tranquiliza mucho a uno como dueño. La atención fue rápida y profesional. Canela está mejorando gracias a sus indicaciones.",
    rating: 5,
    photos: [
      "https://source.unsplash.com/300x200/?dog"
    ]
  },
  {
    name: "Roberto Gómez",
    petName: "Max",
    petCondition: "Max ha estado rascándose demasiado y tiene la piel enrojecida.",
    customerReview: "Buen servicio, aunque me gustaría más opciones de pago. El personal fue atento y me explicó detalladamente cómo tratar la dermatitis de Max. Aunque no fue barato, siento que el tratamiento le está ayudando a mejorar.",
    rating: 4,
    photos: [
      "https://source.unsplash.com/300x200/?bulldog",
      "https://source.unsplash.com/300x200/?puppy"
    ]
  }
];

const currentIndex = ref(0);
const dataReadonly = ref(queryAPI[currentIndex.value]);

const nextComment = () => {
  currentIndex.value = (currentIndex.value + 1) % queryAPI.length;
  dataReadonly.value = queryAPI[currentIndex.value];
};

const previousComment = () => {
  currentIndex.value = (currentIndex.value - 1 + queryAPI.length) % queryAPI.length;
  dataReadonly.value = queryAPI[currentIndex.value];
};


</script>

<template>

  <Card class="w-full">
    <CardHeader>
      <CardTitle> {{ dataReadonly.name }} </CardTitle>
      <CardDescription> {{ dataReadonly.petCondition }} </CardDescription>
    </CardHeader>
    <CardContent>
      {{ dataReadonly.customerReview }}
    </CardContent>
    <CardFooter class="flex flex-col">

      <div class="w-full py-4 px-3 flex justify-between items-center">

        <div>
          <b> {{ dataReadonly.rating }} </b>
        </div>

        <div class="flex justify-normal items-center gap-3">

          <ul v-for="v in dataReadonly.rating">
            <li> <b> <Icon icon="line-md:star-alt" width="24" height="24" /> </b> </li>
          </ul>

        </div>

      </div>

      <div class="w-full flex justify-between items-center">
        <Button @click="previousComment" variant="ghost">
          <Icon icon="mdi:arrow-left-thin-circle-outline" width="24" height="24" /> Atras
        </Button>
        <Button @click="nextComment" variant="ghost">
          <Icon icon="mdi:arrow-right-bold-circle-outline" /> Siguiente
        </Button>

      </div>
    </CardFooter>
  </Card>

</template>