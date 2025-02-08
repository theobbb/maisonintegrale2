<script>
	import { dev } from '$app/environment';
	import { get_lang_state } from '$lib/lang-state.svelte';
	import { onMount } from 'svelte';

	const { text = '' } = $props();

	const words = { fr: ['construire', 'concevoir', 'designer'], en: ['design', 'create', 'build'] };

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);

	let visible_words = $state(
		words[lang].map((word, i) => ({
			text: word,
			index: i,
			pos: i
		}))
	);

	let active = $state(0);

	const delay = 3000;

	function loop() {
		//active++;
		visible_words.forEach((word) => {
			word.pos = (word.pos - 1 + visible_words.length) % visible_words.length;
			word.hidden = word.pos == visible_words.length - 1;
			word.current = word.pos === 1;
		});
		active = (active + 1 + words[lang].length) % words[lang].length;

		setTimeout(loop, delay);
	}

	onMount(() => {
		//if (dev) return;
		loop();
	});
</script>

<div id="hero-word-loop" class="relative inline-block overflow-hidden align-bottom">
	{#each visible_words as word, i}
		<div
			class="absolute transition ease-in-out {word.current ? '' : 'opacity-0'}"
			style="transform: translateY({100 * (word.pos - 1)}%); transition-duration: {delay}ms"
		>
			<div class={word.hidden ? 'opacity-0' : ''}>{word.text}</div>
		</div>
	{/each}

	<span class="opacity-0">{words[lang][0]}</span>
</div>
