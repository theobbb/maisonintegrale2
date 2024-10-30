<script>
	import { onMount } from 'svelte';

	const { img, src = '', alt = '', blurhash = '' } = $props();

	let loaded = $state(false);
	onMount(() => {
		const img = new Image();
		img.src = src;
		if (img.complete) {
			loaded = true;
			return;
		}

		img.onload = () => {
			loaded = true;
		};
	});
	const size = img.asset.metadata.dimensions;
</script>

<div class="relative h-full overflow-hidden">
	<img
		fetchPriority="high"
		class="absolute top-0 left-0 w-full h-full object-cover blur-xl contrast-[.8] {loaded
			? 'hidden-'
			: ''}"
		style="transform: scale(1.1)-; width: {size.width}px; height: {size.height}px;"
		src={img.asset.metadata.lqip}
		{alt}
	/>

	<img
		class="w-full z-10 relative h-full object-cover {loaded
			? ''
			: 'opacity-0'} transition duration-500"
		style="transform: scale(1.1)-"
		src={img.asset.url}
		{alt}
	/>
</div>
