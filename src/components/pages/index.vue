<template>
	<v-layout row>
		<v-flex xs12>
			<app-images-list/>
		</v-flex>
	</v-layout>
</template>
<script>
import AppImagesList from '@/components/AppImagesList.vue'
export default {

	components: {
		AppImagesList
	}
}
</script>