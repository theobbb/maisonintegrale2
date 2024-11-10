<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import SanityImg from '$lib/img/sanity-img.svelte';
	import Block from '$lib/ui/block.svelte';
	import Icon from '$lib/ui/icons/icon.svelte';
	import { get_lang_state } from '../../../lib/lang-state.svelte';

	const { data } = $props();

	const lang_state = get_lang_state();

	const lang = $derived(lang_state.lang);

	const active = $derived(data.res.find((item) => item.slug[lang].current === $page.params.slug));

	let nav_href = $state({
		prev: '',
		next: ''
	});

	const len = data.res.length;

	$effect(() => {
		const slug = active?.slug;
		if (!slug) return;
		lang_state.set_href(`/realisations/${slug.fr.current}`, `/en/work/${slug.en.current}`);

		nav_href.prev = get_nav(-1);
		nav_href.next = get_nav(1);
	});

	function get_nav(direction) {
		const target_i = (active.i + direction + len) % len;

		const base = lang == 'fr' ? `/realisations` : `/en/work`;
		const href = `${base}/${data.res[target_i].slug[lang].current}`;

		return href;
		//goto(`${lang == 'fr' ? `/realisations` : `/en/work`}/${data.res[target_i].slug[lang].current}`);
	}

	const n_cols = 2;
	let splitted_imgs = $derived.by(() => {
		const cols = Array.from({ length: n_cols }, () => ({
			items: []
		}));
		let col_cursor = 0;

		active.imgs.forEach((img, i) => {
			const col_i = col_cursor % n_cols;

			cols[col_i].items.push(img);
			col_cursor++;
		});

		return cols;
	});
</script>

<svelte:head>
	<title>
		Maison Intégrale | {lang == 'fr' ? `Réalisations` : `Work`} | {active.name[lang]}
	</title>
</svelte:head>

{#snippet head()}
	<div class="flex md:flex-col-reverse gap-4 md:gap-12 justify-between items-start">
		<div class="text-2xl font-semibold">
			{active.name[lang]}
		</div>
		<div class="flex text-2xl items-center gap-1.5">
			<a href={nav_href.prev} class="p-1.5 border-2 flex items-center justify-center">
				<Icon name="ArrowLeft" />
			</a>
			<a href={nav_href.next} class="p-1.5 border-2 flex items-center justify-center">
				<Icon name="ArrowRight" />
			</a>
		</div>
	</div>
{/snippet}

{#snippet sub()}
	<div class="text-sm font-medium leading-4" style="">
		<Block text={active.top[lang]} spacing={1} class="space-y-1" />
	</div>
{/snippet}

{#snippet body()}
	<Block text={active.body[lang]} spacing={2} class="space-y-8" />
{/snippet}

{#snippet thumbnail()}
	<div class="mt-4">
		<div class="-mx-2.5">
			<img class="" src={active.imgs[0].url} alt={active.name[lang]} />
		</div>
	</div>
{/snippet}

{#snippet imgs()}
	{#each active.imgs as img, i}
		<div
			class="relative -mx-2.5 md:mx-0 mb-1.5 {i == 0 ? 'hidden md:block' : ''}"
			style="aspect-ratio: {img.asset.metadata.dimensions.aspectRatio}"
		>
			<SanityImg {img} alt={active.name[lang]} />
		</div>
	{/each}
{/snippet}

{#if active}
	<div class="hidden md:grid grid-cols-[30%_70%] 2xl:-mr-28 pr-1.5">
		<div class="pr-16">
			<div class="mb-12">{@render head()}</div>
			<div class="mb-24">{@render sub()}</div>

			{@render body()}
		</div>
		<div class="grid grid-cols-2 gap-1.5" style="grid-template-rows: masonry;">
			{#each splitted_imgs as col, i}
				<div>
					{#each col.items as img}
						<div
							class="relative -mx-2.5 md:mx-0 mb-1.5 {i == 0 ? 'hidden md:block' : ''}"
							style="aspect-ratio: {img.asset.metadata.dimensions.aspectRatio}"
						>
							<SanityImg {img} alt={active.name[lang]} />
						</div>
					{/each}
				</div>
			{/each}
		</div>
		<!--
		<div class=" gap-1.5">
			{@render imgs()}
		</div>
		-->
	</div>

	<div class="md:hidden mt-10 grid grid-cols-1 md:grid-cols-2">
		<div>
			{@render head()}
		</div>
		<div class="mt-6">
			{@render sub()}
		</div>
		{@render thumbnail()}
		<div class="mt-6">
			{@render body()}
		</div>
		<div class="mt-6">
			{@render imgs()}
		</div>
	</div>
{/if}
