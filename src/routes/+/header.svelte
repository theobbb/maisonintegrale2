<script>
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/ui/button.svelte';
	import Icon from '$lib/ui/icons/icon.svelte';
	import { onMount } from 'svelte';
	import { get_lang_state } from '../../lib/lang-state.svelte';
	import Link from '../link.svelte';
	import Contact from './contact.svelte';

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

	$inspect({ scrolled });

	const active = $derived($page.route.id);

	let mobile_open = $state(false);

	onNavigate(() => {
		mobile_open = false;
	});
</script>

<svelte:window {onscroll} />

{#snippet links()}
	<div class="flex flex-col gap-3 text-xl font-medium md:flex-row md:gap-6 md:text-base lg:gap-9">
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
		class="flex items-center gap-4 text-xl font-medium md:gap-4 md:text-base {mobile_open
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
	class="bg-[--bg]- sticky top-0 z-30 -mx-4 grid grid-cols-[auto_1fr] px-4 pb-1 pt-1 tracking-wide backdrop-blur-xl md:grid-cols-[1fr_auto_1fr] md:pb-4 md:pt-5 xl:-mx-14 xl:px-14 2xl:-mx-28 2xl:px-28 {scrolled ||
	mobile_open
		? ''
		: '!border-transparent'} border-b-2"
>
	<div class="flex items-center font-medium">
		<Link href={lang == 'fr' ? '/' : '/en'}>MAISON INTÉGRALE</Link>
	</div>
	<div class="hidden items-center justify-center md:flex">
		{@render links()}
	</div>
	<div class="relative -mr-0.5 flex items-center justify-end gap-3.5 font-medium md:mr-0 md:gap-8">
		<div class="hidden md:block">{@render langs()}</div>
		<div>
			<Button
				onclick={() => {
					contact_open = true;
				}}>CONTACT</Button
			>
		</div>
		<button
			class="flex items-center text-2xl md:hidden"
			onclick={() => (mobile_open = !mobile_open)}
		>
			<Icon name="Menu" class=" transition duration-300 ease-in-out" />
		</button>
	</div>
</header>

<div
	onclick={() => {
		mobile_open = false;
	}}
	style=""
	class="backdrop-blur- fixed left-0 right-0 top-10 z-10 h-[100lvh] bg-black/20 {mobile_open
		? ''
		: 'pointer-events-none opacity-0'} transition ease-in-out"
></div>

<div
	style="width: calc(100% - 11.5rem); background-color: rgba(241, 242, 224, 0.8);"
	class="bg-[--bg]- fixed right-0 top-0 z-20 flex h-[100lvh] justify-end overflow-hidden border-l-2 backdrop-blur md:hidden {mobile_open
		? ''
		: 'pointer-events-none translate-x-8 opacity-0'} transition duration-300 ease-in-out"
>
	<div class="mt-14 flex w-full flex-col gap-16 pl-5 pr-3 pt-24">
		{@render links()}
		{@render langs()}
	</div>
</div>
