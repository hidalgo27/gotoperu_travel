import { defineStore } from 'pinia';

export const useCheckoutStore = defineStore('CheckoutStore', () => {
	const showModal = ref(false);
	const paymentLink = ref('');

	const openCheckoutModal = (link) => {
		console.log('openCheckoutModal', link);
		paymentLink.value = link;
		showModal.value = true;
	};

	const closeCheckoutModal = () => {
		showModal.value = false;
	};

	return {
		showModal,
		paymentLink,
		openCheckoutModal,
		closeCheckoutModal
	};
});
