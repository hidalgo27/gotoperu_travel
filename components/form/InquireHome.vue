<template>
  <div class="container mt-20 md:mt-32 -mb-12 md:mb-16">
    <div class="relative z-10 md:w-4/6 bg-white bg-opacity-80 mx-auto p-6 rounded-2xl">
      <div class="grid grid-cols-5 gap-5 items-center">
        <div class="relative col-span-3 md:col-span-2">
          <input type="text" class="is-input-ico-home rounded-right-0 border-right-0 peer capitalize" readonly placeholder=" " @click.stop="toggle(1)"  v-model="packageStore.destination">
          <label class="is-input-ico-label-home" @click.stop="toggle(1)"><span class="md:hidden">Destinations</span><span class="hidden md:block">Choose your destinations</span></label>
          <div class="absolute inset-y-0 left-0 flex items-center pl-2 md:pl-4 pointer-events-none">
            <img src="/icons/search.svg" alt="">
          </div>
          <div class="absolute z-10 inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <transition name="top" appear>
            <div class="bg-white" :class="[shouldOpenUpwardsFirst?'box-option-select-top':'box-option-select']" v-show="viewPopover == 1" ref="dropdownFirst">
              <div class="grid items-start text-left p-2">
<!--                <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer" @click="selectDestination(destino.url)" v-for="destino in listDestination">-->
<!--                  {{ destino.nombre }}</div>-->

                <div class="flex" v-for="destino in listDestination">
                  <input type="checkbox" :id="destino.id" class="peer hidden" :value="destino.url" v-model="packageStore.destination" />
                  <label :for="destino.id" class="select-none cursor-pointer my-1 bg-gray-100 text-gray-800 rounded-full px-5 py-2 transition-colors duration-200 ease-in-out peer-checked:bg-[#D6DD85] peer-checked:text-primary"> {{ destino.nombre }} </label>
                </div>
<!--                <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer" @click="selectDestination('Cusco')">Cusco</div>-->
<!--                <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer" @click="selectDestination('Arequipa')">Arequipa</div>-->
<!--                <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer" @click="selectDestination('Puno')">Puno</div>-->
              </div>
            </div>
          </transition>
        </div>
        <div class="relative col-span-2 md:col-span-1">
          <div class="relative">
            <input type="text" class="is-input-ico-home peer" placeholder=" " v-model="packageStore.travelDate" @focus="showModalProcess = true">
            <label class="is-input-ico-label-home" @click="showModalProcess = true">When</label>
            <div class="absolute inset-y-0 left-0 flex items-center pl-2 md:pl-4 pointer-events-none">
              <img src="/icons/calendar.svg" alt="">
            </div>

          </div>
        </div>
        <div class="relative col-span-5 md:col-span-2">
          <button type="button" class="btn-primary w-full" @click="packageStore.showModalInquireGlobal = !packageStore.showModalInquireGlobal">Create My Trip Now</button>
        </div>
      </div>
    </div>
  </div>

  <section class="modal-box">
    <transition name="fade" appear>
      <div class="modal-overlay"
           v-if="showModalProcess"
           @click="showModalProcess = false"></div>
    </transition>
    <transition name="pop" appear>
      <div class="modal flex items-center"
           role="dialog"
           v-if="showModalProcess"
      >
        <div class="w-full">
          <div class="grid grid-cols-1">
            <div class="">
              <h2 class="text-lg text-tertiary omnes-semibold mb-5">Cuando desea viajar</h2>
              <!--                <p class="my-6">Espera la confirmación del pago para recibir tu póliza SOAT.  El procesamiento del pago puede tardar unos segundos.</p>-->
              <vue-tailwind-datepicker as-single no-input :formatter="formatter" v-model="packageStore.travelDate" @click="onClickSomething()" class="calendar-w"/>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>



</template>

<script lang="ts" setup>

import {usePackageStore} from "~/stores/packages";
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import {useIpStore} from "~/stores/ip";



const packageStore = usePackageStore()


const showModalProcess = ref(false)

const viewPopover = ref()

const dropdownFirst = ref(null);
const shouldOpenUpwardsFirst = ref(false);

const listDestination = ref([])

const travelDate = ref()
const destination = ref([])

const phoneInputRef = ref(null);


const getPais = async () => {
  const res:any = await packageStore.getPais()
  listDestination.value = res
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}

const onClickSomething = () => {
  showModalProcess.value = false
}

const toggle = (dropdown:any) => {

  if (dropdown === 1) {
    viewPopover.value = !viewPopover.value;
  }

  // checkDropdownPosition(dropdown);

  self.timer = setTimeout(function() {
    checkDropdownPosition(dropdown);

  }, 50)

}

const formatter = ref({
  date: 'YYYY/MM/DD',
  month: 'MMM'
})


const checkDropdownPosition = (dropdown:any) => {
  const dropdownElement = dropdown === 1 ? dropdownFirst.value : null;

  if (!dropdownElement) return;

  const rect = dropdownElement.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (dropdown === 1) {
    shouldOpenUpwardsFirst.value = rect.bottom > windowHeight;
  }

};

const handleClickOutside = (event:any) => {
  if (dropdownFirst.value && !dropdownFirst.value.contains(event.target)) {
    viewPopover.value = 0
  }
}

const shouldOpenUpwards = (dropdown:any) => {
  return dropdown === 'first' ? shouldOpenUpwardsFirst.value : false;
};

const shouldOpenDownwards = (dropdown:any) => {
  return !shouldOpenUpwards(dropdown);
};


const windowHeight = ref(null);

const updateWindowHeight = () => {
  if (typeof window !== 'undefined') {
    windowHeight.value = window.innerHeight;
  }
};


onMounted(async () => {

  document.addEventListener('click', handleClickOutside);
  await getPais()

  watchEffect(() => {
    checkDropdownPosition(1);
  });

  if (typeof window !== 'undefined') {
    windowHeight.value = window.innerHeight;
    // console.log(windowHeight.value)
    window.addEventListener('resize', updateWindowHeight);
  }

  if (process.client) {
    // @ts-ignore
    import('intl-tel-input/build/js/intlTelInput.min.js').then((module) => {
      const intlTelInput = module.default;
      if (phoneInputRef.value) {

          // if (res.token) {
          //   policyStore['tokenLogin'] = res.token
          //   loadingUser.value = false
          // }

        intlTelInput(phoneInputRef.value, {
          initialCountry: "auto",
          // @ts-ignore
         geoIpLookup: function(callback) {
          fetch("https://ipapi.co/json")
              .then(function(res) { return res.json(); })
              .then(function(data) { callback(data.country_code); })
              .catch(function() { callback("us"); });
          },
        });
      }
    });
  }

})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateWindowHeight);
  }
})

</script>
<style>
@import 'intl-tel-input/build/css/intlTelInput.css';
</style>