<script setup>
import { ref, computed } from 'vue'

// Lista de meses disponibles
const months = ref(['MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'])

// Meses seleccionados (pueden ser varios)
const selectedMonths = ref(new Set())

// Datos de salidas
const departures = ref([
  { date: 'Mon, 31 Mar - Mon, 07 Apr', month: 'MARCH', available: 0, price: 1569 },
  { date: 'Mon, 05 May - Mon, 12 May', month: 'MAY', available: 1, price: 1334 },
  { date: 'Sun, 11 May - Sun, 18 May', month: 'MAY', available: 5, price: 1334 },
  { date: 'Thu, 15 May - Thu, 22 May', month: 'MAY', available: 7, price: 1334 },
  { date: 'Sun, 18 May - Sun, 25 May', month: 'MAY', available: 7, price: 1334 },
  { date: 'Mon, 19 May - Mon, 26 May', month: 'MAY', available: 3, price: 1334 },
  { date: 'Tue, 20 May - Tue, 27 May', month: 'MAY', available: 7, price: 1334 },
  { date: 'Wed, 01 Jun - Wed, 08 Jun', month: 'JUNE', available: 4, price: 1450 },
  { date: 'Fri, 10 Jun - Fri, 17 Jun', month: 'JUNE', available: 6, price: 1399 }
])

// Función para alternar la selección de meses
const toggleMonth = (month) => {
  if (selectedMonths.value.has(month)) {
    selectedMonths.value.delete(month)
  } else {
    selectedMonths.value.add(month)
  }
}

// Filtrar las salidas según los meses seleccionados
const filteredDepartures = computed(() => {
  if (selectedMonths.value.size === 0) return departures.value // Si no hay filtros, mostrar todo
  return departures.value.filter(d => selectedMonths.value.has(d.month))
})
</script>

<template>
  <article class="">
    <h2 class="text-2xl font-bold">Departures</h2>
    <!-- Botones de meses -->
    <div class="flex space-x-2 my-4">
      <button v-for="month in months" :key="month" @click="toggleMonth(month)"
        class="px-4 py-2 border rounded-md transition duration-300 ease-in-out"
        :class="{ 'bg-primary text-white': selectedMonths.has(month), 'bg-gray-200': !selectedMonths.has(month) }">
        {{ month }}
      </button>
    </div>
    <!-- Tabla de resultados -->
    <div class=" border rounded-md">
      <table class="w-full table-fixed">
        <thead class="bg-primary p-2 text-white text-left">
          <tr>
            <th class="px-2 py-4">Dates</th>
            <th class="px-2 py-4">Availability</th>
            <th class=" px-2 py-4">Price</th>
            <th class=" px-2 py-4">Action</th>
          </tr>
        </thead>
      </table>
      <div class="max-h-96 overflow-y-auto">
        <table class="w-full table-fixed">
          <TransitionGroup tag="tbody" name="fade" class="">
            <template v-for="(departure, index) in filteredDepartures" :key="departure.date">
              <!-- Separador por mes -->
              <tr v-if="index === 0 || filteredDepartures[index - 1].month !== departure.month">
                <td colspan="4" class="bg-primary bg-opacity-75 font-semibold text-white p-2">
                  {{ departure.month }}
                </td>
              </tr>
              <!-- Fila de datos -->
              <tr class="hover:bg-gray-50">
                <td class="border py-2 px-6 font-bold">{{ departure.date }}</td>
                <td class="border p-2">
                  <span v-if="departure.available > 0">{{ departure.available }} Available</span>
                  <span v-else class="text-red-500">Sold Out</span>
                </td>
                <td class="border p-2">${{ departure.price }}</td>
                <td class="border p-2">
                  <div class="flex flex-col items-center gap-2">
                    <button v-if="departure.available > 0" class="btn-secondary text-center rounded inline-block">
                      Book Now
                    </button>
                    <a v-else href="#form-dream-adventure" class="btn-primary text-center rounded inline-block">
                      Get a Quote
                    </a>
                  </div>
                </td>
              </tr>
            </template>
          </TransitionGroup>
        </table>
      </div>
    </div>
  </article>
</template>
<style></style>
