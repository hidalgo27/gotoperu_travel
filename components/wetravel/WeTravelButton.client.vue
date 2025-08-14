<script setup lang="ts">
// ❌ NO declares otro defineProps arriba. Usa SOLO esta línea con withDefaults:
const props = withDefaults(defineProps<{
  uuid: string            // requerido
  uid?: string            // opcional
  env?: string            // opcional
  label?: string          // opcional
}>(), {
  uid: '239346',
  env: 'https://gotoperu.wetravel.com',
  label: 'Book Now'
})
</script>

<template>
  <!-- Como el archivo es .client.vue, no necesitas ClientOnly -->
  <div style="text-align: center;">
    <button
        class="wtrvl-checkout_button"
        id="wetravel_button_widget"
        :data-env="props.env"
        data-version="v0.4"
        :data-uid="props.uid"
        :data-uuid="props.uuid"
        :href="`${props.env}/checkout_embed?uuid=${props.uuid}`"
        style="background-color:#33ae3f;color:#ffffff;border:0;border-radius:5px;
             font-family:'Poppins',sans-serif;font-weight:400;font-size:14px;
             -webkit-font-smoothing:antialiased;text-transform:capitalize;
             padding:13px 24px;text-decoration:none;text-align:center;
             line-height:14px;display:inline-block;cursor:pointer;"
    >
      {{ props.label }}
    </button>
  </div>
</template>