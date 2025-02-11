<script>
	import Img from '$lib/img.svelte';
	import { get_lang_state } from '$lib/lang-state.svelte';
	import Card from '../+/card.svelte';

	const n_imgs = 1;

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
	const fr = $derived(lang == 'fr');

	lang_state.set_href('/realisations/atelier', '/en/work/atelier');
</script>

<Card
	title="atelier"
	location="Sainte-Adèle"
	designer="Maison Intégrale"
	client="Stéphane Rousseau"
	nav={{ prev: '', next: '' }}
>
	{#snippet meta()}
		{#if fr}
			En montagne, sur une falaise
			<br />
			<br />
			Rdc 2130 pi2
			<br />
			Mezzanine 1320 pi2
		{:else}
			In the mountains, on a cliff
			<br />
			<br />
			DRC 2130 ft 2
			<br />
			Mezzanine 1320 pi2
		{/if}
	{/snippet}
	<div class="max-w-120">
		{#if fr}
			Appentis et garages adjacents, architecture exclusive, <br />incorporée au bâti existant.
			<br /><br />
			Marisol et l’artiste résident ont choisi de réaliser une vaste structure ouverte sur le lac et
			orienté pour obtenir un maximum de lumière naturelle. La forme générale rappelle les beaux volumes
			d’une grange. Le revêtement extérieur en cèdre s’intègre bien à la forêt. Il évoque les couleurs
			des anciens fenils qui, avec le temps, semblent se fondre à la nature environnante et leur dispense
			un charme irremplaçable.
			<br /><br />
			Une mezzanine sur l’un des côtés, au-dessus du garage, crée un second espace avec vu en plongé
			sur l’atelier et le lac. Les plans ont été réalisés par Mu architecture.
		{:else}
			Adjoining garages and garages, exclusive architecture, incorporated into the existing
			building.
			<br /><br />
			Marisol and the resident artist have chosen to create a vast structure open on the lake and oriented
			to obtain a maximum of natural light. The general shape recalls the beautiful volumes of a barn.
			The cedar cladding fits well in the forest. It evokes the colors of ancient barns that, over time,
			seem to blend with the surrounding nature and provide them with an irreplaceable charm.
			<br /><br />
			A mezzanine on one side, above the garage, creates a second space with a view of the workshop and
			the lake. The plans were made by Mu Architecture.
		{/if}
	</div>
</Card>
<Img src="/atelier/8.jpg" alt="atelier-8" />
<Img src="/atelier/3.jpg" alt="atelier-3" class="justify-start-" />

<Img
	src="/atelier/4.jpg"
	alt="atelier-4"
	class="
	 max-sm:aspect-square max-sm:[&_img]:min-h-full max-sm:[&_img]:min-w-full max-sm:[&_img]:object-cover"
/>
<Img src="/atelier/7.jpg" alt="atelier-7" class="justify-start- col-span-full- lg:ml-12- " />
<Img src="/atelier/5.jpg" alt="atelier-5" class="" />
<Img
	src="/atelier/0.jpg"
	alt="atelier-0"
	class="col-span-full max-sm:aspect-[0.7]
	 lg:px-44 max-sm:[&_img]:min-h-full max-sm:[&_img]:min-w-full max-sm:[&_img]:object-cover"
/>
<Img src="/atelier/16.jpg" alt="atelier-16" class="" />
<Img src="/atelier/17.jpg" alt="atelier-17" class="" />
<Img src="/atelier/14.jpg" alt="atelier-14" />
<Img src="/atelier/10.jpg" alt="atelier-10" />
<Img src="/atelier/9.jpg" alt="atelier-9" class="brightness-90" />

<Img src="/atelier/12.jpg" alt="atelier-12" />
