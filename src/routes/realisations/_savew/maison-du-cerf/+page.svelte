<script>
	import Img from '$lib/img.svelte';
	import { get_lang_state } from '$lib/lang-state.svelte';
	import Card from '../+/card.svelte';

	const n_imgs = 1;

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
	const fr = $derived(lang == 'fr');
</script>

<Card title="MAISON DU CERF" location="Val-David" designer="client">
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
			Le client, un couple de restaurateurs, nous a fourni un plan initial pour une maison
			unifamiliale, que nous avons retravaillé avec eux. L’un des éléments clés à respecter était
			l’intégration d’un toit plat servant de terrasse. À l’arrière, le fond de l’abri d’auto devait
			s’ouvrir sur la forêt, comme une grande fenêtre naturelle. Quant à l’espace cuisine, il devait
			allier fonctionnalité pour un chef qui y travaille au quotidien et esthétisme pour
			s’harmoniser avec le reste de la propriété.
			<br /><br />
			L’implantation de la maison en pleine forêt a nécessité une approche novatrice. L’objectif était
			d’optimiser l’orientation générale du bâti pour l’ouvrir au sud et maximiser l’ensoleillement,
			tout en l’intégrant parfaitement à son environnement naturel. La conception devait également anticiper
			l’ajout éventuel d’un atelier de cuisine, sans compromettre l’équilibre visuel de l’ensemble. En
			touche finale, un escalier en acier, conçu sur mesure, vient compléter le projet avec élégance.
		{:else}
			The clients, a couple of restaurateurs, provided us with an initial plan for a single-family
			home, which we reworked with them. One of the key elements to respect was the integration of a
			flat roof that would serve as a terrace. At the back, the end of the carport had to open onto
			the forest, like a large natural window. As for the kitchen space, it needed to combine
			functionality for a chef who works there daily with aesthetics that harmonize with the rest of
			the property.
			<br /><br />
			Building the house in the heart of the forest required an innovative approach. The goal was to
			optimize the overall orientation of the structure to open it to the south and maximize sunlight
			while blending seamlessly with its natural surroundings. The design also had to anticipate the
			possible addition of a kitchen workshop without compromising the visual balance of the whole. As
			a finishing touch, a custom-made steel staircase elegantly completes the project.
		{/if}
	</div>
</Card>
<div class="space-y-24">
	<Img src="/maison-du-cerf/1.jpg" alt="atelier-8" />
	<Img src="/maison-du-cerf/2.jpg" alt="atelier-8" />
</div>

<Img src="/maison-du-cerf/3.jpg" alt="atelier-8" />
<Img src="/maison-du-cerf/4.jpg" alt="atelier-8" />
<Img src="/maison-du-cerf/5.jpg" alt="atelier-8" />
<Img src="/maison-du-cerf/6.jpg" alt="atelier-8" />
<Img src="/maison-du-cerf/7.jpg" alt="atelier-8" />
<Img src="/maison-du-cerf/8.jpg" alt="atelier-8" />
