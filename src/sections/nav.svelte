<script lang="ts">
	import Face from "$components/icons/face.svelte"
	import Insta from "$components/icons/insta.svelte"
	import Twitter from "$components/icons/twitter.svelte"
	import { page } from "$app/stores"
	import Hamburger from "$components/icons/hamburger.svelte"
import NavDrawer from "$components/nav-drawer.svelte"

	let scrollY = 0 
	$: hasScrolled = scrollY > 0

	let isNavDrawerOpen = false
	const onOpen = () => isNavDrawerOpen = true
</script>

<svelte:window bind:scrollY /> 

<nav class="grid fixed top-0 w-full transition-all h-[100px] z-20" class:hasScrolled>
	<div class="max-w-[1300px] justify-self-center w-full grid grid-cols-[max-content,1fr,repeat(3,max-content)] md:grid-cols-[max-content,1fr,repeat(4,max-content),1fr,repeat(2,max-content)] items-center h-full pl-[50px] pr-[35px]">
		<button on:click={onOpen} class="w-[24px] h-[24px] md:hidden">
			<Hamburger />
		</button>

		<img class="justify-self-center md:justify-self-start" src="https://hedgesfineart.co.uk/wp-content/uploads/2022/08/Hedges-b.png" alt="">

		<a class="justify-self-end nav-text" class:active="{$page.url.pathname === "/"}" href="/">Home</a>
		<a class="nav-text" class:active="{$page.url.pathname === "/about"}" href="/">About us</a>
		<a class="nav-text" class:active="{$page.url.pathname === "/art-investment"}" href="/">Art Investment</a>
		<a class="nav-text" class:active="{$page.url.pathname === "/artists"}" href="/">Artists</a>
		<a class="nav-text" class:active="{$page.url.pathname === "/contact"}" href="/">Contact</a>

		<a class="justify-self-end" href="/">
			<Face class="w-[18px] h-[18px]" />
		</a>
		<a href="/">
			<Insta class="w-[18px] h-[18px]" />
		</a>
		<a href="/">
			<Twitter class="w-[18px] h-[18px]" />
		</a>
	</div>
</nav>

<NavDrawer bind:isOpen={isNavDrawerOpen} />

<style>
	nav:not(.hasScrolled) {
		@apply text-white;
	}

	nav.hasScrolled {
		@apply text-black h-[70px] bg-white;
	}

	.nav-text {
		@apply hidden md:grid relative h-full place-content-center px-[15px] font-inter font-medium text-[15px] tracking-[1px];
	}

	.nav-text::after {
		@apply absolute transition-colors content-[''] h-1 top-0 left-0 w-full bg-[transparent];
	}

	.nav-text:hover::after  {
		@apply bg-blue-600;
	}

	.nav-text.active, .nav-text:hover {
		@apply text-blue-600;
	} 

	a:not(.nav-text) {
		@apply ml-[15px];
	}

	nav:not(.hasScrolled) img {
		@apply invert;
	}
</style>
