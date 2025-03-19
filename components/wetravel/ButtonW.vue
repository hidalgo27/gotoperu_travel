<template>
  <button @click="handleCheckout">Comprar Paquete</button>
</template>

<script setup>
import { useCheckoutStore } from '~/stores/checkout';

const { openCheckoutModal } = useCheckoutStore();

const handleCheckout = async () => {
  // Aquí podrías integrar la lógica para obtener el link de pago antes de abrir el modal
  const paymentLink = 'https://demo.wetravel.to/checkout_embed?uuid=42674983'; // Ejemplo de URL
  openCheckoutModal(paymentLink);
};
</script>
