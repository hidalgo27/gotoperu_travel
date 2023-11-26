<template>
  <div>
  <button class="wtrvl-checkout_button" id="wetravel_button_widget" data-env="https://www.wetravel.com" data-version="v0.3" data-uid="239346" data-uuid="73545253" href="https://www.wetravel.com/checkout_embed?uuid=73545253" style="background-color:#33ae3f;color:#ffffff;border: 0px;border-radius: 5px;font-family: 'Poppins', sans-serif;font-weight: 400;font-size: 14px;-webkit-font-smoothing: antialiased;text-transform: capitalize;padding: 13px 24px;text-decoration: none;text-align: center;line-height: 14px;display: inline-block; cursor: pointer;">Book Now</button>
  </div>
</template>

<script setup >
import 'https://cdn.wetravel.com/widgets/embed_checkout.js';

// onMounted( () => {
//
//     // import('https://cdn.wetravel.com/widgets/embed_checkout.js')
//     const script = document.createElement('script');
//     script.src = 'https://cdn.wetravel.com/widgets/embed_checkout.js';
//     script.async = false;
//     script.onerror = (error) => {
//       console.error('Error loading script:', error);
//     };
//
//     document.body.appendChild(script);
//
//
// })
</script>