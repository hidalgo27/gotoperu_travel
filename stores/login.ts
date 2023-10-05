import { defineStore } from 'pinia';

export const useLoginStore = defineStore('LoginStore', () => {
	const config = useRuntimeConfig()
	const router = useRouter()
	const userData = ref()
	const success = ref()
	const tokenLogin = ref()

	const loginUser = async (objUser:object) => {
		let headers = new Headers();

		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "v1/login", {
					method: 'post',
					headers: headers,
					body: JSON.stringify(objUser)
				})
				const data =  await res.json()
				if (data){
					resolve(data)
				}else {
					reject(data)
				}
			} catch (error){
				reject(error)
			}
		})
	}
	return {
		tokenLogin,
		loginUser
	}
},{persist: true})
