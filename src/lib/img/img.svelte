<script>
	import { onMount } from 'svelte';

	const { src = '', alt = '', size, blurdata = '' } = $props();

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
	//const size = img.asset.metadata.dimensions;
	// width: {size.width}px; height: {size.height}px;
</script>

<div class="absolute inset-0 h-full w-full overflow-hidden" style="">
	<img
		fetchPriority="high"
		class="absolute top-0 left-0 h-full w-full object-cover blur-lg contrast-[.8] {loaded
			? 'hidden-'
			: ''}"
		src={blurdata}
		alt="{alt}-blurload"
	/>

	<img
		class="relative z-10 h-full w-full object-cover {loaded
			? ''
			: 'opacity-0'} transition duration-300"
		{src}
		{alt}
	/>
</div>
