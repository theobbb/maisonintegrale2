<script>
	import { get_lang_state } from '../../lib/lang-state.svelte';
	import { text } from './text';
	import ModelViewer from './model-viewer.svelte';

	const lang_state = get_lang_state();

	lang_state.set_href('/a-propos', '/en/about');

	const lang = $derived(lang_state.lang);
</script>

{#snippet card(e)}
	<div class=" uppercase text-xl font-semibold">{e.name}</div>
	<div class="mb-6 lg:text">{e.title[lang]}</div>
	<div class="pl-6 lg:text text-black">
		{#each e.body[lang].split('\n') as block}
			<p class="mb-4">{block}</p>
		{/each}
	</div>
{/snippet}

{#snippet card2(e)}
	<div class="mb-6 border-b-2 border-black/5 pb-0.5 uppercase text-xl font-semibold">
		{e.title[lang]}
	</div>
	<div class="lg:text text-black">
		{#each e.body[lang].split('\n') as block}
			<p class="mb-4">{block}</p>
		{/each}
	</div>
{/snippet}

<div
	class="mt-8 pb-44 lg:mt-14 xl:mt-24 lg:px-14 xl:px-20 whitespace-pre-line gap-10 lg:gap-[3rem_8rem] grid grid-cols-1 lg:grid-cols-2 grid-rows-[auto_1fr]"
>
	<div class="text-2xl col-span-full">{lang == 'fr' ? `Équipe` : `Team`}</div>

	<div class="max-w-[500px]">
		{@render card({ ...text.team.marc, name: 'Marc Baillargeon' })}
	</div>
	<div class="max-w-[500px]">
		{@render card({ ...text.team.marisol, name: 'Marisol Sarrazin' })}
	</div>

	<div class="mt-44 mb-44 col-span-full max-w-[900px]">
		{@render card2(text.valeur)}
	</div>
	<div class="max-w-[500px]">
		{@render card2(text.demarche1)}
	</div>
	<div class="max-w-[500px]">
		{@render card2(text.demarche2)}
	</div>
	<div class="col-span-full mt-44 max-w-[600px]">
		{@render card2(text.homo)}
	</div>
</div>

<ModelViewer />
