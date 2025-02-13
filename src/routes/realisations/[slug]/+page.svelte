<script>
	import { page } from '$app/state';

	import { houses } from '$lib/houses';

	import SanityImg from '$lib/img/sanity-img.svelte';
	import Block from '$lib/ui/block.svelte';
	import Icon from '$lib/ui/icons/icon.svelte';
	import { get_lang_state } from '../../../lib/lang-state.svelte';

	const { data } = $props();

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
	const fr = $derived(lang == 'fr');

	//const current = $derived(houses[page.route.id]);
	const current = $derived(data.res.find((item) => item.slug[lang].current === page.params.slug));

	const ref = $derived(houses.list.find((h) => h?.slug?.fr == current?.slug?.fr?.current));
	let nav_href = $state({
		prev: '',
		next: ''
	});

	const len = data.res.length;

	$effect(() => {
		const slug = current?.slug;
		if (!slug) return;
		lang_state.set_href(`/realisations/${slug.fr.current}`, `/en/work/${slug.en.current}`);

		nav_href.prev = get_nav(-1);
		nav_href.next = get_nav(1);
	});

	function get_nav(direction) {
		const target_i = (current.i + direction + len) % len;

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

		current.imgs.forEach((img, i) => {
			const col_i = col_cursor % n_cols;

			cols[col_i].items.push(img);
			col_cursor++;
		});

		return cols;
	});
</script>

<svelte:head>
	<title>
		Maison Intégrale | {lang == 'fr' ? `Réalisations` : `Work`} | {current.name[lang]}
	</title>
</svelte:head>

{#snippet head()}
	<div class="flex items-start justify-between gap-4 md:flex-col-reverse md:gap-12">
		<div class="text-2xl font-semibold">
			{current.name[lang]}
		</div>
		<div class="flex items-center gap-1.5 text-2xl">
			<a
				href={nav_href.prev}
				class="flex items-center justify-center border-2 p-1.5 transition hover:bg-black/10"
			>
				<Icon name="ArrowLeft" />
			</a>
			<a
				href={nav_href.next}
				class="flex items-center justify-center border-2 p-1.5 transition hover:bg-black/10"
			>
				<Icon name="ArrowRight" />
			</a>
		</div>
	</div>
{/snippet}

{#snippet sub()}
	<div class="text-block mt-6 !text-black/40">
		{#if ref}
			<div class="grid grid-cols-2 gap-x-6">
				{#if ref.location}
					<div>{fr ? 'lieu' : 'location'}</div>
					<div>
						{ref.location[lang]}
					</div>
				{/if}
				{#if ref.designer}
					<div>{fr ? 'conception' : 'design'}</div>
					<div>
						{ref.designer[lang]}
					</div>
				{/if}
				{#if ref.client}
					<div>client</div>
					<div>
						{ref.client[lang]}
					</div>
				{/if}
			</div>
		{/if}
	</div>
	<!-- <div class="opacity-70" style="">
		<Block text={current.top[lang]} spacing={1} class="space-y-1" />
	</div> -->
{/snippet}

{#snippet body()}
	<Block text={current.body[lang]} spacing={2} class="space-y-8" />
{/snippet}

{#snippet thumbnail()}
	<div class="mt-8">
		<div class="-mx-2.5">
			<img class="" src={current.imgs[0].url} alt={current.name[lang]} />
		</div>
	</div>
{/snippet}

{#snippet imgs()}
	{#each current.imgs as img, i}
		<div
			class="relative -mx-2.5 mb-1.5 md:mx-0 {i == 0 ? 'hidden md:block' : ''}"
			style="aspect-ratio: {img.asset.metadata.dimensions.aspectRatio}"
		>
			<SanityImg {img} alt={current.name[lang]} />
		</div>
	{/each}
{/snippet}

{#if current}
	<div class="text-block hidden grid-cols-[30%_70%] pr-1.5 md:grid 2xl:-mr-28">
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
							class="relative -mx-2.5 mb-1.5 md:mx-0 {i == 0 ? 'hidden md:block' : ''}"
							style="aspect-ratio: {img.asset.metadata.dimensions.aspectRatio}"
						>
							<SanityImg {img} alt={current.name[lang]} />
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<div class="mt-10 grid grid-cols-1 md:hidden md:grid-cols-2">
		<div>
			{@render head()}
		</div>
		<div class="mt-6">
			{@render sub()}
		</div>
		{@render thumbnail()}
		<div class="mt-8 mb-24">
			{@render body()}
		</div>
		<div class="">
			{@render imgs()}
		</div>
	</div>
{/if}
