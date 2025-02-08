<script>
	import Img from '$lib/img/img.svelte';

	const { imgs } = $props();
</script>

<div class="relative z-0 -mx-4 xl:-mx-14 2xl:-mx-28">
	<div class="relative px-1.5">
		<div class="flex h-[460px] w-full gap-1.5">
			{#each imgs as { src, blurdata }, i}
				<div class="relative h-full w-full">
					<Img {src} {blurdata} alt="" />
					<!--
					<img class="absolute w-full h-full object-cover" src={img.src} alt="" />
					-->
				</div>
			{/each}
		</div>
	</div>
</div>
