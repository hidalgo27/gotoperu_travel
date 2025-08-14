<script setup>
// defineProps({
//   tripUuid: String
// });

defineProps({
  tripUuid: {
    type: String,
    required: true
  }
});

// if (typeof tripUuid !== 'string') {
//   tripUuid = tripUuid.toString();
// }

const dataEnv = 'https://gotoperu.wetravel.com';
const dataVersion = 'v0.4';
const dataUid = '239346';

onMounted(() => {
  if (!document.querySelector('script[src="https://cdn.wetravel.com/widgets/embed_checkout.js"]')) {
    const script = document.createElement('script');
    script.src = 'https://cdn.wetravel.com/widgets/embed_checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }
});

</script>
<template>
  <div>


    <button class="btn-primary wtrvl-checkout_button  w-full mt-3" id="wetravel_button_widget" data-env="https://gotoperu.wetravel.com" data-version="v0.4" data-uid="239346"
                                             :data-uid="dataUid"
                                             :href="`https://gotoperu.wetravel.com/checkout_embed?uuid=${tripUuid}`"
                                             >Book Now</button>

  </div>
</template>


