<script>
	import Img from '$lib/img.svelte';
	import { get_lang_state } from '$lib/lang-state.svelte';
	import Card from '../+/card.svelte';

	const n_imgs = 1;

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
	const fr = $derived(lang == 'fr');

	lang_state.set_href('/realisations/maisonnette', '/en/work/maisonnette');
</script>

<Card title="maisonette" location="Sainte-Adèle" designer="Maison Intégrale">
	{#snippet meta()}
		{#if fr}
			Rdc en forêt, 32 pi2
		{:else}
			Forest floor, 32 ft 2
		{/if}
	{/snippet}
	<div class="max-w-120">
		{#if fr}
			Construction élaborée à partir d’un dessin de livre pour enfants.
			<br /><br />
			«Maison de sorcière» conçu d’après un dessin tiré d’un des livres pour la jeunesse de Marisol Sarrazin.
			L’approche consistait à transposer dans la réalité un dessin libre en adaptant les matériaux et
			le design au style de l’artiste. Conception unique, une grande fierté pour notre entreprise, mais
			une efficacité énergétique discutable.
		{:else}
			Construction developed from a children’s book drawing.
			<br /><br />
			“Witch’s House” designed from a drawing from one of Marisol Sarrazin’s books for youth. The approach
			was to transpose a free design into reality by adapting materials and design to the style of the
			artist. Unique design, a great pride for our company, but questionable energy efficiency.
		{/if}
	</div>
</Card>
<Img src="/maisonnette/0.jpg" alt="atelier-8" />
<Img src="/maisonnette/1.jpg" alt="atelier-8" />
<Img src="/maisonnette/2.jpg" alt="atelier-8" />
<Img src="/maisonnette/3.jpg" alt="atelier-8" />
<Img src="/maisonnette/4.jpg" alt="atelier-8" />
<Img src="/maisonnette/5.jpg" alt="atelier-8" />
