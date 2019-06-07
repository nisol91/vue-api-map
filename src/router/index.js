import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Maps from '@/components/Maps'
import Timing from '@/components/Timing'




Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/maps/:activityId',
			name: 'Maps',
			component: Maps
		},
		{
			path: '/timing',
			name: 'Timing',
			component: Timing
		},
	]
})