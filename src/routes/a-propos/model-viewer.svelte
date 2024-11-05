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
</script>

<svelte:window {onscroll} />

<svelte:head>
	<script
		type="module"
		src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
	></script>
</svelte:head>

<div
	class="fixed inset-0 pointer-events-none {reveal
		? 'opacity-60'
		: 'opacity-0'} transition ease-in duration-700"
>
	<model-viewer
		material="color: red; metalness: 0.5; roughness: 0.5;"
		{onload}
		preload
		loading="eager"
		class="absolute inset-0 w-full h-full"
		disable-zoom
		bind:this={model}
		src="/model.glb"
		current-time="0.01"
		animation-name="CubeAction"
		minimum-render-scale="1"
		max-camera-orbit="auto 90deg auto"
		camera-orbit="calc(4.3rad - {progress} * 2rad) calc(200deg + {progress} * -140deg) calc(12m - {progress} * 8m)"
	></model-viewer>
</div>
