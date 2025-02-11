<script>
	import Img from '$lib/img/img.svelte';
	import SanityImg from '$lib/img/sanity-img.svelte';
	import Block from '$lib/ui/block.svelte';
	import { load_img } from '$lib/utils/load-img';
	import { get_lang, get_lang_state } from '../../lib/lang-state.svelte';

	const { data } = $props();

	const lang_state = get_lang_state();

	const lang = $derived(lang_state.lang);

	lang_state.set_href('/realisations', '/en/work');
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
	class="-mx-4 grid grid-cols-1 gap-0 px-1.5 sm:grid-cols-2 sm:gap-1.5 lg:grid-cols-3 xl:-mx-14 2xl:-mx-28"
>
	{#each data.res as item}
		<div class="mb-8">
			<a
				class="justify-between- group flex h-full flex-col"
				href="{lang == 'fr' ? '/realisations' : '/en/work'}/{item.slug[lang].current}"
			>
				<div class=" relative h-[10rem] w-full overflow-hidden" style="">
					<div
						class="relative h-full w-full transition duration-300 max-md:animate-[press_3s_infinite] md:group-hover:scale-[1.05]"
					>
						<SanityImg img={item.imgs[0]} alt={item.name[lang]} />
					</div>
					<!--
					<img class="hidden object-cover h-full" src={item.imgs[0].url} alt={item.name[lang]} />
					-->
				</div>
				<div class="-mx-1.5 mb-10 mt-2.5 px-4 lg:mb-8">
					<div class="font-semibold tracking-wide">{item.name[lang]}</div>
					<div class=" mt-6 text-sm">
						<Block text={item.top[lang]} spacing={1} class="space-y-1-" />
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>
