<script>
	import { get_lang, get_lang_state } from '../../lib/lang-state.svelte';

	const { data } = $props();

	const lang_state = get_lang_state();

	const lang = $derived(lang_state.lang);

	lang_state.set_href('/realisations', '/en/work');

	console.log('data', data);
</script>

<div
	class=" grid lg:grid-cols-3 gap-0 sm:gap-1.5 sm:grid-cols-2 2xl:-mx-28 xl:-mx-14 -mx-4 grid-cols-1 px-1.5"
>
	{#each data.res as item}
		<div class="mb-8">
			<a
				class="flex flex-col justify-between h-full"
				href="{lang == 'fr' ? '/realisations' : '/en/work'}/{item.slug[lang].current}"
			>
				<div class="h-full">
					<img class="object-cover h-full" src={item.imgs[0].url} alt={item.name[lang]} />
				</div>
				<div class="mt-1 -mx-1.5 2xl:px-28 px-4 xl:px-14 tracking-[wide font-semibold">
					{item.name[lang]}
				</div>
			</a>
		</div>
	{/each}
</div>
