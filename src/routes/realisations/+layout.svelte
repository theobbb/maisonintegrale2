<script>
	import { page } from '$app/state';
	import { houses } from '$lib/houses';
	import SanityImg from '$lib/img/sanity-img.svelte';
	import { get_lang_state } from '$lib/lang-state.svelte';
	import Icon from '$lib/ui/icons/icon.svelte';

	const { data, children } = $props();
	console.log(data);
	houses.list.forEach((h) => {
		h.ref = data.res.find((hh) => hh.slug.fr.current == h.slug.fr);
	});

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
	const fr = $derived(lang == 'fr');

	const single = $derived(page.route.id?.split('/')[2]);

	const current = $derived(houses[page.route.id]);

	$effect(() => {
		if (current) lang_state.set_href(current.href.fr, current.href.en);
	});

	const list = houses.list;

	// const current_i = $derived(list.findIndex((h) => h.href.fr == page.route.id));

	// const prev = $derived(list[(current_i + list.length - 1) % list.length][lang]);
	// const next = $derived(list[(current_i + list.length + 1) % list.length][lang]);
</script>

{#if current}
	<div class="text-block 2xl:-mr-28- pr-1.5- relative grid gap-8 md:grid-cols-2 lg:gap-24">
		{@render children()}

		{#each current?.ref?.imgs as img}
			<div class="relative h-full w-full align-middle">
				<div class="relative" style="aspect-ratio: {img.asset.metadata.dimensions.aspectRatio}">
					<SanityImg {img} />
				</div>
			</div>
		{/each}
		<div
			class="bg-bg -mx: sticky bottom-0 z-10 col-span-full -mx-4 mt-12 items-center justify-center border-t-2 px-4 py-1 md:py-5 xl:-mx-14 xl:px-14 2xl:-mx-28 2xl:px-28"
		>
			<div class="flex items-center gap-1.5 max-sm:justify-between">
				<a
					href="/{fr ? 'realisations' : 'en/work'}"
					class="border-2 px-3 py-2 text-sm font-bold whitespace-nowrap uppercase"
					>{#if fr}Retour aux réalisations{:else}Back to work view{/if}</a
				>
				<div class=" flex items-center gap-1.5 text-2xl">
					<a
						href={current.prev[lang]}
						class="flex items-center justify-center border-2 p-1.5 transition hover:bg-black/10"
					>
						<Icon name="ArrowLeft" />
					</a>
					<a
						href={current.next[lang]}
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
