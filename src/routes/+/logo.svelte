<script>
	import { onMount } from 'svelte';

	const { footer = false } = $props();

	let open = $state(false);

	onMount(() => {
		open = true;
	});

	const path_size = 652.035;

	const duration = 2000;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="-110 -160 220 320"
	class="absolute inset-0 h-full w-full"
	preserveAspectRatio="xMinYMid"
>
	<!--
	<rect
		x="0"
		y="0"
		width="228"
		height="320"
		fill="red"
		class="hidden transition ease-in-out duration-500"
		style="clip-path: {open
			? `circle(1% at 8% 98%)`
			: `circle(100% at -6% 50%)`}; transition: clip-path 500ms;"
	/>
	-->
	<g>
		<path
			id="path-1"
			d="M 90 80 L -90 80 L -90 -42 L 0 -112 L 90 -42 Z"
			transform="translate(0 0)"
			style=" fill: none; 
		 stroke-dasharray: {path_size}; stroke-dashoffset: {open
				? 0
				: path_size}; transition: stroke-dashoffset {duration}ms; stroke-width: 4px;"
			class="ease-in-out {footer ? 'stroke-white/30' : 'stroke-black/70'}"
		>
		</path>
	</g>
	<g transform="translate(0 0)" style=""
		><path
			fillz="#5d8723"
			d="M108-141C91-160 61-161 55-145Q8-145-12 0-30 137-56 137C-64 124-91 125-108 141-91 160-61 161-55 145Q-8 145 13 0 30-137 56-137C64-124 91-125 108-141 Z"
			style="clip-path: {!open
				? `circle(0% at 8% 98%)`
				: `circle(100% at -6% 50%)`}; transition: clip-path {duration}ms;"
			class=" duration-500- transition ease-in-out {footer ? 'fill-lime-600' : 'fill-lime-700/60'}"
		>
		</path>
	</g>
</svg>
