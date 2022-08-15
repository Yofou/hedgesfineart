<script>
	import ShowcaseCard from "$components/showcase-card.svelte";
import TitleBadge from "$components/title-badge.svelte";
</script>

<section class="grid grid-flow-row auto-rows-max">
	<TitleBadge class="justify-self-center self-start bg-blue-300 text-blue-600">showcase</TitleBadge>
	<h3 class="font-inter text-[30px] font-medium text-grey-600 text-center my-[30px]">Check out our latest projects</h3>

	<nav class="grid px-[30px] sm:px-0 grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(0px,408px))] gap-[20px] auto-rows-[408px] max-w-[1300px] justify-center justify-self-center">
		<ShowcaseCard 
			--bg="url(https://hedgesfineart.co.uk/wp-content/uploads/2019/03/immain-902-768x768.jpg)" 
			title="Qwerty VR"
			description="Lorem ipsum amet – nullam arcu tempus lorem ipsum dolor amet nulla."
			href="/"
		/>

		<ShowcaseCard 
			--bg="url(https://hedgesfineart.co.uk/wp-content/uploads/2020/11/immain-208-768x768.jpg)" 
			title="Draw & play"
			description="Lorem ipsum amet – nullam arcu tempus lorem ipsum dolor amet nulla."
			href="/"
		/>

		<ShowcaseCard 
			--bg="url(https://hedgesfineart.co.uk/wp-content/uploads/2020/03/im-main-998-768x768.jpg)" 
			title="Seven Cycling"
			description="Lorem ipsum amet – nullam arcu tempus lorem ipsum dolor amet nulla."
			href="/"
		/>

		<ShowcaseCard 
			--bg="url(https://hedgesfineart.co.uk/wp-content/uploads/2017/04/im-main-207u77088-768x768.jpg)" 
			title="CBD drops"
			description="Lorem ipsum amet – nullam arcu tempus lorem ipsum dolor amet nulla."
			href="/"
		/>

		<ShowcaseCard 
			--bg="url(https://hedgesfineart.co.uk/wp-content/uploads/2020/03/2022-210-768x768.jpg)" 
			title="Hero fighting academy"
			description="Lorem ipsum amet – nullam arcu tempus lorem ipsum dolor amet nulla."
			href="/"
		/>

		<ShowcaseCard 
			--bg="url(https://hedgesfineart.co.uk/wp-content/uploads/2020/03/im-main-11129-768x768.jpg)" 
			title="Book cover design"
			description="Lorem ipsum amet – nullam arcu tempus lorem ipsum dolor amet nulla."
			href="/"
		/>
	</nav>
</section>
