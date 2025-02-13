<script>
	import { houses } from '$lib/houses';
	import SanityImg from '$lib/img/sanity-img.svelte';
	import { get_lang_state } from '../../lib/lang-state.svelte';

	const { data } = $props();

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
	const fr = $derived(lang == 'fr');

	lang_state.set_href('/realisations', '/en/work');

	houses.list.forEach((h) => {
		h.ref = data.res.find((hh) => hh.slug.fr.current == h.slug.fr);
	});
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
	{#each houses.list as h}
		<div class="mb-8">
			<a class="justify-between- group flex h-full flex-col" href={h.href[lang]}>
				<div class=" relative h-[10rem] w-full overflow-hidden" style="">
					<div
						class="relative h-full w-full transition duration-300 max-md:animate-[press_3s_infinite] md:group-hover:scale-[1.05]"
					>
						{#if h.ref}
							<SanityImg img={h?.ref?.imgs[0]} alt={h.name[lang]} />
						{/if}
						<!-- <Img src="/images/{h.slug.fr}/0" alt={h.name[lang]} /> -->
					</div>
					<!--
					<img class="hidden object-cover h-full" src={item.imgs[0].url} alt={item.name[lang]} />
					-->
				</div>
				<div class="-mx-1.5 mt-2.5 mb-10 px-4 lg:mb-8">
					<div class="text-head !text-lg font-semibold tracking-wide uppercase">{h.name[lang]}</div>
					<div class=" text-block mt-6">
						<div class="grid grid-cols-2 gap-x-6">
							{#if h.location}
								<div>{fr ? 'lieu' : 'location'}</div>
								<div>
									{h.location[lang]}
								</div>
							{/if}
							{#if h.designer}
								<div>{fr ? 'conception' : 'design'}</div>
								<div>
									{h.designer[lang]}
								</div>
							{/if}
							{#if h.client}
								<div>client</div>
								<div>
									{h.client[lang]}
								</div>
							{/if}
						</div>
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>
