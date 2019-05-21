<template>
	<figure class="b-figure">
		<img :src="url" alt="">
		<div class="b-figure__on-hover">
			<div class="b-figure__on-hover-header">
				<span class="b-figure__likes">
					<i class="material-icons">favorite </i>
					{{like}}
				</span>
				<span class="b-figure__add-to-collection" @click="removeFromCollection(id)" v-if="collection"> <i class="material-icons">clear </i> Remove</span>
				<span class="b-figure__add-to-collection" @click="addToCollection(id)" v-else> <i class="material-icons">add </i> Collect</span>
			</div>
			<div class="b-figure__on-hover-footer">
				<router-link :to="'/user/' + id" class="b-figure__author">
					<div class="b-figure__author-photo">
						<img :src="userPhoto" :alt="userName">
					</div>
					{{userName}}
				</router-link>
				<div class="b-figure__on-hover-footer-buttons">
					<a :href="download" class="b-figure__download" download>
						<i class="material-icons">
							arrow_downward
						</i>
					</a>
					<span @click="openFullScreen(download)" class="b-figure__download">
						<i class="material-icons">
							fullscreen
						</i>
					</span>
				</div>
			</div>
		</div>

	</figure>
</template>
<script>
export default {
	props: ['url', 'userName', 'userPhoto', 'like', 'download', 'id', 'collection'],
	methods: {
		addToCollection (id) {
			return this.$store.dispatch('setCollection', id)
		},
		removeFromCollection (id) {
			return this.$store.dispatch('editCollection', id)
		},
		openFullScreen (download) {
			return this.$store.dispatch('setImagesFull', true), this.$store.dispatch('setImagesFullSrc', download)
		}
	}
}
</script>
<style lang="sass">
	.b-figure
		position: relative
		&__on-hover
			position: absolute
			top: 0
			right: 0
			bottom: 0
			left: 0

			display: flex
			flex-direction: column

			padding: 15px
			background-image: linear-gradient(180deg,rgba(0,0,0,.2) 0,rgba(0,0,0,.199) 3.5%,rgba(0,0,0,.195) 7%,rgba(0,0,0,.19) 10.35%,rgba(0,0,0,.182) 13.85%,rgba(0,0,0,.174) 17.35%,rgba(0,0,0,.165) 20.85%,rgba(0,0,0,.155) 24.35%,rgba(0,0,0,.145) 27.85%,rgba(0,0,0,.135) 31.35%,rgba(0,0,0,.126) 34.85%,rgba(0,0,0,.118) 38.35%,rgba(0,0,0,.11) 41.85%,rgba(0,0,0,.105) 45.35%,rgba(0,0,0,.1) 48.85%,rgba(0,0,0,.103) 52.35%,rgba(0,0,0,.112) 55.85%,rgba(0,0,0,.126) 59.35%,rgba(0,0,0,.144) 62.85%,rgba(0,0,0,.165) 66.35%,rgba(0,0,0,.188) 69.85%,rgba(0,0,0,.213) 73.35%,rgba(0,0,0,.237) 76.85%,rgba(0,0,0,.262) 80.35%,rgba(0,0,0,.285) 83.85%,rgba(0,0,0,.306) 87.35%,rgba(0,0,0,.324) 90.85%,rgba(0,0,0,.338) 94.35%,rgba(0,0,0,.347) 97.85%,rgba(0,0,0,.35))
			opacity: 0
			visibility: hidden
		&__on-hover-header,
		&__on-hover-footer
			display: flex
			align-items: center
			justify-content: space-between
		&__on-hover-footer
			margin-top: auto
		&__author
			display: flex
			align-items: center

			color: #ffffff
			padding-right: 15px

		&__author-photo
			position: relative
			display: inline-block
			border-radius: 50%
			overflow: hidden
			margin-right: 15px
		&__download,
		&__add-to-collection
			display: inline-flex
			align-items: center
			justify-content: center
			padding: 5px 10px
			background-color: rgba(#ffffff, .7)
			border-radius: .5em
			box-shadow: 0 1px 2px rgba(0,0,0,.08)

			font-size: 20px
			cursor: pointer
			color: #000000
			&:hover,
			&:focus
				background-color: #ffffff
		&__download
			margin-left: 5px
		&__likes
			display: inline-flex
			align-items: center
			color: #000000
			padding: 5px 10px
			background-color: rgba(#ffffff, .7)

			font-size: 20px
			cursor: pointer
			border-radius: .5em
			box-shadow: 0 1px 2px rgba(0,0,0,.08)
			&:hover,
			&:focus
				background-color: #ffffff
			.material-icons
				margin-right: 5px
				color: #f15151


		&:hover,
		&:focus
			.b-figure__on-hover
				opacity: 1
				visibility: visible




</style>
