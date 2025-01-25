<script>
	import { page } from '$app/stores';
	import { get_lang_state } from '$lib/lang-state.svelte';
	import Icon from '$lib/ui/icons/icon.svelte';
	import Contact from './contact.svelte';
	import Link from './link.svelte';
	import Logo from './logo.svelte';
	import { text } from './text';

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);

	const active = $derived($page.route.id);
</script>

<div
	class="z-[1000] relative mt-32 flex items-center text-white xl:-mx-14 2xl:-mx-28 2xl:px-28 xl:px-14 px-4 bg-black/80 -mx-4 min-h-[44svh]"
>
	<div
		class="grid grid-cols-3 gap-2 py-12 w-full justify-between md:items-start md:gap-[2rem_11rem] md:m-auto border-white/10"
	>
		<div>
			<div class="">
				<div class="text-lg mb-4">{text.special.title[lang]}</div>
				<div class="text-white/60 text-sm">{text.special.sub[lang]}</div>
			</div>
		</div>
		<div class="flex flex-col w-fit m-auto">
			<div class="text-lg mb-2">Contact</div>
			<div
				class="text-white/60 font-normal pb-6 border-b-2 border-white/10 max-w-64 text-sm font-medium"
			>
				{lang == 'fr'
					? `N’hésitez pas à nous contacter pour toute question.`
					: 'Feel free to contact us if you have any questions.'}
			</div>
			<div class="flex whitespace-nowrap pb-6 flex-col gap-2.5 gap-1 pt-6">
				<div class="flex items-center gap-1.5">
					<Icon class="text-xl" name="user" />
					<div>Marc Baillargeon</div>
				</div>
				<div class="flex items-center gap-1.5">
					<Icon class="text-xl" name="pin" />
					<div>Laurentides</div>
				</div>
			</div>
			<div class="flex md:items-center text-black font-semibold flex-col md:py-0 gap-1">
				<a href="tel:+14506024535" class="flex w-full gap-1.5 text-sm bg-white/60 px-3 py-2 pl-2.5">
					<Icon class="text-xl" name="phone" />
					<div>450-602-4535</div>
				</a>
				<a
					href="mailto:baillargeonmarc@gmail.com"
					class="flex gap-1.5 w-full relative text-sm bg-white/60 px-3 py-2 pl-2.5"
				>
					<Icon class="text-xl" name="mail" />
					<div class=" text-ellipsis overflow-hidden sm:max-w-[unset] max-w-[8rem]">
						baillargeonmarc@gmail.com
					</div>
				</a>
			</div>
		</div>

		<div class="grid grid-cols-[2fr_1fr]">
			<div class="text-lg">Navigation</div>
			<div class="text-lg text-right">{lang == 'fr' ? 'Langue' : 'Language'}</div>
			<div class="col-span-2 mt-1 mb-6 border-b-2 border-white/10"></div>
			<div
				class="flex gap-2 md:gap-2 tracking-wider font-light text-white/70 flex-col text-xl md:text-base"
			>
				<a
					class={active == '/' ? 'text-lime-400 font-medium' : ''}
					href={lang == 'fr' ? '/' : '/en'}>{lang == 'fr' ? 'ACCUEIL' : 'HOME'}</a
				>
				<a
					href="{lang_state.param}/{lang == 'fr' ? 'a-propos' : 'about'}"
					class={active == '/a-propos' ? 'text-lime-400 font-medium' : ''}
					>{lang == 'fr' ? 'À PROPOS' : 'ABOUT'}</a
				>
				<a
					href="{lang_state.param}/{lang == 'fr' ? 'realisations' : 'work'}"
					class={active == '/realisations' ? 'text-lime-400 font-medium' : ''}
					>{lang == 'fr' ? 'RÉALISATIONS' : 'WORK'}</a
				>
			</div>
			<div
				class="flex text-right gap-2 md:gap-2 tracking-wider font-light text-white/70 flex-col text-xl md:text-base"
			>
				<a
					data-sveltekit-noscroll
					class={lang == 'fr' ? 'text-lime-400 font-medium' : ''}
					href={lang_state.href.fr}>FR</a
				>
				<a
					data-sveltekit-noscroll
					href={lang_state.href.en}
					class={lang == 'en' ? 'text-lime-400 font-medium' : ''}>EN</a
				>
			</div>
		</div>
		<div class="flex gap-4 col-span-full text-white/30 items-end justify-between">
			<div class="flex gap- items-end">
				<div class="relative size-[7rem]" style="transform: translateY(1.3rem)">
					<Logo footer />
				</div>
				<div class="text-4xl -ml-4 font-light">Maison Intégrale</div>
			</div>
			<div class="text-sm font-light gap-4 text-right items-end jusitfy-end">
				<div>RBQ 5683-285</div>
				<div>@ {new Date().getFullYear()} Maison Intégrale. Tous droits réservés.</div>
			</div>
		</div>
	</div>
</div>
