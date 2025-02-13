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
	title={fr ? 'MAISON DU CERF 2' : 'HOUSE OF THE DEER 2'}
	location="Val-David"
	designer="client"
>
	{#snippet meta()}
		{#if fr}
			Rdc 744 pi2
			<br />
			Étage 710 pi2
		{:else}
			Ground floor 744 ft 2
			<br />
			Floor 710 ft 2
		{/if}
	{/snippet}
	<div class="max-w-120">
		{#if fr}
			En forêt, haut de gamme, design exclusif, sur esquisse du client.

			<br /><br />
			Maison unifamiliale dont le plan initial a été conçu par le client et optimisé par Maison intégrale.
			Design architectural contemporain évolutif. Beaucoup de lumière, fenêtres donnant sur les plus
			beaux points de vue de cette maison en hauteur.
		{:else}
			In the forest, upscale, exclusive design, on the client’s sketch
			<br /><br />
			Single-family home whose initial plan was designed by the client and optimized by Maison Integrale.
			Contemporary architectural evolutionary design. Lots of light, windows overlooking the most beautiful
			views of this house in height.
		{/if}
	</div>
</Card>
<Img src="/maison-du-cerf-2/0.jpg" alt="maison-du-cerf-8" class="saturate-50" />
<div class="space-y-12">
	<Img src="/maison-du-cerf-2/1.jpg" alt="maison-du-cerf-8" />
</div>

<Img src="/maison-du-cerf-2/2.jpg" alt="maison-du-cerf-8" />
<Img src="/maison-du-cerf-2/3.jpg" alt="maison-du-cerf-8" />
<Img src="/maison-du-cerf-2/4.jpg" alt="maison-du-cerf-8" />
