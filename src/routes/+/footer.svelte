<script>
	import { page } from '$app/stores';
	import { get_lang_state } from '$lib/lang-state.svelte';
	import Icon from '$lib/ui/icons/icon.svelte';
	import Logo from './logo.svelte';
	import { text } from './text';

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);

	const active = $derived($page.route.id);
</script>

<footer
	class="**:border-white/10 z-1 text-bg relative -mx-4 mt-32 bg-black/80 px-4 xl:-mx-14 xl:px-14 2xl:-mx-28 2xl:px-28"
>
	<div class="flex flex-col py-8 max-lg:text-lg lg:py-12">
		<div class="flex w-full flex-col justify-between gap-16 lg:flex-row lg:gap-36 lg:pr-44">
			<div class="flex flex-col-reverse gap-8 lg:flex-col lg:gap-6">
				<div
					class="flex flex-col gap-4 whitespace-nowrap font-medium md:py-0 lg:flex-row lg:items-center lg:gap-6"
				>
					<div class="flex items-center gap-1.5 opacity-80">
						<Icon class="text-xl" name="user" />
						<div>Marc Baillargeon</div>
					</div>
					<div
						class="flex flex-col !divide-white/10 border-2 max-lg:!divide-y-2 max-lg:text-base lg:flex-row lg:divide-x-2"
					>
						<div>
							<a
								href="tel:+14506024535"
								class="text-accent pb-4.5 flex items-center gap-1.5 bg-black/10 px-4 py-4 transition hover:bg-white/10 md:px-2 md:py-1"
							>
								<Icon class="text-xl" name="phone" />
								<div>450-602-4535</div>
							</a>
						</div>
						<div>
							<a
								href="mailto:baillargeonmarc@gmail.com"
								class="text-accent pb-4.5 flex items-center gap-1.5 bg-black/10 px-4 py-4 transition hover:bg-white/10 md:px-2 md:py-1"
							>
								<Icon class="text-xl" name="mail" />
								<div class="overflow-hidden text-ellipsis sm:max-w-[unset]">
									baillargeonmarc@gmail.com
								</div>
							</a>
						</div>
					</div>
				</div>
				<div class="max-w-84 border-white/10 leading-6 opacity-80 md:tracking-wide">
					{lang == 'fr'
						? `Contactez-nous pour toute question, demande de soumission, ou juste pour jaser de votre projet.`
						: 'Contact us for any questions, quote requests, or just to chat about your project.'}
				</div>
			</div>

			<div class="mt-1">
				<div
					class=" flex flex-col gap-2 text-xl font-light tracking-wider max-lg:items-end md:gap-2 md:text-base"
				>
					{@render link(
						lang == 'fr' ? 'ACCUEIL' : 'HOME',
						lang == 'fr' ? '/' : '/en',
						active == '/'
					)}
					{@render link(
						lang == 'fr' ? 'À PROPOS' : 'ABOUT',
						lang == 'fr' ? 'a-propos' : 'about',
						active == '/a-propos'
					)}
					{@render link(
						lang == 'fr' ? 'RÉALISATIONS' : 'WORK',
						lang == 'fr' ? 'realisations' : 'work',
						active?.startsWith('/realisations')
					)}
				</div>
				<div
					class="text-right- mt-12 flex flex-col gap-2 text-xl font-light tracking-wider max-lg:items-end md:gap-3.5 md:text-base lg:flex-row"
				>
					{@render link('FR', lang_state.href.fr, lang == 'fr', true)}
					{@render link('EN', lang_state.href.en, lang == 'en', true)}
				</div>
			</div>
		</div>
		<div class="mt-6 flex flex-col opacity-60 max-lg:text-sm lg:mt-24 lg:flex-row lg:gap-8">
			<div class="items-end gap-4">
				<div>
					@ {new Date().getFullYear()} Maison Intégrale. {#if lang == 'fr'}
						Tous droits réservés{:else}All rights reserved{/if}.
				</div>
			</div>
			<div>RBQ 5683-285</div>
		</div>
	</div>
</footer>

{#snippet link(text, href, active, noscroll = false)}
	<a
		data-sveltekit-noscroll={noscroll}
		class="w-fit font-medium {active ? '' : 'opacity-60 hover:opacity-100'} transition"
		{href}>{text}</a
	>
{/snippet}
