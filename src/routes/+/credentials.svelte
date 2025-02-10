<script>
	import { get_lang_state } from '$lib/lang-state.svelte';
	import { text } from './text';

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
</script>

<div
	class="text-block max-w-130 grid grid-cols-[1fr_2.5fr] flex-col items-center gap-5 border-2 px-4 py-4 lg:gap-[1rem_2rem]"
>
	<a target="_blank" href="https://prixdomus.ca/">
		<img class="h-[70px] w-full object-cover object-[50%_45%]" src="/domus.png" />
	</a>
	<div>
		{#if lang == 'fr'}
			Finaliste - Prix Domus <br />Catégorie développement durable
		{:else}
			Finalist - Domus price<br />Sustainable Development Category
		{/if}
	</div>
	{@render divider()}
	<a
		href="https://transitionenergetique.gouv.qc.ca/residentiel/programmes/novoclimat"
		target="_blank"
	>
		<img class="max-h-[60px] object-contain" src="/novo.png" />
	</a>
	<div>
		{#if lang == 'fr'}
			Respect des exigences techniques du programme Novoclimat -> accès à une subvention du
			gouvernement provincial
		{:else}
			Compliance with the technical requirements of the Novoclimat program. -> access to a
			provincial government grant.
		{/if}
	</div>
	{@render divider()}
	<a href="https://www.garantiegcr.com/fr/" target="_blank">
		<img class="max-h-[50px] object-contain" src="/garantie.png" />
	</a>
	<div>
		{#if lang == 'fr'}
			Accréditation Garantie <br />construction résidentielle.
		{:else}
			Accreditation under the Residential Construction Guarantee.
		{/if}
	</div>

	{@render divider()}
	<div class="col-span-2 text-right text-black/60">RBQ 5683-2850</div>
</div>

{#snippet divider()}
	<div class="col-span-2 border-b-2"></div>
{/snippet}
