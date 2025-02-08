<script>
	import { get_lang_state } from '$lib/lang-state.svelte';

	import Logo from './logo.svelte';
	import WordCarousel from './word-carousel.svelte';

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
</script>

<div
	class="hidden space-y-0.5 font-medium uppercase text-lime-800/60
	lg:block"
>
	<div>
		{#if lang == 'fr'}Entrepreneur général{:else}General contractor{/if}
	</div>
	<div>Laurentides, QC, Canada</div>
</div>

<div
	class="relative mb-16 flex flex-col justify-between gap-24
	md:mb-24 md:mt-16 md:flex-row md:items-center"
>
	<div
		class="flex-none flex-col items-start gap-4 space-y-4 font-medium
		md:flex-row md:space-y-12"
	>
		<div class="whitespace-nowrap">
			<div class="text-4xl max-md:hidden">
				<span>{lang == 'fr' ? `un physicien` : `a physicist`}</span>
				<span class="mx-2">+</span>
				<span>{lang == 'fr' ? `une designer` : `a designer`}</span>
			</div>

			<div
				class="flex items-center justify-between
				md:hidden"
			>
				<div class="max-lg:text-3xl">
					<div>{lang == 'fr' ? `un physicien` : `a physicist`}</div>
					<div>+ {lang == 'fr' ? `une designer` : `a designer`}</div>
				</div>
				<div class="flex w-full max-w-32 items-start justify-start px-3 pt-3 md:max-w-[20vw]">
					<div class="bg-black/10- -w-[260px] relative w-full" style="aspect-ratio: 22/32;">
						<Logo />
					</div>
				</div>
			</div>
		</div>
		<div class="">
			<div
				class="{lang == 'fr'
					? 'text-[4.9vw]'
					: 'text-[5.3vw]'} flex flex-col leading-[136%] text-black/60
				sm:block sm:text-xl
				 lg:text-3xl
				xl:text-4xl
			"
			>
				{#if lang == 'fr'}
					<div>qui unissent leurs talents pour <WordCarousel /></div>

					<span>des maisons écoénergétiques</span> de haute qualité,<br />
					<span class="self-end text-right">conçues pour un avenir durable.</span>
				{:else}
					<div>who unite their talents to <WordCarousel /></div>
					high-quality, energy-efficient homes,<br />
					<span>designed for a sustainable future.</span>
				{/if}
			</div>
		</div>
	</div>
	<div
		class=" flex w-[calc(20vw)] items-start justify-start
	max-md:hidden"
	>
		<div class=" relative w-[260px]" style="aspect-ratio: 22/32;">
			<Logo />
		</div>
	</div>
</div>

<!-- <div
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
</div> -->
