<script>
	import { onMount } from 'svelte';
	import { quadInOut } from 'svelte/easing';

	let progress = $state(0);

	let model;

	let mounted = false;
	onMount(() => {
		mounted = true;

		if ((loaded || model.loaded) && !reveal) {
			init();
			return;
		}
		model.addEventListener('load', () => {
			if (!reveal) {
				init();
			}
		});
	});

	let loaded = false;
	function onload() {
		loaded = true;

		if (mounted && !reveal) {
			init();
		}
	}

	let reveal = $state(false);
	function init() {
		if (!model) return;

		const alpha = 0.5;
		const bg = [241, 242, 224];

		const color = bg.map((c) => Math.round(c * (1 - alpha))).join(', ');
		const material = model.model.materials[1];
		material.pbrMetallicRoughness.setBaseColorFactor(`rgb(${color})`);

		update();

		reveal = true;
	}

	function onscroll(e) {
		update();
	}

	function contain_float(value, min, max) {
		return Math.min(max, Math.max(min, value));
	}

	function update() {
		if (!model) return;

		progress = quadInOut(
			contain_float(window.scrollY / (document.body.scrollHeight - window.innerHeight), 0, 1)
		);

		model.currentTime = contain_float(progress * model.duration, 0.01, model.duration - 0.01);
	}
	//camera-orbit="calc(4.4rad - {progress} * 2rad) calc(200deg + {progress} * -140deg) calc(12m - {progress} * 8m)"

	//camera-orbit="0 {progress * -45 + 90}deg {(1 - progress) * 32}m"
</script>

<svelte:window {onscroll} />

<svelte:head>
	<script
		type="module"
		src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
	></script>
</svelte:head>

<div class="fixed bottom-4 left-4">
	{progress}
</div>
<div
	class="pointer-events-none fixed left-0 right-0 top-0 h-[100lvh] {reveal
		? 'opacity-60'
		: 'opacity-0'} transition duration-700 ease-in"
>
	<model-viewer
		material="color: red; metalness: 0.5; roughness: 0.5;"
		{onload}
		preload
		loading="eager"
		class=" max-md:scale-200 absolute inset-0 h-full w-full"
		disable-zoom
		bind:this={model}
		src="/model.glb"
		current-time="0.01"
		animation-name="CubeAction"
		minimum-render-scale="1"
		max-camera-orbit="auto 90deg auto"
		camera-orbit="{progress * 190 + 50}deg {progress * -45 + 90}deg {progress * -8 + 12}m"
	></model-viewer>
</div>
