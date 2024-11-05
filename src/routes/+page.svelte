<script>
	import Img from '$lib/img/img.svelte';
	import Icon from '$lib/ui/icons/icon.svelte';
	import Logo from './logo.svelte';
	import { get_lang_state } from '../lib/lang-state.svelte';
	import { imgs } from './imgs';
	import { text } from './text';
	import TextReveal from './text-reveal.svelte';

	const lang_state = get_lang_state();
	lang_state.set_href('/', '/en');

	const lang = $derived(lang_state.lang);
	/*
	const imgs = [
		'https://cdn.sanity.io/images/1m8675a3/production/6361fcaf0dbc3e9758e8b0069f62fc9447795835-750x500.jpg',
		'https://cdn.sanity.io/images/1m8675a3/production/cc03911579951e0f6769994046deae1f32e74539-1920x1280.jpg',
		'https://cdn.sanity.io/images/1m8675a3/production/ec60fe0a5636e98b087abb069c04821a0e3d3554-750x563.jpg'
	];*/
</script>

<svelte:head>
	<title>
		Maison intégrale | {lang == 'fr' ? `Accueil` : `Home`}
	</title>
	<meta name="keywords" content="Construction,Maisons,Écologie,Éconénergie" />
</svelte:head>

<div
	class="flex xl:justify-center lg:items-center lg:gap-[5rem]- mt-4 md:mt-14 flex-col lg:flex-row lg:pb-16 gap-8"
>
	<div
		class="lg:ml-[1.5rem] lg:mb-[2.7rem] xl:ml-[1.5rem] xl:mb-[4.5rem] pointer-events-none bg-red-500- absolute- relative hidden lg:block size-[6rem] opacity-30- lg:opacity-100 lg:h-[16rem] xl:h-[20rem] lg:min-w-[14rem] xl:min-w-[20rem]"
	>
		<Logo />
	</div>
	<div
		class="mb-8 w-full lg:w-fit bg-green-500- mt-2 md:mt-0 mb-44 w-full flex- justify-center pl-[180px]-"
	>
		<div class="flex-col flex gap-8 md:gap-16">
			<div
				class="md:text-5xl pr-0 sm:pr-11 relative justify-end lg:justify-between flex sm:text-3xl text-3xl text-lime-950 !leading-[120%] font-semibold tracking-tight"
			>
				<div class="lg:hidden relative w-full flex justify-end mr-4 mb-2">
					<div
						class="absolute flex w-full h-full justify-end size-[20vw]- sm:size-[9rem] md:size-[12rem]"
					>
						<Logo />
					</div>
				</div>
				<div class="lg:hidden flex whitespace-nowrap flex-col justify-end items-end-">
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
				class="font-medium leading-5 md:text-xl sm:text-lg flex-col md:flex-row md:leading-7 flex items-start gap-4"
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

<div class="2xl:-mx-28 xl:-mx-14 -mx-4 relative z-0">
	<div class="px-1.5 relative">
		<div class="flex gap-1.5 w-full h-[460px]">
			{#each imgs as { src, blurdata }, i}
				<div class="relative w-full h-full">
					<Img {src} {blurdata} alt="" />
					<!--
					<img class="absolute w-full h-full object-cover" src={img.src} alt="" />
					-->
				</div>
			{/each}
		</div>
	</div>
</div>
<div class="flex xl:mx-0 -mx-2.5 justify-end font-medium my-2">
	<a
		href="/{lang == 'fr' ? 'realisations' : 'en/work'}"
		class=" px-3 py-1.5 bg-black/10 text-semibold"
	>
		{lang == 'fr' ? `Voir nos réalisations` : `See our work`}
	</a>
</div>

<div class="lg:mt-16 xl:mr-0 -mr-2.5 mt-12 mb-24 lg:mb-44">
	<div class="text-xl mb-5 font-semibold">
		{lang == 'fr' ? `Nos services` : `Our services`}
	</div>

	<div
		class="grid border-2 bg-white/10 ml-6 -mr-2- lg:ml-0 font-medium gap-1.5 leading-5 grid-rows-5 lg:grid-rows-1 lg:grid-cols-5"
	>
		{#each text.services as s}
			<div
				class="lg:border-r-2 lg:border-b-0 last:border-b-0 border-b-2 last:border-r-0 overflow-hidden relative xl:px-5 px-4 py-2.5 xl:py-4 pb-6 xl:pb-16 pr-12"
			>
				{s[lang]}
			</div>
		{/each}
	</div>
</div>

<div
	class="max-w-[1000px] lg:pb-24 items-center lg:items-start gap-24 lg:gap-0 m-auto flex-col lg:flex-row flex justify-between"
>
	<div class="flex max-w-[500px] flex-col gap-16 lg:gap-24">
		{#each text.comments as c}
			<div>
				<div class="text-lg leading-6 font-medium">{c.text}</div>
				<div class="mt-4 flex items-center gap-2 font-semibold text-black">
					<Icon name="user" class="text-xl opacity-40" />
					{c.from}
				</div>
			</div>
		{/each}
	</div>

	<div
		class="grid text-sm font-medium bg-white/10 max-w-[400px] border-2 px-4 py-4 items-center grid-cols-[1.2fr_2fr] flex-col gap-[1rem_2rem]"
	>
		<a target="_blank" href="https://prixdomus.ca/">
			<img class="object-cover object-[50%_45%] h-[70px] w-full" src="/domus.png" />
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
			<img class="object-contain max-h-[60px]" src="/novo.png" />
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
		<div class="col-span-2 text-right">RBQ 5683-285</div>
	</div>
</div>

{#snippet divider()}
	<div class="col-span-2 border-b-2"></div>
{/snippet}
