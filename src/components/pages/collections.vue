<template>
	<div>
		<template v-if="collection.length === 0">
			<v-layout>
				<v-container>
					<h2>The list is empty</h2>
				</v-container>
			</v-layout>

		</template>
		<div class="b-figure-list" v-else>
			<template  v-for="(item, index) in collection">
				<div class="b-figure-list__item" :key="index">
					<app-img-thumb :url="item.urls.small" :userName="item.user.name" :userPhoto="item.user['profile_image'].small" :like="item.likes" :download="item.links.download" :id="item.id" collection="true"/>
				</div>
			</template>
		</div>
	</div>

</template>
<script>
import AppImgThumb from '@/components/AppImgThumb'
export default {

	components: {
		AppImgThumb
	},
	computed: {
		collection () {
			return this.$store.getters.collection
		}
	}
}
</script>