<template>
  <h2 class="text-3xl font-bold text-center">Travel Information</h2>


  <section class="bg-gray-50 py-12" v-for="listBlog in listBlogShow">
    <div class="w-full md:w-3/5 mx-auto grid grid-cols-1 md:grid-cols-1 flex items-center">
      <div class="col-span-1 px-6 md:px-0 justify-between text-gray-500">
        <span class="text-sm font-light text-secondary">{{listBlog.created_at}}</span>
        _____
<!--        <span class="text-sm font-light text-secondary">{{$post->categoria->nombre}}</span>-->

        <h2 class="my-4 font-semibold text-gray-600 text-3xl">{{listBlog.titulo}}</h2>

      </div>
      <div class="col-span-2 h-30r">
        <div class="w-full swiper-container mySwiper h-full">


            </div>
            <Carousel  ref="carouselRef" :wrap-around="true" :breakpoints="breakpoints">
              <slide v-for="imagen in listBlog.imagenes" :key="imagen.id">
                <!-- Aquí puedes poner el contenido de cada slide, por ejemplo: -->
                <img :src="imagen.nombre" alt="" class="h-96 w-full object-cover object-center">

              </slide>
            </Carousel>

          </div>
<!--          <div class="swiper-button-next btn-next">sd</div>-->
<!--          <div class="swiper-button-prev btn-prev">sd</div>-->

    </div>
    <div class="w-full md:w-3/5 mx-auto mt- px-6 md:px-0 unreset">
      <div class="text-gray-600 w-full block" v-html="listBlog.detalle"></div>
    </div>
  </section>



</template>

<script setup lang="ts">
import {usePackageStore} from "~/stores/packages";
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide} from "vue3-carousel";

const breakpoints = {
  // 500px and up
  350: {
    itemsToShow: 1.2,
    snapAlign: 'start',
  },
  // 700px and up
  700: {
    itemsToShow: 2.2,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 1,
    snapAlign: 'start',
  },
}

const packageStore = usePackageStore()

const listBlog = ref([])
const listBlogShow = ref([])
const listCategory = ref([])
const countries = ref('cusco')

const getBlogShow = async () => {
  const res:any = await packageStore.getBlogShow('test')

  listBlogShow.value = res
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}

onMounted(async () => {
  await getBlogShow()

})

</script>