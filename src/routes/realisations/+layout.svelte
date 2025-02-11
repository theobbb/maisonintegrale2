<script>
	import { page } from '$app/state';
	import { get_lang_state } from '$lib/lang-state.svelte';

	const { children } = $props();

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
	const fr = $derived(lang == 'fr');

	const single = $derived(page.route.id?.split('/')[2]);
</script>

{#if single}
	<div class="text-block 2xl:-mr-28- pr-1.5- grid gap-8 md:grid-cols-2 lg:gap-24">
		{@render children()}
	</div>
{:else}
	{@render children()}
{/if}
