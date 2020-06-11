<script>
	import Nav from "../components/Nav.svelte";
	import Stylesheet from "../components/Stylesheet.svelte";

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Stylesheet />

<Nav {segment} />

<main>
	<slot />
</main>
