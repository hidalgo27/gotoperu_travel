<template>
  <h2 class="text-3xl font-bold text-center">Travel Information</h2>
  <section class="mt-4 hidden md:block">
    <div class="container grid grid-cols-1 md:grid-cols-3 items-center">
      <div class="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 h-full col-span-1  justify-between p-6 text-gray-500 order-2 md:order-1 rounded-l-xl">
        <span class="text-sm font-light">{{listBlogFirst.created_at}}</span>
        _____
<!--        <span class="text-sm font-light">{{blog_first.categoria.nombre}}</span>-->

        <h2 class="my-6 font-semibold text-gray-600 dark:text-gray-100 text-3xl"><a href="">{{listBlogFirst.titulo}}</a></h2>
        <span class="text-sm mb-6" v-html="textoCorto"></span>

        <a :href="'/travel-information/'+listBlogFirst.url" class="text-secondary mt-4 flex">read <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg></a>
      </div>
      <div class="col-span-2 order-1 md:order-2 h-30r">
        <img :src="listBlogFirst.imagen_miniatura" alt="" class="h-full w-full object-cover object-center rounded-r-xl">
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
import {usePackageStore} from "~/stores/packages";

const packageStore = usePackageStore()

const listBlog = ref([])
const listBlogFirst = ref([])
const listCategory = ref([])
const countries = ref('cusco')

const getBlog = async () => {
  const res:any = await packageStore.getBlog()
  console.log(res.blog_first)
  listBlogFirst.value = res.blog_first
  listBlog.value = res.blogs
  listCategory.value = res.category
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}

const textoCorto = computed(() => {
  if (listBlogFirst.value.detalle && listBlogFirst.value.detalle.length > 300) {
    return listBlogFirst.value.detalle.substring(0, 300) + '...';
  }
  return listBlogFirst.value.detalle;
});

const paises = computed(() => {
  return listBlog.value.filter(pais => pais.url === countries.value)
})


onMounted(async () => {
  await getBlog()

})

</script>