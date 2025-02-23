<script>
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/ui/button.svelte';
	import Icon from '$lib/ui/icons/icon.svelte';
	import { onMount } from 'svelte';
	import { get_lang_state } from '../../lib/lang-state.svelte';
	import Link from '../link.svelte';
	import Contact from './contact.svelte';
	import { gtag_report_conversion } from '$lib/utils/gtag-report-conversion';

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
	const fr = $derived(lang == 'fr');

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

	const links = $derived([
		{
			name: fr ? 'ACCUEIL' : 'HOME',
			href: fr ? '/' : '/en',
			active: active == '/'
		},
		{
			name: fr ? 'À PROPOS' : 'ABOUT',
			href: fr ? '/a-propos' : '/en/about',
			active: active == '/a-propos'
		},
		{
			name: fr ? 'RÉALISATIONS' : 'WORK',
			href: fr ? '/realisations' : '/en/work',
			active: active?.startsWith('/realisations')
		}
	]);

	let mobile_open = $state(false);

	onNavigate(() => {
		mobile_open = false;
	});
</script>

<svelte:window {onscroll} />

{#snippet langs()}
	<div
		class="flex items-center gap-5 text-xl font-medium md:gap-4 md:text-base {mobile_open
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
	class="bg-[--bg]- sticky top-0 z-30 -mx-4 grid grid-cols-[auto_1fr] px-4 pt-1 pb-1 tracking-wide backdrop-blur-xl md:grid-cols-[1fr_auto_1fr] md:pt-5 md:pb-4 xl:-mx-14 xl:px-14 2xl:-mx-28 2xl:px-28 {scrolled ||
	mobile_open
		? ''
		: '!border-transparent'} border-b-2"
>
	<div class="flex items-center font-medium">
		<Link href={lang == 'fr' ? '/' : '/en'}>MAISON INTÉGRALE</Link>
	</div>
	<div
		class="flex flex-col items-center justify-center gap-5 text-xl font-medium max-md:hidden md:flex-row md:gap-6 md:text-base lg:gap-9"
	>
		{#each links as { name, href, active }}
			<a
				{href}
				class="{active ? 'underline decoration-black/20 decoration-2 underline-offset-4' : ''} "
			>
				{name}
			</a>
		{/each}
	</div>
	<div class="relative -mr-0.5 flex items-center justify-end gap-3.5 font-medium md:mr-0 md:gap-8">
		<div class="hidden md:block">{@render langs()}</div>
		<div>
			<Button
				onclick={() => {
					contact_open = true;
					gtag('event', 'contact_click', {
						event_category: 'engagement',
						event_label: 'Contact Button',
						send_to: 'AW-16865001278/MJQ4CNPX_KEaEL7-7ek-'
					});
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
	class="backdrop-blur- fixed top-10 right-0 left-0 z-10 h-[100lvh] bg-black/50 {mobile_open
		? ''
		: 'pointer-events-none opacity-0'} transition ease-in-out"
></div>

<div
	style="width: calc(100% - 11.5rem); background-color: rgba(241, 242, 224, 0.86);"
	class="bg-bg fixed top-0 right-0 z-20 flex h-[100lvh] justify-end overflow-hidden border-l-2 backdrop-blur md:hidden {mobile_open
		? ''
		: 'pointer-events-none translate-x-4 opacity-0'} transition duration-300 ease-in-out"
>
	<div class=" flex w-full flex-col gap-24 pt-24 pr-3 pl-7">
		<div class="flex flex-col divide-y-2 text-xl font-medium">
			{#each links as { name, href, active }}
				<a {href} class="py-3 {active ? ' ' : 'text-black/40'} ">
					{name}
				</a>
			{/each}
		</div>
		<div
			class="flex items-center gap-5 text-xl font-medium md:gap-4 md:text-base {mobile_open
				? ''
				: ''}"
		>
			<a href={lang_state.href.fr} class={fr ? '' : 'text-black/40'} data-sveltekit-noscroll>FR</a>
			<a href={lang_state.href.en} class={!fr ? '' : 'text-black/40'} data-sveltekit-noscroll>EN</a>
		</div>
		<div class="flex gap-0.5 pt-6 pb-2">
			<a
				href="tel:+14506024535"
				class="text-bg flex gap-1.5 bg-black/80 p-3.5 text-sm font-semibold transition hover:bg-black/70"
			>
				<Icon class="text-3xl" name="phone" />
			</a>
			<a
				href="mailto:baillargeonmarc@gmail.com"
				class=" text-bg flex gap-1.5 bg-black/80 p-3.5 text-sm font-semibold transition hover:bg-black/70
"
			>
				<Icon class="text-3xl" name="mail" />
			</a>
		</div>
	</div>
</div>
