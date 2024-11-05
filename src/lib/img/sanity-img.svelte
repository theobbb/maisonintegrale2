<script>
	import Img from './img.svelte';

	const { img, ...props } = $props();
</script>

<Img
	src={img.asset.url}
	blurdata={img.asset.metadata.lqip}
	size={img.asset.metadata.dimensions}
	{...props}
/>
