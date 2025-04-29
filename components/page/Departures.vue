<script setup>
import { usePackageStore } from '@/stores/packages'
import moment from 'moment'

const packageStore = usePackageStore()
const packagePrice = ref()
const packageDuration = ref()
// Lista de meses disponibles
const months = ref(['MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'])

// Meses seleccionados (pueden ser varios)
const selectedMonths = ref(new Set())

// Datos de salidas
const departures = ref([])

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

const isPriceSelected = (packagePrice) => {
  packageStore.packagePriceSelected = packagePrice
}

function generateDepartures() {
  const today = moment()
  const currentYear = today.year()
  const generated = []

  for (let i = 0; i < months.value.length; i++) {
    const monthName = months.value[i]
    const monthIndex = moment().month(monthName).month() // Convertir nombre a índice (0-11)
    const baseDays = [1, 7, 15, 20, 28]

    baseDays.forEach(day => {
      let start = moment({ year: currentYear, month: monthIndex, day })

      // Asegurar que la fecha esté en el futuro
      if (start.isBefore(today, 'day')) return

      const end = moment(start).add(packageDuration.value, 'days')

      generated.push({
        date: `${start.format('ddd, DD MMM')} - ${end.format('ddd, DD MMM')}`,
        month: monthName,
        stars: 0,
        price: 0
      })
    })
  }

  departures.value = generated
}

onMounted(() => {
  packagePrice.value = packageStore.packageData.precio_paquetes
  packageDuration.value = packageStore.packageData.duracion

  generateDepartures()

  const priceThreeStars = packagePrice.value.find(p => p.estrellas === 3 && p.precio_d > 0);
  const priceFiveStars = packagePrice.value.find(p => p.estrellas === 5 && p.precio_d > 0);

  departures.value = departures.value.map(dep => {
    if (priceThreeStars) {
      return {
        ...dep,
        price: priceThreeStars.precio_d,
        stars: 3
      }
    } else if (priceFiveStars) {
      return {
        ...dep,
        price: priceFiveStars.precio_d,
        stars: 5
      }
    } else {
      return {
        ...dep,
        price: 0,
        stars: 0
      }
    }
  });
})
</script>

<template>
  <article class="">
    <h2 class="text-2xl font-bold">Departures</h2>
    <!-- Botones de meses -->
    <div class="flex my-4 gap-2 p-2 justify-start overflow-x-scroll focus:touch-pan-x">
      <button type="button" v-for="month in months" :key="month" @click="toggleMonth(month)"
        class="px-4 py-2 border rounded-md transition duration-300 ease-in-out text-xs md:text-base"
        :class="{ 'btn-ternary !px-4 !text-sm': selectedMonths.has(month), 'btn-disabled !px-4 !text-sm': !selectedMonths.has(month) }">
        {{ month }}
      </button>
    </div>
    <!-- Tabla de resultados -->
    <div class="rounded-t-lg overflow-hidden">
      <table class="w-full table-fixed ">
        <thead class="bg-gray-700 p-2 text-white text-left rounded-t">
          <tr class="">
            <th class="px-2 py-4">Dates</th>
            <th class="px-2 py-4">Stars</th>
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
                <td colspan="4" class="bg-primary/20 font-semibold text-primary p-2 text-xs md:text-base">
                  {{ departure.month }}
                </td>
              </tr>
              <!-- Fila de datos -->
              <tr class="hover:bg-gray-50">
                <td class="border py-2 px-2 text-xs md:text-base md:px-6 font-bold">{{ departure.date }}</td>
                <td class="border p-2 text-xs md:text-base">
                  <span v-if="departure.stars > 0">
                    <template v-for="n in departure.stars" :key="n">
                      ⭐
                    </template>
                  </span>
                  <span v-else class="text-red-500">Please Inquire</span>
                </td>
                <td class="border p-2 text-xs md:text-base">
                  <span v-if="departure.price > 0">${{ departure.price }}</span>
                  <span v-else class="text-blue-500">Inquire to get the price</span>
                </td>
                <td class="border p-2 text-xs md:text-base">
                  <div class="flex flex-col items-center gap-2">
                    <a @click="isPriceSelected(departure.price)" href="#form-dream-adventure" v-if="departure.stars > 0"
                      class="btn-primary-sm text-sm text-center rounded inline-block">
                      Book Now
                    </a>
                    <a v-else href="#form-dream-adventure"
                      class="rounded-md py-1.5 px-4 md:py-3 md:px-10 text-white btn-secondary-sm !text-sm hover:bg-opacity-95 duration-300 text-center  inline-block">
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
