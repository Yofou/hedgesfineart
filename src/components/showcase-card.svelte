<script lang="ts">
	export let title: string
	export let description: string
	export let href: string

	let descriptionSpan: HTMLSpanElement
</script>

<a 
	style:--trans-x="{descriptionSpan?.scrollHeight ?? 1000}px" 
	class="rounded-[10px] relative [background-image:var(--bg)] group p-[30px] overflow-hidden bg-cover md:bg-contain bg-no-repeat bg-center grid grid-rows-[1fr,max-content]" 
	{href}
>
	<span class="self-end z-10 md:translate-y-[var(--trans-x,0px)] group-hover:translate-y-0 transition-transform text-[20px] text-white font-inter font-medium">{title}</span>
	<span 
		bind:this={descriptionSpan} 
		class="md:translate-y-[var(--trans-x,0px)] z-10 group-hover:translate-y-0 transition-all md:opacity-0 group-hover:opacity-100 font-inter text-white text-[17px] leading-[27px]"
	>
		{description}
	</span>
</a>

<style>
	a::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(rgba(255, 255, 255, 0) 60%, rgba(0, 0, 0, 0.5) 100%);
	}

	a:hover::before {
		background: linear-gradient(rgba(255, 255, 255, 0) 40%, rgba(0, 0, 0, 0.5) 100%);
	}
</style>
