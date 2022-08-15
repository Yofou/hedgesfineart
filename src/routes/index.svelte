<script>
	import AboutUs from "$sections/about-us.svelte";
	import Nav from "$sections/nav.svelte";
	import Showcase from "$sections/showcase.svelte";
	import Footer from "$sections/footer.svelte"
</script>

<h1 class="sr-only">Hedges</h1>
<Nav />
<main class="mt-[100px] grid grid-flow-row auto-rows-max">
	<Showcase />
	<AboutUs />
</main>

<Footer />
