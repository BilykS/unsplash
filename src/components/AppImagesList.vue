<template>

	<div>
		<div class="b-figure-list">
			<div class="b-figure-list__col">
				<template  v-for="(item, index) in proxy">
					<div class="b-figure-list__item" :key="index" v-if="index % 2 == 0">
						<app-img-thumb :url="item.urls.small" :userName="item.user.name" :userPhoto="item.user['profile_image'].small" :like="item.likes" :download="item.links.download" :id="item.id"/>
					</div>
				</template>
			</div>
			<div class="b-figure-list__col">
				<template  v-for="(item, index) in proxy">
					<div class="b-figure-list__item" :key="index" v-if="index % 2 !== 0">
						<app-img-thumb :url="item.urls.small" :userName="item.user.name" :userPhoto="item.user['profile_image'].small" :like="item.likes" :download="item.links.download" :id="item.id"/>
					</div>
				</template>
			</div>
		</div>
	</div>

</template>

<script>

import AppImgThumb from './AppImgThumb'

export default {

	components: {
		AppImgThumb
	},
	computed: {
		proxy () {
			return this.$store.getters.images
		}
	}
}
</script>
<style lang="sass">
	.b-figure-list
		display: flex
		flex-wrap: wrap
		max-width: 820px
		margin: 0 auto

		&__item
			padding: 5px

		@media screen and (min-width: 425px)
			&__col
				flex: 1 0 50%

</style>