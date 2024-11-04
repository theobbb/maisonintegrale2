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
	class="fixed top-0 left-0 right-0 h-[100lvh] z-[40] bg-black/50 {open
		? ''
		: 'opacity-0 pointer-events-none'} transition ease-in-out"
></div>

<div
	class="fixed z-50 top-4 left-4 right-4 h-[100svh] flex items-center justify-center {open
		? ''
		: 'opacity-0 translate-y-4 pointer-events-none'} pointer-events-none transition ease-in-out"
>
	<div
		class=" px-6 tracking-normal py-4 bg-[--bg] max-w-[300px] top-0 left-0 {open
			? 'pointer-events-auto'
			: ''}"
	>
		<div class="flex text-2xl -mr-1.5 justify-between items-start pb-1">
			<div class=" font-bold">Contact</div>
			<button class="flex text-3xl" onclick={close}>
				<Icon name="close" />
			</button>
		</div>
		<div class="leading-4 pb-6 text-sm pr-6 font-medium">
			{lang == 'fr'
				? `N’hésitez pas à nous contacter pour toute question.`
				: 'Feel free to contact us if you have any questions.'}
		</div>

		<div class=" border-t-2 pt-5 font-medium">
			<div class="flex flex-col gap-1">
				<div class="flex items-center gap-2">
					<Icon class="text-xl" name="user" />
					<div>Marc Baillargeon</div>
				</div>
				<div class="flex items-center gap-2">
					<Icon class="text-xl" name="pin" />
					<div>Laurentides</div>
				</div>
			</div>
			<div class="flex pb-2 pt-6 flex-col gap-1">
				<a
					href="tel:+14506024535"
					class="flex gap-1.5 text-sm font-semibold text-white bg-lime-700/80 px-3 py-2 pl-2.5"
				>
					<Icon class="text-xl" name="phone" />
					<div>450-602-4535</div>
				</a>
				<a
					href="mailto:baillargeonmarc@gmail.com"
					class="flex gap-1.5 text-sm font-semibold text-white bg-lime-700/80 px-3 py-2 pl-2.5"
				>
					<Icon class="text-xl" name="mail" />
					<div>baillargeonmarc@gmail.com</div>
				</a>
			</div>
		</div>
	</div>
</div>
