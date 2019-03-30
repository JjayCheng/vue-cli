<template>
	<div id="app">
		<h1 @click="click">{{msg}}</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: 'Hello World!'
		}
	},
	components: {},
	methods: {
		click() {
			// alert('hello')
		}
	}
}
</script>

<style lang="stylus" scoped>
#app
	display flex
	width 100%
	height 100%
	flex-direction column
	justify-content center
	h1
		text-align center
		font-size 30px
		color #666
</style>
