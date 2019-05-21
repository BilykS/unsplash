<template>
	<v-layout row justify-center>
		<v-dialog v-model="imageFull" fullscreen hide-overlay transition="dialog-bottom-transition">
			<v-card>
				<v-toolbar dark color="primary">
					<v-spacer></v-spacer>
					<v-btn icon dark @click="hideDialog">
						<v-icon>close</v-icon>
					</v-btn>
				</v-toolbar>
				<img :src="imageFullSrc" alt="alt">
			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script>
export default {
	methods: {
		hideDialog () {
			this.$store.dispatch('setImagesFull', false)
		}
	},
	computed: {
		imageFull () {
			return this.$store.getters.imageFull
		},
		imageFullSrc () {
			return this.$store.getters.imageFullSrc
		}
	}
}
</script>