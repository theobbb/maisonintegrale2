<script>
	import { page } from '$app/state';
	import { houses } from '$lib/houses';
	import { get_lang_state } from '$lib/lang-state.svelte';
	import Icon from '$lib/ui/icons/icon.svelte';

	const {
		title,
		location = '',
		designer = '',
		client = '',
		meta = null,
		nav = { prev: '', next: '' },
		children
	} = $props();

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
	const fr = $derived(lang == 'fr');

	const active = $derived(houses[page.route.id]);
</script>

<div
	class="col-span-full mt-12 flex flex-col justify-between gap-44 pb-12 lg:mt-24 lg:flex-row lg:pr-24"
>
	<!-- <div class="mb-16 flex items-center gap-1.5 max-sm:justify-between">
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
	</div> -->
	<div>
		<div class="mb-6 text-2xl font-medium uppercase">
			{active.name[lang]}
		</div>
		<div class="mb-24 text-black/40">
			<div class="grid grid-cols-2 gap-x-6">
				{#if active.location}
					<div>{fr ? 'lieu' : 'location'}</div>
					<div>
						{active.location[lang]}
					</div>
				{/if}
				{#if active.designer}
					<div>{fr ? 'conception' : 'design'}</div>
					<div>
						{active.designer[lang]}
					</div>
				{/if}
				{#if active.client}
					<div>client</div>
					<div>
						{active.client[lang]}
					</div>
				{/if}
			</div>
			{#if meta}
				<div class="mt-6">
					{@render meta()}
				</div>
			{/if}
		</div>
	</div>
	<div>
		{@render children()}
	</div>
</div>
