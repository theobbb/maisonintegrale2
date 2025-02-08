<script>
	import Img from '$lib/img/img.svelte';
	import Icon from '$lib/ui/icons/icon.svelte';
	import Logo from './+/logo.svelte';
	import { get_lang_state } from '../lib/lang-state.svelte';
	import { imgs } from './+/imgs';
	import { text } from './+/text';
	import TextReveal from './+/word-carousel.svelte';
	import { text as text_a_propos } from './a-propos/text';

	const lang_state = get_lang_state();
	lang_state.set_href('/', '/en');

	const lang = $derived(lang_state.lang);
</script>

<svelte:head>
	<title>
		Maison Intégrale | {lang == 'fr' ? `Accueil` : `Home`}
	</title>
	<meta
		name="description"
		content={lang == 'fr'
			? `Construction de maisons écoénergétiques de haute qualité. Découvrez l'harmonie entre science et art proposé par Maison Intégrale.`
			: `High-quality, energy-efficient home construction. Discover the harmony of science and art offered by Maison Intégrale.`}
	/>
</svelte:head>

<div
	class="lg:gap-[5rem]- mt-4 flex flex-col gap-8 md:mt-14 lg:flex-row lg:items-center lg:pb-16 xl:justify-center"
>
	<div
		class="bg-red-500- absolute- opacity-30- pointer-events-none relative hidden size-[6rem] lg:mb-[2.7rem] lg:ml-[1.5rem] lg:block lg:h-[16rem] lg:min-w-[14rem] lg:opacity-100 xl:mb-[4.5rem] xl:ml-[1.5rem] xl:h-[20rem] xl:min-w-[20rem]"
	>
		<Logo />
	</div>
	<div
		class="bg-green-500- flex- pl-[180px]- mb-44 mb-8 mt-2 w-full w-full justify-center md:mt-0 lg:w-fit"
	>
		<div class="flex flex-col gap-8 md:gap-16">
			<div
				class="relative flex justify-end pr-0 text-3xl font-semibold !leading-[120%] tracking-tight text-lime-950 sm:pr-11 sm:text-3xl md:text-5xl lg:justify-between"
			>
				<div class="relative mb-2 mr-4 flex w-full justify-end lg:hidden">
					<div
						class="size-[20vw]- absolute flex h-full w-full justify-end sm:size-[9rem] md:size-[12rem]"
					>
						<Logo />
					</div>
				</div>
				<div class="items-end- flex flex-col justify-end whitespace-nowrap lg:hidden">
					<div>
						<TextReveal text={lang == 'fr' ? `L'harmonie` : `The harmony`} />
					</div>
					<div>
						<TextReveal
							delay={200}
							text={lang == 'fr' ? `entre science et art` : `between science`}
						/>
					</div>
					<div>
						<TextReveal delay={400} text={lang == 'fr' ? `dans chaque` : `and art in each`} />
					</div>
					<div class="self-end">
						<TextReveal delay={600} text={lang == 'fr' ? `construction` : `construction`} />
					</div>
				</div>
				<div class="hidden lg:block">
					<div>
						<TextReveal
							text={lang == 'fr'
								? `L'harmonie entre science et art `
								: `The harmony between science and art`}
						/>
					</div>
					<div>
						<TextReveal
							delay={600}
							text={lang == 'fr' ? `dans chaque construction` : `in each construction`}
						/>
					</div>
				</div>
			</div>
			<div
				class="flex flex-col items-start gap-4 font-medium leading-5 sm:text-lg md:flex-row md:text-xl md:leading-7"
			>
				<div class="whitespace-nowrap">
					<span>{lang == 'fr' ? `un physicien` : `a physicist`}</span>
					<span class="mx-2">+</span>
					<span>{lang == 'fr' ? `une designer` : `a designer`}</span>
				</div>
				<div class="">
					<div class="max-w-[420px]">
						{lang == 'fr'
							? `qui unissent leurs talents pour créer des maisons écoénergétiques de haute qualité, conçues pour un avenir durable.`
							: `who unite their talents to create high-quality, energy-efficient homes, designed for a sustainable future.`}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="relative z-0 -mx-4 xl:-mx-14 2xl:-mx-28">
	<div class="relative px-1.5">
		<div class="flex h-[460px] w-full gap-1.5">
			{#each imgs as { src, blurdata }, i}
				<div class="relative h-full w-full">
					<Img {src} {blurdata} alt="" />
					<!--
					<img class="absolute w-full h-full object-cover" src={img.src} alt="" />
					-->
				</div>
			{/each}
		</div>
	</div>
</div>
<div class="-mx-2.5 my-2 flex justify-end font-medium xl:mx-0">
	<a
		href="/{lang == 'fr' ? 'realisations' : 'en/work'}"
		class=" text-semibold bg-black/10 px-3 py-1.5"
	>
		{lang == 'fr' ? `Voir nos réalisations` : `See our work`}
	</a>
</div>

<div class="-mr-2.5 mb-24 mt-12 lg:mb-44 lg:mt-16 xl:mr-0">
	<div class="mb-5 text-xl font-semibold">
		{lang == 'fr' ? `Nos services` : `Our services`}
	</div>

	<div
		class="-mr-2- ml-6 grid grid-rows-5 gap-1.5 border-2 bg-white/10 font-medium leading-5 lg:ml-0 lg:grid-cols-5 lg:grid-rows-1"
	>
		{#each text.services as s}
			<div
				class="relative overflow-hidden border-b-2 px-4 py-2.5 pb-6 pr-12 last:border-b-0 last:border-r-0 lg:border-b-0 lg:border-r-2 xl:px-5 xl:py-4 xl:pb-16"
			>
				{s[lang]}
			</div>
		{/each}
	</div>
</div>

<div
	class="m-auto flex max-w-[1000px] flex-col items-center justify-between gap-24 lg:flex-row lg:items-start lg:gap-0 lg:pb-24"
>
	<div class="flex max-w-[500px] flex-col gap-16 lg:gap-24">
		{#each text.comments as c}
			<div>
				<div class="text-lg font-medium leading-6">{c.text}</div>
				<div class="mt-4 flex items-center gap-2 font-semibold text-black">
					<Icon name="user" class="text-xl opacity-40" />
					{c.from}
				</div>
			</div>
		{/each}
	</div>

	<div
		class="grid max-w-[400px] grid-cols-[1.2fr_2fr] flex-col items-center gap-[1rem_2rem] border-2 bg-white/10 px-4 py-4 text-sm font-medium"
	>
		<a target="_blank" href="https://prixdomus.ca/">
			<img class="h-[70px] w-full object-cover object-[50%_45%]" src="/domus.png" />
		</a>
		<div>
			<div>
				{lang == 'fr' ? `Finaliste 2019 - Prix Domus` : `2019 Finalist - Domus price`}
			</div>
			<div>
				{lang == 'fr' ? `Catégorie développement durable.` : ` Sustainable Development Category.`}
			</div>
		</div>
		{@render divider()}
		<a
			href="https://transitionenergetique.gouv.qc.ca/residentiel/programmes/novoclimat"
			target="_blank"
		>
			<img class="max-h-[60px] object-contain" src="/novo.png" />
		</a>
		<div>
			{lang == 'fr'
				? `Nos constructions respectent les exigences techniques du programme Novoclimat.`
				: `Our constructions meet the technical requirements of the Novoclimat program.`}
		</div>
		{@render divider()}
		<a href="https://www.garantiegcr.com/fr/" target="_blank">
			<img class="max-h-[50px] object-contain" src="/garantie.png" />
		</a>
		<div>
			{lang == 'fr'
				? `Nous sommes accrédités Garantie construction résidentielle.`
				: `We are accredited under the Residential Construction Guarantee.`}
		</div>
		{@render divider()}
		<div class="col-span-full max-w-[600px]">
			<div class="mb-4 pb-0.5 text-lg font-semibold uppercase">
				{text_a_propos.homo.title[lang]}
			</div>
			<div class="lg:text">
				{#each text_a_propos.homo.body[lang].split('\n') as block}
					<p class="mb-4">{block}</p>
				{/each}
			</div>
		</div>
		{@render divider()}
		<div class="col-span-2 text-right">RBQ 5683-285</div>
	</div>
</div>

{#snippet divider()}
	<div class="col-span-2 border-b-2"></div>
{/snippet}
