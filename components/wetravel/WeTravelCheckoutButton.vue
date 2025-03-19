<template>
  <div>
    <button
        class="wtrvl-checkout_button"
        id="wetravel_button_widget"
        :data-env="dataEnv"
        :data-version="dataVersion"
        :data-uid="dataUid"
        :data-uuid="tripUuid"
        :href="`https://demo.wetravel.to/checkout_embed?uuid=${tripUuid}`"
        style="background-color:#33ae3f; color:#ffffff; border: 0px; border-radius: 5px; font-family: 'Poppins', sans-serif; font-weight: 400; font-size: 14px; -webkit-font-smoothing: antialiased; text-transform: capitalize; padding: 13px 24px; text-decoration: none; text-align: center; line-height: 14px; display: inline-block; cursor: pointer;"
    >
      Pay Here
    </button>
    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
  </div>
</template>

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

const dataEnv = 'https://demo.wetravel.to';
const dataVersion = 'v0.3';
const dataUid = '7584';

onMounted(() => {
  if (!document.querySelector('script[src="https://demo.cdn.wetravel.com/widgets/embed_checkout.js"]')) {
    const script = document.createElement('script');
    script.src = 'https://demo.cdn.wetravel.com/widgets/embed_checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }
});

</script>
