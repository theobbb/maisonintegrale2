<script>
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/ui/button.svelte';
	import Icon from '$lib/ui/icons/icon.svelte';
	import { trans } from '$lib/utils/trans.svelte';
	import { onMount } from 'svelte';
	import Contact from './contact.svelte';
	import { get_lang_state } from '../lib/lang-state.svelte';
	import Link from './link.svelte';

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);

	let contact_open = $state(false);

	function close_contact() {
		contact_open = false;
	}

	onMount(() => {
		onscroll();
	});

	let scrolled = $state(false);
	function onscroll() {
		scrolled = window.scrollY > 0;
	}

	const active = $derived($page.route.id);

	let mobile_open = $state(false);

	onNavigate(() => {
		mobile_open = false;
	});
</script>

<svelte:window {onscroll} />

{#snippet links()}
	<div
		class="flex font-medium gap-3 md:gap-9 flex-col md:flex-row text-xl font-medium md:text-base"
	>
		<Link href={lang == 'fr' ? '/' : '/en'} active={active == '/'}
			>{lang == 'fr' ? 'ACCUEIL' : 'HOME'}</Link
		>
		<Link
			href="{lang_state.param}/{lang == 'fr' ? 'a-propos' : 'about'}"
			active={active == '/a-propos'}>{lang == 'fr' ? 'À PROPOS' : 'ABOUT'}</Link
		>
		<Link
			href="{lang_state.param}/{lang == 'fr' ? 'realisations' : 'work'}"
			active={active == '/realisations'}>{lang == 'fr' ? 'RÉALISATIONS' : 'WORK'}</Link
		>
	</div>
{/snippet}

{#snippet langs()}
	<div
		class="flex gap-4 items-center md:gap-4 text-xl font-medium md:text-base {mobile_open
			? ''
			: ''}"
	>
		<Link href={lang_state.href.fr} active={lang == 'fr'} data-sveltekit-noscroll>FR</Link>
		<Link href={lang_state.href.en} active={lang == 'en'} data-sveltekit-noscroll>EN</Link>
	</div>
{/snippet}

<Contact open={contact_open} close={close_contact} />
<header
	style="background-color: rgba(241, 242, 224, 0.7);"
	class="sticky backdrop-blur-xl z-30 top-0 2xl:-mx-28 -mx-4 px-4 xl:px-14 xl:-mx-14 2xl:px-28 bg-[--bg]- grid tracking-wide md:pt-5 pt-1 pb-1 md:pb-4 grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] {scrolled ||
	mobile_open
		? ''
		: 'border-transparent'} border-b-2"
>
	<div class="font-medium flex items-center">
		<Link href={lang == 'fr' ? '/' : '/en'}>MAISON INTÉGRALE</Link>
	</div>
	<div class="hidden md:flex items-center justify-center">
		{@render links()}
	</div>
	<div class="flex items-center -mr-0.5 md:mr-0 font-medium relative gap-3.5 md:gap-8 justify-end">
		<div class="hidden md:block">{@render langs()}</div>
		<div>
			<Button
				onclick={() => {
					contact_open = true;
				}}>CONTACT</Button
			>
		</div>
		<button
			class="md:hidden flex items-center text-2xl"
			onclick={() => (mobile_open = !mobile_open)}
		>
			<Icon name="Menu" class=" transition ease-in-out duration-300" />
		</button>
	</div>
</header>

<div
	onclick={() => {
		mobile_open = false;
	}}
	style=""
	class="fixed top-10 left-0 right-0 h-[100lvh] z-10 bg-black/20 backdrop-blur- {mobile_open
		? ''
		: 'opacity-0 pointer-events-none'} transition ease-in-out"
></div>

<div
	style="width: calc(100% - 11.5rem); background-color: rgba(241, 242, 224, 0.8);"
	class="fixed overflow-hidden flex backdrop-blur md:hidden bg-[--bg]- border-l-2 top-0 right-0 h-[100lvh] justify-end z-20 {mobile_open
		? ''
		: 'translate-x-8 opacity-0 pointer-events-none'} transition ease-in-out duration-300"
>
	<div class="mt-14 pl-5 pr-3 pt-24 w-full gap-16 flex flex-col">
		{@render links()}
		{@render langs()}
	</div>
</div>
