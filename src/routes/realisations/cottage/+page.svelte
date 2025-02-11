<script>
	import Img from '$lib/img.svelte';
	import { get_lang_state } from '$lib/lang-state.svelte';
	import Card from '../+/card.svelte';

	const n_imgs = 1;

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
	const fr = $derived(lang == 'fr');

	lang_state.set_href('/realisations/cottage', '/en/work/cottage');
</script>

<Card title="COTTAGE" location="Rosemère" designer="Maison Intégrale" nav={{ prev: '', next: '' }}>
	{#snippet meta()}
		{#if fr}
			Rdc 1432 pi2

			<br />
			Garage de 784 pi2
			<br />
			Étage de 1986 pi2
		{:else}
			DRC 1432 ft 2

			<br />
			Garage of 784 pi 2
			<br />
			Floor of 1986 ft 2
		{/if}
	{/snippet}
	<div class="max-w-120">
		{#if fr}
			Maison unifamiliale. Le projet incluait la démolition d’une maison existante sur le site.
			<br /><br />
			Le concept architectural adopté ici intègre les styles campagnard et contemporain d’avant-garde.
			La nouvelle maison est mieux orientée, la vue et l’accès à la rivière sont mis en valeur tout en
			respectant l’équilibre topographique. La maison est sobre et performante : elle est conçue pour
			que le client puisse y travailler, mais aussi recevoir de la famille pour de longues périodes parfois.
			<br /><br />
			4 chambres à l’étage, 1 bureau à l’étage et 1 bureau au rdc, sous-sol fini avec 2 autres chambres.
		{:else}
			Single family Home. The project included the demolition of an existing house on the site.
			<br /><br />
			The architectural concept adopted here incorporates the country and avant-garde contemporary styles.
			The new house is better oriented, the view and access to the river are highlighted while respecting
			the topographic balance. The house is simple and efficient: it is designed so that the customer
			can work there, but also to receive family for long periods sometimes.
			<br /><br />
			4 bedrooms upstairs, 1 office upstairs and 1 office on the ground floor, finished basement with
			2 other rooms.
		{/if}
	</div>
</Card>
<div class="space-y-24">
	<Img src="/cottage/0.jpg" alt="cottage-8" class="saturate-0" />
	<Img src="/cottage/1.jpg" alt="cottage-8" class="col-span-2- items-start saturate-0" />
</div>

<Img src="/cottage/3.jpg" alt="cottage-8" class="saturate-50 lg:ml-36" />
<Img src="/cottage/4.jpg" alt="cottage-8" class="brightness-120 saturate-50 lg:mr-36" />
