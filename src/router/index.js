import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/index'
import Collections from '@/components/pages/collections'
import User from '@/components/pages/user'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: 'collections',
			name: 'collections',
			component: Collections
		},
		{
			path: '/user/:id',
			props: true,
			name: 'user',
			component: User
		},
	]
})
