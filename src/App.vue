<template>
	<div id="app" class="main-app">
		<app-header />
		<router-view/>
		<app-images-full/>
	</div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppImagesFull from './components/AppImagesFull'

export default {
	name: 'app',
	components: {
		AppHeader,
		AppImagesFull
	}
}
</script>

<style lang="sass">
html, body
	font-family: 'Roboto', sans-serif;
	font-size: 16px
	margin: 0
body
	color: #000000
img
	max-width: 100%
	vertical-align: middle
a
	text-decoration: none
*
	outline: none
.main-app
	padding-top: 75px
</style>
