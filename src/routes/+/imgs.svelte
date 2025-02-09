<script>
	import Img from '$lib/img/img.svelte';
	import { get_lang_state } from '$lib/lang-state.svelte';

	const { imgs } = $props();

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
	const fr = $derived(lang == 'fr');
</script>

<div class="relative z-0 -mx-4 xl:-mx-14 2xl:-mx-28">
	<div class="relative px-1.5">
		<div class="flex h-[460px] w-full gap-1.5">
			{#each imgs as { src, href, blurdata }, i}
				<a
					href="/{fr ? 'realisations' : 'en/work'}/{href[lang]}"
					class="group relative h-full w-full overflow-hidden"
				>
					<div class="relative h-full w-full transition duration-300 group-hover:scale-[1.05]">
						<Img {src} {blurdata} alt="" />
					</div>
					<!--
						<img class="absolute w-full h-full object-cover" src={img.src} alt="" />
						-->
				</a>
			{/each}
		</div>
	</div>
</div>
