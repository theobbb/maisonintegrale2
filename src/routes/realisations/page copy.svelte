<script>
	import Img from '$lib/img/img.svelte';
	import SanityImg from '$lib/img/sanity-img.svelte';
	import { load_img } from '$lib/utils/load-img';
	import { get_lang, get_lang_state } from '../../lib/lang-state.svelte';

	const { data } = $props();

	const lang_state = get_lang_state();

	const lang = $derived(lang_state.lang);

	lang_state.set_href('/realisations', '/en/work');

	/*
	let reveal = $state(false);
	$effect(() => {
		load_thumbnails();
	});

	async function load_thumbnails() {
		for (const item of data.res) {
			await load_img(item.imgs[0].asset.metadata.lqip);
		}
		reveal = true;
		console.log('reveal', reveal);
	}*/
</script>

<svelte:head>
	<title>
		Maison Intégrale | {lang == 'fr' ? `Réalisations` : `Work`}
	</title>

	<meta
		name="description"
		content={lang == 'fr'
			? `Explorez les réalisations de Maison Intégrale, où chaque projet reflète notre engagement technique et artistique dans son intégration à l'environnement.`
			: `Explore the creations of Maison Intégrale, where each project reflects our technical and artistic commitment to environmental integration.`}
	/>
</svelte:head>

<div
	class="grid lg:grid-cols-3 gap-0 sm:gap-1.5 sm:grid-cols-2 2xl:-mx-28 xl:-mx-14 -mx-4 grid-cols-1 px-1.5"
>
	{#each data.res as item}
		<div class="mb-8">
			<a
				class="flex flex-col justify-between h-full"
				href="{lang == 'fr' ? '/realisations' : '/en/work'}/{item.slug[lang].current}"
			>
				<div class="h-full min-h-[400px] w-full relative" style="">
					<SanityImg img={item.imgs[0]} alt={item.name[lang]} />
					<!--
					<img class="hidden object-cover h-full" src={item.imgs[0].url} alt={item.name[lang]} />
					-->
				</div>
				<div class="mt-1.5 -mx-1.5 2xl:px-28 px-4 xl:px-14 tracking-[wide font-semibold">
					{item.name[lang]}
				</div>
			</a>
		</div>
	{/each}
</div>
