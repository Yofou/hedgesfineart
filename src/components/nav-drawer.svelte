<script lang="ts">
	import { fly } from "svelte/transition"
	import Close from "./icons/close.svelte";
	export let isOpen = false

	const onClose = () => {
		isOpen = false
	}
</script>

{#if isOpen}
	<aside class="w-full h-full fixed top-0 left-0 bg-black/20 z-30" >
		<nav transition:fly={{ x: -320 }} class="max-w-[320px] h-full bg-white grid grid-flow-row">
			<button class="w-[24px] h-[24px] justify-self-end text-grey-300 focus:text-blue-600 hover:text-blue-600" on:click={onClose}>
				<Close />
			</button>
		</nav>
	</aside>
{/if}

