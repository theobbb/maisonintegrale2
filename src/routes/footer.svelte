<script>
	import Icon from '$lib/ui/icons/icon.svelte';
</script>

<div class="mt-32 text-white xl:-mx-14 2xl:-mx-28 bg-lime-800/80 -mx-4 min-h-[40svh]-">
	<div
		class="md:w-fit flex-wrap gap-5 px-4 flex-row flex py-5 w-full justify-between md:items-center md:gap-12 md:flex-row md:m-auto border-white/10 font-medium"
	>
		<div class="flex whitespace-nowrap flex-col gap-2 md:gap-6 md:items-center md:flex-row gap-1">
			<div class="flex items-center gap-1.5">
				<Icon class="text-xl" name="user" />
				<div>Marc Baillargeon</div>
			</div>
			<div class="flex items-center gap-1.5">
				<Icon class="text-xl" name="pin" />
				<div>Laurentides</div>
			</div>
		</div>
		<div class="flex md:items-center text-black flex-col md:flex-row md:py-0 gap-1">
			<a
				href="tel:+14506024535"
				class="flex gap-1.5 text-sm font-semibold bg-lime-200/70 px-3 py-2 pl-2.5"
			>
				<Icon class="text-xl" name="phone" />
				<div>450-602-4535</div>
			</a>
			<a
				href="mailto:baillargeonmarc@gmail.com"
				class="flex gap-1.5 relative text-sm font-semibold bg-lime-200/70 px-3 py-2 pl-2.5"
			>
				<Icon class="text-xl" name="mail" />
				<div class=" text-ellipsis overflow-hidden sm:max-w-[unset] max-w-[8rem]">
					baillargeonmarc@gmail.com
				</div>
			</a>
		</div>
	</div>
</div>
