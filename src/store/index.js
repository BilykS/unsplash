import Vue from 'vue'
import Vuex from 'vuex'
import images from './modules/images'
import common from './modules/common'
Vue.use(Vuex)

export default new Vuex.Store ({
	modules: {
		images,
		common
	}
})