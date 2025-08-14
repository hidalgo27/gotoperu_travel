<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

/** Tipos mínimos para lo que usas del backend */
type ItineraryItem = {
  id: number
  itinerarios: {
    titulo: string
    resumen: string
  }
}
const props = withDefaults(defineProps<{
  /** Array paquete_itinerario */
  itinerary: ItineraryItem[]
  /** Id del paquete (solo para keys internas/trackeo) */
  pkgId?: number | null
  /** Duración para pintar los chips de DAY (opcional, estético) */
  duration?: number
  /** Cuántos ítems mostrar por defecto */
  initialCount?: number
  /** Duración animación (segundos) */
  animDuration?: number
}>(), {
  pkgId: null,
  duration: 0,
  initialCount: 4,
  animDuration: 0.5,
})

const { $gsap } = useNuxtApp()
$gsap.registerPlugin(ScrollToPlugin)

/** Estado local */
const showCount = ref<number>(props.initialCount)
const itemRefs = ref<HTMLElement[]>([])
const openIndexes = ref<number[]>([])
const contentRefs = ref<Record<number, HTMLElement | null>>({})

/** Helpers */
const isOpen = (index: number) => openIndexes.value.includes(index)
const setContentRef = (el: HTMLElement | null, index: number) => {
  if (el) contentRefs.value[index] = el
}
const visibleItems = computed(() => props.itinerary.slice(0, showCount.value))

/** Registro de refs para animaciones por lote */
const registerItemRef = (el: HTMLElement | null, _id?: number) => {
  if (!el) return
  if (!itemRefs.value.includes(el)) itemRefs.value.push(el)
}

/** Toggle acordeón de un item */
const toggleItem = (index: number) => {
  const contentRef = contentRefs.value[index]
  if (!contentRef) return

  if (isOpen(index)) {
    const fullHeight = contentRef.scrollHeight
    $gsap.fromTo(contentRef, { height: fullHeight }, {
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0,
      duration: props.animDuration,
      ease: 'power3.inOut',
      onComplete() {
        openIndexes.value = openIndexes.value.filter(i => i !== index)
      }
    })
  } else {
    const fullHeight = contentRef.scrollHeight
    $gsap.set(contentRef, {
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0,
      overflow: 'hidden',
      display: 'block'
    })
    $gsap.to(contentRef, {
      height: fullHeight,
      opacity: 1,
      paddingTop: '1.5rem',
      paddingBottom: '1.5rem',
      duration: props.animDuration,
      ease: 'power3.inOut',
      onComplete() {
        contentRef.style.height = 'auto'
        openIndexes.value.push(index)
      }
    })
  }
}

/** Ver más / Ver menos */
const expand = async () => {
  const totalLength = props.itinerary.length
  const prev = showCount.value
  const next = Math.min(prev + 4, totalLength)
  if (next === prev) return

  showCount.value = next
  await nextTick()

  const newItems = itemRefs.value.slice(prev, next)
  if (newItems.length) {
    $gsap.fromTo(newItems, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power3.out'
    })
  }
}

const contract = async () => {
  const current = showCount.value
  const next = Math.max(props.initialCount, current - 4)
  if (next === current) return

  const toRemove = itemRefs.value.slice(next, current)
  if (toRemove.length) {
    await $gsap.to(toRemove, { opacity: 0, y: -20, duration: 0.3, stagger: 0.05, ease: 'power2.in' })
  }
  showCount.value = next
  await nextTick()
  itemRefs.value = itemRefs.value.slice(0, next)
}

/** Inicializar refs al montar */
onMounted(() => {
  showCount.value = Math.min(props.initialCount, props.itinerary.length || props.initialCount)
})
</script>

<template>
  <div class="sticky top-0">
    <h2 class="text-2xl font-bold mb-8">Itinerary</h2>

    <div class="w-full mx-auto relative">
      <div
          v-for="(it, index) in visibleItems"
          :key="it.id"
          class="flex item"
          :ref="el => registerItemRef(el as unknown as HTMLElement, pkgId || undefined)"
      >
        <!-- Columna del día -->
        <div class="relative w-20 text-center gap-12">
          <div class="absolute -z-10 left-1/2 top-0 bottom-0 border-l-2 border-dashed border-slate-300"></div>
          <div class="flex gap-1 items-center py-2 font-bold text-xs duration-300 transition"
               :class="[isOpen(index) ? 'text-secondary' : 'text-slate-500']">
            <span class="-ml-1">DAY</span>
            <span
                class="rounded-full px-2 py-1 text-white duration-300 transition"
                :class="{
                'bg-red-700': duration === index + 1,
                'bg-primary': index + 1 === 1,
                'bg-gray-500': index + 1 > 1,
                'bg-secondary': isOpen(index)
              }"
            >
              {{ index + 1 }}
            </span>
          </div>
        </div>

        <!-- Contenido -->
        <div class="space-y-2 w-full" :class="[index + 1 === visibleItems.length ? 'border-y' : 'border-t']">
          <div>
            <button
                @click="toggleItem(index)"
                class="w-full text-left p-4 flex justify-between items-center hover:bg-gray-200"
            >
              {{ it.itinerarios?.titulo }}
              <span>{{ isOpen(index) ? '-' : '+' }}</span>
            </button>

            <div
                :ref="el => setContentRef(el as unknown as HTMLElement, index)"
                class="overflow-hidden px-4 text-start hidden"
                v-html="it.itinerarios?.resumen"
            />
          </div>
        </div>
      </div>

      <!-- Controles -->
      <button
          v-if="showCount < itinerary.length"
          @click="expand"
          class="mt-4 p-4 bg-[#ffeece] font-bold text-secondary rounded w-full hover:bg-secondary hover:text-white"
      >
        View More
      </button>

      <button
          v-if="showCount > initialCount"
          @click="contract"
          class="px-4 py-2 w-full mt-2 rounded text-gray-400 hover:text-primary"
      >
        View Less
      </button>
    </div>
  </div>
</template>