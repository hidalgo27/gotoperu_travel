<template>
  <div class="">
    {{ showModal }}
    <div v-if="!showModal" class="modal">
      <div class="modal-content">
        <span @click="closeCheckoutModal" class="close">&times;</span>
        <iframe src="https://demo.wetravel.to/checkout_embed?uuid=55842886" :style="iframeStyle" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useCheckoutStore} from '~/stores/checkout';

const {showModal, paymentLink, closeCheckoutModal} = useCheckoutStore();

const iframeStyle = ref({
  height: '100%', // Puedes ajustar esto dinámicamente
  width: '100%'
});

// Función para ajustar el tamaño del iframe basado en ciertas condiciones
const adjustIframeSize = () => {
  if (window.innerWidth < 768) {
    iframeStyle.value.height = '90%'; // Ajusta según necesites
  } else {
    iframeStyle.value.height = '100%';
  }
};

</script>


<style>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 100%; /* Puedes ajustar esto según necesites */
  max-width: 1200px; /* Aumentar el ancho máximo si es necesario */
  height: 50%; /* Ajustar el alto para mejor visualización */
  overflow: hidden; /* Asegúrate de que no haya desbordamiento de contenido */
}

iframe {
  width: 100%;
  height: 100%; /* Esto asegura que el iframe use todo el espacio del contenedor modal-content */
  border: none; /* Elimina el borde del iframe si es necesario */
}

@media (max-width: 768px) {
  .modal-content {
    width: 95%; /* Usa un porcentaje mayor para pantallas más pequeñas */
    height: 95%;
    max-width: none; /* Elimina el max-width para dispositivos móviles */
  }
}

</style>