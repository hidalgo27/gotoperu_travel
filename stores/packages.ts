import { defineStore } from "pinia";

export const usePackageStore = defineStore('PackageStore', () => {
	const config = useRuntimeConfig()

	const showModalInquireHome = ref(false)
	const showModalInquireGlobal = ref(false)
	const showModalItinerary = ref(false)
	const showModalMenu = ref(false)

	const travelDate = ref()
	const destination = ref([])

	const hotelDetail = ref([])

	const titlePackages = ref("")
	const imgPackages = ref("")

	const btnDetail = ref("")

	const code_w = ref(0)

	const counterPay = ref(1)

	const paymentLink = ref("")

	const packageData = ref(null)
	const packagePriceSelected = ref(0)

	const dateSelected = ref(null)
	const departureSelected = ref(false)

	const $reset = () => {
		travelDate.value = ''
		destination.value = []
		hotelDetail.value = []
		// titlePackages.value = ""
		btnDetail.value = ""
		packageData.value = null
		packagePriceSelected.value = 0
		dateSelected.value = null
		departureSelected.value = false
	}
	const getPackage = async () => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "/packages", {
					method: 'GET',
					headers: headers,
				})
				const data = await res.json()
				if (data) {
					resolve(data)
				} else {
					reject(data)
				}
			} catch (error) {
				reject(error)
			}
		})
	}
	const getPackageTop = async () => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "/packages-top", {
					method: 'GET',
					headers: headers,
				})
				const data = await res.json()
				if (data) {
					resolve(data)
				} else {
					reject(data)
				}
			} catch (error) {
				reject(error)
			}
		})
	}
	const getPackageOffers = async () => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "/packages-offers", {
					method: 'GET',
					headers: headers,
				})
				const data = await res.json()
				if (data) {
					resolve(data)
				} else {
					reject(data)
				}
			} catch (error) {
				reject(error)
			}
		})
	}
	const getItinerary = async (url: any) => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "/latam-travel-packages/" + url, {
					method: 'GET',
					headers: headers,
				})
				const data = await res.json()
				if (data) {
					resolve(data)
				} else {
					reject(data)
				}
			} catch (error) {
				reject(error)
			}
		})
	}

	// const getItinerary = async (url: any) => {
	// 	let headers = new Headers();
	// 	headers.append('Content-Type', 'application/json');
	//
	// 	return new Promise(async (resolve, reject) => {
	// 		try {
	// 			const res = await fetch(config.public.apiBase + "/latam-travel-packages/" + url, {
	// 				method: 'GET',
	// 				headers: headers,
	// 			})
	// 			const data = await res.json()
	//
	// 			// 🔽 Normaliza: si viene array, toma el primer item; si viene objeto, úsalo tal cual
	// 			const item = Array.isArray(data) ? (data[0] ?? null) : data
	//
	// 			// Guarda en el store para uso directo en la vista
	// 			packageData.value = item
	//
	// 			if (item) {
	// 				resolve(item) // devuelve objeto (no array)
	// 			} else {
	// 				reject(new Error('No se encontró el paquete'))
	// 			}
	// 		} catch (error) {
	// 			reject(error)
	// 		}
	// 	})
	// }

	const getDestination = async () => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "/destinations", {
					method: 'GET',
					headers: headers,
				})
				const data = await res.json()
				if (data) {
					resolve(data)
				} else {
					reject(data)
				}
			} catch (error) {
				reject(error)
			}
		})
	}

	const getTeam = async () => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "/team", {
					method: 'GET',
					headers: headers,
				})
				const data = await res.json()
				if (data) {
					resolve(data)
				} else {
					reject(data)
				}
			} catch (error) {
				reject(error)
			}
		})
	}
	const getPais = async () => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "/pais", {
					method: 'GET',
					headers: headers,
				})
				const data = await res.json()
				if (data) {
					resolve(data)
				} else {
					reject(data)
				}
			} catch (error) {
				reject(error)
			}
		})
	}


	const saveInquire = async (obj: any) => {
		const res = await fetch(config.public.apiInquire, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(obj)
		})

		if (!res.ok) throw new Error('Error al guardar inquire')
		return await res.json()
	}

	const saveLead = async (obj: any) => {
		const res = await fetch("https://app.g1.agency/api/v1/leads/", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(obj)
		})

		if (!res.ok) throw new Error('Error al guardar lead')
		return await res.json()
	}

	const getCountry = async (url: any) => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "/destinations/" + url, {
					method: 'GET',
					headers: headers,
				})
				const data = await res.json()
				if (data) {
					resolve(data)
				} else {
					reject(data)
				}
			} catch (error) {
				reject(error)
			}
		})
	}

	const getCountryShow = async (urlDestino: any) => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "/destinations/region/" + urlDestino, {
					method: 'GET',
					headers: headers,
				})
				const data = await res.json()
				if (data) {
					resolve(data)
				} else {
					reject(data)
				}
			} catch (error) {
				reject(error)
			}
		})
	}


	const getBlog = async () => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "/blog", {
					method: 'GET',
					headers: headers,
				})
				const data = await res.json()
				if (data) {
					resolve(data)
				} else {
					reject(data)
				}
			} catch (error) {
				reject(error)
			}
		})
	}

	const getBlogShow = async (url: any) => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "/blog/" + url, {
					method: 'GET',
					headers: headers,
				})
				const data = await res.json()
				if (data) {
					resolve(data)
				} else {
					reject(data)
				}
			} catch (error) {
				reject(error)
			}
		})
	}

	const getInquire = async (obj: any) => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "/formulario-diseno/", {
					method: 'POST',
					headers: headers,
					body: JSON.stringify(obj)
				})
				const data = await res.json()
				if (data) {
					resolve(data)
				} else {
					reject(data)
				}
			} catch (error) {
				reject(error)
			}
		})
	}

	const getFAQ = async () => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "/faq", {
					method: 'GET',
					headers: headers,
				})
				const data = await res.json()
				if (data) {
					resolve(data)
				} else {
					reject(data)
				}
			} catch (error) {
				reject(error)
			}
		})
	}

	return {
		showModalInquireHome,
		travelDate,
		destination,
		titlePackages,
		imgPackages,
		btnDetail,
		hotelDetail,
		showModalMenu,
		packagePriceSelected,
		getPackage,
		getItinerary,
		getDestination,
		getTeam,
		getPais,
		getCountry,
		getPackageTop,
		getPackageOffers,
		getInquire,
		getCountryShow,
		getBlog,
		getBlogShow,
		getFAQ,
		saveInquire,
		saveLead,
		packageData,
		showModalInquireGlobal,
		showModalItinerary,
		code_w,
		counterPay,
		paymentLink,
		dateSelected,
		$reset
	}
}, { persist: true })