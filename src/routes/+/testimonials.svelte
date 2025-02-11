<script>
	import Icon from '$lib/ui/icons/icon.svelte';

	import { text } from './text';

	let open = $state(0);
	const open_1 = $derived(open == 1);
	const open_2 = $derived(open == 2);

	function close() {
		open = 0;
	}
</script>

<div
	onclick={close}
	class="fixed top-0 right-0 left-0 z-500 h-[100lvh] bg-black/50 {open
		? ''
		: 'pointer-events-none opacity-0'} transition ease-in-out"
></div>

<div class="text-lg leading-6 font-medium">
	<div onclick={() => (open = 2)} class="cursor-pointer">
		<div>
			"...Marc was professional, honest, and incredibly reliable. He managed the entire project
			seamlessly, ensuring everything was completed on time and to a high standard..."
		</div>
		<button class="text-sm font-semibold">Lire la suite</button>
		<div class="text-block mt-4 flex items-center gap-2 font-medium">
			<Icon name="user" class="text-xl opacity-40" />
			Ali S.
		</div>
	</div>
	<div
		class="fixed top-4 right-4 left-4 z-1000 flex h-[100svh] items-center justify-center pb-8 {open_2
			? ''
			: 'pointer-events-none translate-y-2 opacity-0'} pointer-events-none transition duration-300 ease-in-out"
	>
		<div
			class=" bg-bg top-0 left-0 max-h-[80vh] max-w-150 overflow-y-auto px-8 py-6 md:px-11 md:py-8 {open_2
				? 'pointer-events-auto'
				: ''}"
		>
			<div>
				"We had the pleasure of working with Marc from Maison Intégrale to build our new home, and
				we couldn’t be happier with the experience. He came highly recommended by a friend who was a
				former client, and he absolutely lived up to that recommendation.
				<br /><br /> Marc was professional, honest, and incredibly reliable. He managed the entire
				project seamlessly, ensuring everything was completed on time and to a high standard. What
				stood out most was how he handled all the challenges that inevitably come with a big
				project—without us ever needing to get involved. Thanks to his expertise, what could have
				been a stressful process was completely stress-free for us.<br /><br /> Now, after living in
				our home for over five years, we can confidently say that the quality of his work speaks for
				itself. We have had barely any issues, and on the rare occasions we needed to reach out,
				Marc has always been available and ready to help.<br /><br /> Beyond his excellent project
				management skills, Marc also stands by his work, guaranteeing quality and peace of mind. We
				are truly grateful for his dedication and would highly recommend him to anyone looking for a
				trustworthy and skilled builder."
				<div class="text-block mt-8 flex items-center gap-2 font-medium">
					<Icon name="user" class="text-xl opacity-40" />
					Ali S.
				</div>
			</div>
		</div>
	</div>
</div>
{#each text.comments as c}
	<div>
		<div class="text-lg leading-6 font-medium">{c.text}</div>
		<div class="text-block mt-4 flex items-center gap-2 font-medium">
			<Icon name="user" class="text-xl opacity-40" />
			{c.from}
		</div>
	</div>
{/each}
