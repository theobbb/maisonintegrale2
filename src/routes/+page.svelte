<script>
	import { get_lang_state } from '../lib/lang-state.svelte';
	import Credentials from './+/credentials.svelte';
	import Hero from './+/hero.svelte';
	import { imgs, imgs2 } from './+/imgs';
	import Imgs from './+/imgs.svelte';
	import Services from './+/services.svelte';
	import Testimonials from './+/testimonials.svelte';

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

<Hero />
<div class="-mx-2.5 my-1.5 flex justify-end font-medium md:mb-6 xl:mx-0">
	<a
		href="/{lang == 'fr' ? 'realisations' : 'en/work'}"
		class="border-2 bg-white/20 px-3 py-1.5 text-sm font-bold uppercase tracking-wide transition hover:bg-black/10"
	>
		{lang == 'fr' ? `Voir nos réalisations` : `See our work`}
	</a>
</div>

<Imgs {imgs} />

<Services />

<Imgs imgs={imgs2} />

<div
	class="mx-auto mt-24 flex max-w-[70rem] flex-col items-center justify-between gap-24 md:mb-44 md:mt-36 lg:flex-row lg:items-start lg:gap-24"
>
	<Credentials />
	<div class="max-w-[31rem] space-y-16 lg:space-y-24">
		<Testimonials />
	</div>
</div>
