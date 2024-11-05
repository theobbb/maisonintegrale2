<script>
	import { onMount } from 'svelte';

	const { text = '', delay = 0 } = $props();

	const letters = text.split('');

	let visible = $state(false);
	onMount(() => {
		visible = true;
	});

	function onkeydown(event) {
		if (event.key === 'e') {
			visible = !visible;
		}
	}
</script>

<svelte:window {onkeydown} />

<div class="relative overflow-hidden">
	<div
		class=" {visible ? '' : 'opacity-60 translate-y-full'} transition ease-out duration-[1000ms]"
		style="transition-delay: {delay}ms;"
	>
		{text}
	</div>
</div>
