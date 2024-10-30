<script>
	let open = $state(true);

	function onkeydown(event) {
		if (event.key === 'e') {
			open = !open;
			console.log('e');
		}
	}

	const path_size = 653;
</script>

<svelte:window {onkeydown} />

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 220 320"
	class="absolute inset-0 w-full h-full"
	preserveAspectRatio="xMinYMid"
>
	<g>
		<path
			vector-effect="non-scaling-stroke"
			d="M 90 80 L -90 80 L -90 -42 L 0 -112 L 90 -42 Z"
			transform="translate(100 160)"
			style=" fill: none; 
		 stroke-dasharray: {path_size}; stroke-dashoffset: {open ? 0 : path_size};"
			class="transition-all ease-in-out duration-[2s] stroke-black/70 stroke-2 xl:stroke-[4px]"
		>
		</path>
	</g>
	<g transform="translate(116 160)"
		><path
			d="M108-141C91-160 61-161 55-145Q8-145-12 0-30 137-56 137C-64 124-91 125-108 141-91 160-61 161-55 145Q-8 145 13 0 30-137 56-137C64-124 91-125 108-141 Z"
			style="transform: {open ? '' : 'scaleX(0)'}"
			class="fill-lime-700/90 transition ease-in-out duration-500"
		>
		</path>
	</g>
</svg>

<style>
</style>
