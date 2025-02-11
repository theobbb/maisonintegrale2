<script>
	import Img from '$lib/img.svelte';
	import { get_lang_state } from '$lib/lang-state.svelte';
	import Card from '../+/card.svelte';

	const n_imgs = 1;

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
	const fr = $derived(lang == 'fr');

	lang_state.set_href('/realisations/maison-de-campagne', '/en/work/country-house');
</script>

<Card
	title={fr ? 'maison de campagne' : 'COUNTRY HOUSE'}
	location="Sainte-Adèle"
	designer="Maison Intégrale"
>
	{#snippet meta()}
		{#if fr}
			Rdc 1000 ft 2

			<br />
			Étage 1 – 1000 pi2
			<br />
			Étage 2 – 700 pi2 d’atelier sous combles
		{:else}
			Rdc 1000 ft 2

			<br />
			Floor 1-1000 ft 2
			<br />
			Floor 2-700 ft 2 of attic workshop
		{/if}
	{/snippet}
	<div class="max-w-120">
		{#if fr}
			Cette rénovation transforme un petit bungalow en un véritable logis familial tout en intégrant
			un espace dédié au travail autonome. L’aménagement optimisé de l’intérieur offre un confort
			moderne tout en préservant le charme d’origine.
		{:else}
			This renovation transforms a small bungalow into a true family home while incorporating a
			space dedicated to self-employed work. The optimized interior layout offers modern comfort
			while preserving the original charm.
		{/if}
	</div>
</Card>
<Img src="/maison-de-campagne/0.jpg" alt="atelier-8" />
<div class="col-span-full grid gap-12 lg:grid-cols-3">
	<Img src="/maison-de-campagne/1.jpg" alt="atelier-8" />
	<Img src="/maison-de-campagne/2.jpg" alt="atelier-8" />
	<Img src="/maison-de-campagne/3.jpg" alt="atelier-8" />
</div>
