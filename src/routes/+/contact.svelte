<script>
	import { get_lang_state } from '$lib/lang-state.svelte';
	import Button from '$lib/ui/button.svelte';
	import Icon from '$lib/ui/icons/icon.svelte';

	const lang_state = get_lang_state();

	const lang = $derived(lang_state.lang);

	const { open, ...props } = $props();

	function close() {
		if (typeof props.close === 'function') {
			props.close();
		}
	}
</script>

<div
	onclick={close}
	class="z-500 fixed left-0 right-0 top-0 h-[100lvh] bg-black/50 {open
		? ''
		: 'pointer-events-none opacity-0'} transition ease-in-out"
></div>

<div
	class="z-1000 fixed left-4 right-4 top-4 flex h-[100svh] items-center justify-center pb-8 {open
		? ''
		: 'pointer-events-none translate-y-2 opacity-0'} pointer-events-none transition duration-300 ease-in-out"
>
	<div class=" bg-bg max-w- left-0 top-0 px-7 pb-5 pt-6 {open ? 'pointer-events-auto' : ''}">
		<div class="-mr-1.5 flex items-start justify-between pb-16 text-lg font-medium leading-6">
			<div class="max-w-84 pr-6">
				{lang == 'fr'
					? `Contactez-nous pour toute question, demande de soumission, ou juste pour jaser de votre projet.`
					: 'Contact us for any questions, quote requests, or just to chat about your project.'}
			</div>
		</div>

		<div class="pt-5 text-lg font-medium">
			<div class="flex flex-col gap-1">
				<div class="flex items-center gap-2">
					<Icon class="text-xl" name="user" />
					<div>Marc Baillargeon</div>
				</div>
			</div>
			<div class="flex flex-col gap-0.5 pb-2 pt-6">
				<a
					href="tel:+14506024535"
					class="bg-lime-700/80- flex gap-1.5 bg-black/80 p-3.5 text-sm font-semibold text-white transition hover:bg-black/70 md:px-3 md:py-2 md:pl-2.5"
				>
					<Icon class="text-xl" name="phone" />
					<div>450-602-4535</div>
				</a>
				<a
					href="mailto:baillargeonmarc@gmail.com"
					class="bg-lime-700/80- flex gap-1.5 bg-black/80 p-3.5 text-sm font-semibold text-white transition hover:bg-black/70
md:px-3 md:py-2 md:pl-2.5"
				>
					<Icon class="text-xl" name="mail" />
					<div>baillargeonmarc@gmail.com</div>
				</a>
			</div>
		</div>
	</div>
</div>
