<script>
	import Img from '$lib/img.svelte';
	import { get_lang_state } from '$lib/lang-state.svelte';
	import Card from '../+/card.svelte';

	const n_imgs = 1;

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
	const fr = $derived(lang == 'fr');

	lang_state.set_href('/realisations/maison-monette', '/en/work/house-monette');
</script>

<Card
	title={fr ? 'MAISON MONETTE' : 'HOUSE MONETTE'}
	location="Val-David"
	designer="Maison Intégrale"
>
	{#snippet meta()}
		{#if fr}
			Plain-pied haut de gamme, cour en bord de rue.
			<br />
			<br />
			2 652 pi2 avec le garage
		{:else}
			Upmarket bungalow, street side yard.
			<br />
			<br />
			2652 ft 2 with garage
		{/if}
	{/snippet}
	<div class="max-w-120">
		{#if fr}
			Ce design exclusif, inspiré de l’esquisse du propriétaire, propose un aménagement fonctionnel
			et élégant. L’espace a été pensé pour accueillir deux chambres et deux bureaux, situés de part
			et d’autre du bâtiment. Le cœur du projet a été dédié à une aire commune multifonctionnelle,
			où salon, salle à manger et cuisine à aire ouverte s’intègrent harmonieusement. Les chambres
			sont orientées côté cour, tandis que les bureaux bénéficient d’une vue sur le jardin, séparés
			par une cloison translucide.
			<br /><br />
			Le bâtiment repose sur une dalle chauffante, garantissant un confort thermique optimal. La façade
			vitrée s’ouvre sur un parc qui sépare le bâtiment de la rue, exploitant pleinement la beauté des
			arbres matures, la roche précambrienne et les reliefs naturels du terrain. Les teintes dominantes,
			le noir et l’acajou, s’harmonisent parfaitement avec l’environnement, créant une atmosphère de
			confort luxueux.
		{:else}
			This exclusive design, inspired by the owner's sketch, features a functional and elegant
			layout. The space has been designed to accommodate two bedrooms and two offices, placed on
			opposite sides of the building. The central area has been dedicated to a multifunctional
			common space, where the living room, dining room, and open-plan kitchen blend seamlessly. The
			bedrooms are located on the courtyard side, while the offices overlook the garden, separated
			by a translucent partition.
			<br /><br />
			The building rests on a heated slab, ensuring optimal thermal comfort. The glazed façade opens
			onto a park that separates the building from the street, making full use of mature trees, Precambrian
			rock, and the natural contours of the land. The dominant colors, black and mahogany, blend perfectly
			with the surroundings, creating an atmosphere of luxurious comfort.
		{/if}
	</div>
</Card>
<Img src="/maison-monette/0.jpg" alt="maison-monette-1" />

<div class="col-span-full grid gap-12 lg:grid-cols-3">
	<Img src="/maison-monette/3.jpg" alt="maison-monette-1" />
	<Img src="/maison-monette/6.jpg" alt="maison-monette-1" />
	<Img src="/maison-monette/5.jpg" alt="maison-monette-1" />
</div>
