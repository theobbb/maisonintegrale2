<script>
	import { page } from '$app/state';
	import { houses } from '$lib/houses';
	import { get_lang_state } from '$lib/lang-state.svelte';
	import Icon from '$lib/ui/icons/icon.svelte';

	const { children } = $props();

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
	const fr = $derived(lang == 'fr');

	const single = $derived(page.route.id?.split('/')[2]);

	const current_i = $derived(houses.findIndex((h) => h.fr == page.route.id));

	const prev = $derived(houses[(current_i + houses.length - 1) % houses.length][lang]);
	const next = $derived(houses[(current_i + houses.length + 1) % houses.length][lang]);
</script>

{#if single}
	<div class="text-block 2xl:-mr-28- pr-1.5- relative grid gap-8 md:grid-cols-2 lg:gap-24">
		{@render children()}
		<div>
			<div class="mb-16 flex items-center gap-1.5 max-sm:justify-between">
				<a
					href="/{fr ? 'realisations' : 'en/work'}"
					class="border-2 px-3 py-2 text-sm font-bold whitespace-nowrap uppercase"
					>{#if fr}Retour aux réalisations{:else}Back to work view{/if}</a
				>
				<div class=" flex items-center gap-1.5 text-2xl">
					<a
						href={prev}
						class="flex items-center justify-center border-2 p-1.5 transition hover:bg-black/10"
					>
						<Icon name="ArrowLeft" />
					</a>
					<a
						href={next}
						class="flex items-center justify-center border-2 p-1.5 transition hover:bg-black/10"
					>
						<Icon name="ArrowRight" />
					</a>
				</div>
			</div>
		</div>
	</div>
{:else}
	{@render children()}
{/if}
