import axios from 'axios'

export default {
	state: {
		images: [],
		collection: [],
		imageFull: false,
		imageFullSrc: ''
	},
	mutations: {
		loadImages (state, payload) {
			state.images = payload
		},
		setCollection (state, payload) {

			let _local = JSON.parse(localStorage.getItem('mainCollection')||'[]'),
				_tempLocal = _local.indexOf(payload)

			if (_tempLocal === -1) {
				_local.push(payload)
				localStorage.setItem('mainCollection', JSON.stringify(_local))
				state.collection = _local
			}

		},
		editCollection (state, payload) {

			let _local = JSON.parse(localStorage.getItem('mainCollection')),
				_tempLocal = _local.filter(function (item) {
					return item !== payload
				})

			localStorage.setItem('mainCollection', JSON.stringify(_tempLocal))

			state.collection = _tempLocal

		},
		loadCollection (state, payload) {
			state.collection = payload
		},
		setImagesFull (state, payload) {
			state.imageFull = payload
		},
		setImagesFullSrc (state, payload) {
			state.imageFullSrc = payload
		}
	},
	actions: {
		async fetchImages ({commit}) {
			commit('clearError')
			commit('setLoading', true)
			await  axios
				.get(`https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`)
				.then(response => {
					let temp = response.data
					commit('loadImages', temp)

				})
				.catch(error => {
					commit('setError', error.message)
					commit('setLoading', false)
				})
				.finally(() => (
					commit('setLoading', false)
				))
		},
		setCollection ({commit}, payload) {
			commit('setCollection', payload)
		},
		loadCollection ({commit}) {
			commit('loadCollection', JSON.parse(localStorage.getItem('mainCollection')))
		},
		editCollection ({commit}, payload) {
			commit('editCollection', payload)
		},
		setImagesFull ({commit}, payload) {
			commit('setImagesFull', payload)
		},
		setImagesFullSrc ({commit}, payload) {
			commit('setImagesFullSrc', payload)
		}
	},
	getters: {
		images (state) {
			return state.images
		},
		collection (state) {
			let temp = []
			if (state.collection) {
				state.images.filter(item => {
					state.collection.forEach(function (itm) {
						if (item.id == itm) {
							temp.push(item)
						}
					})
				})
			}
			return temp
		},
		imageFull (state) {
			return state.imageFull
		},
		imageFullSrc (state) {
			return state.imageFullSrc
		},
		imagesId (state) {
			return userId => {
				return state.images.find(images => images.id === userId)
			}
		}
	}

}