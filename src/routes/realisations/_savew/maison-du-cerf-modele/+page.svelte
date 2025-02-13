<script>
	import Img from '$lib/img.svelte';
	import { get_lang_state } from '$lib/lang-state.svelte';
	import Card from '../+/card.svelte';

	const n_imgs = 1;

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
	const fr = $derived(lang == 'fr');
</script>

<Card
	title={fr ? 'MAISON DU CERF MODÈLE' : 'DEER HOUSE MODEL'}
	location="Val-David"
	designer="Maison Intégrale"
>
	{#snippet meta()}
		{#if fr}
			Parc intégrée en copropriété

			<br />
			Rdc 1479 pi2
		{:else}
			Integrated park in co-ownership
			<br />
			DRC 1479 ft 2
		{/if}
	{/snippet}
	<div class="max-w-120">
		{#if fr}
			Géomorphologie des lieux assez particulière. Le design choisi utilise l’orientation du
			bâtiment et l’environnement arboré au maximum, créant un effet d’immersion en pleine nature, à
			proximité d’un rond-point. Création du modèle et construction générale par Maison Intégrale.
			Deux chambres et grand séjour ouvert sur la forêt.
		{:else}
			Geomorphology of places quite particular. The chosen design uses the orientation of the
			building and the environment raised to the maximum, creating an effect of immersion in full
			nature, close to a roundabout. Model creation and general construction by Maison Intégrale.
			Two bedrooms and large living room open on the forest.
		{/if}
	</div>
</Card>
<Img src="/maison-du-cerf-modele/0.jpg" alt="atelier-8" />
<Img src="/maison-du-cerf-modele/1.jpg" alt="atelier-8" />
<Img src="/maison-du-cerf-modele/3.jpg" alt="atelier-8" />
