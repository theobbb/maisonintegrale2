<script>
	import { get_lang_state } from '../../lib/lang-state.svelte';
	import { text } from './text';
	import ModelViewer from './model-viewer.svelte';

	const lang_state = get_lang_state();

	lang_state.set_href('/a-propos', '/en/about');

	const lang = $derived(lang_state.lang);
</script>

<svelte:head>
	<title>
		Maison Intégrale | {lang == 'fr' ? `À propos` : `About`}
	</title>
	<meta
		name="description"
		content={lang == 'fr'
			? `Un physicien + une designer qui unissent leurs talents | Découvrez les valeurs et la démarche de Maison Intégrale.`
			: `A physicist + a designer combining their talents | Discover the values and approach of Maison Intégrale.`}
	/>
</svelte:head>

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
	<div class="mb-6 border-b-2- border-black/5 pb-0.5 uppercase text-xl font-semibold">
		{e.title[lang]}
	</div>
	<div class="lg:text text-black">
		{#each e.body[lang].split('\n') as block}
			<p class="mb-4">{block}</p>
		{/each}
	</div>
{/snippet}

<div
	class="mt-8 pb-44 lg:mt-14 xl:mt-24 lg:px-14 xl:px-20 whitespace-pre-line gap-10 lg:gap-[0rem_8rem] grid grid-cols-1 lg:grid-cols-2 grid-rows-[auto_1fr]"
>
	<div class="text-xl font-medium col-span-full"></div>

	<div class="-mx-20 mb-12 col-span-full text-lime-700/80 text-4xl font-semibold">Équipe</div>
	<div class="max-w-[500px] border-l-2 border-lime-700/20">
		{@render card({ ...text.team.marc, name: 'Marc Baillargeon' })}
	</div>
	<div class="max-w-[500px]">
		{@render card({ ...text.team.marisol, name: 'Marisol Sarrazin' })}
	</div>

	<div class="-mx-20 mb-12 col-span-full text-lime-700/80 text-5xl font-semibold">Démarche</div>

	<div class="mt-44 mb-44 col-span-full max-w-[900px]">
		{@render card2(text.valeur)}
	</div>
	<div class="max-w-[500px]">
		{@render card2(text.demarche1)}
	</div>
	<div class="max-w-[500px]">
		{@render card2(text.demarche2)}
	</div>
</div>

<ModelViewer />
