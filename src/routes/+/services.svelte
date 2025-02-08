<script>
	import { get_lang_state } from '$lib/lang-state.svelte';

	import Icon from '$lib/ui/icons/icon.svelte';
	import { text } from './text';

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);
</script>

<div class="my-12 md:my-24">
	<div class="m-auto w-fit">
		<div
			class=" xl:max-w-400 text-center- m-auto grid font-medium lg:ml-0 lg:grid-cols-2 lg:text-left"
		>
			{#each text.services as s, i}
				<div
					class="lg:nth-1:border-b-2 lg:nth-2:border-b-2 lg:nth-1:border-r-2 lg:nth-3:border-r-2 max-w-160 border-b-2 pb-14 pt-10 last:border-b-0 lg:border-b-0 lg:px-20 lg:py-16"
				>
					<div class="mb-4 flex items-start justify-between gap-2 text-xl lg:mb-8 lg:text-xl">
						<div class="max-w-70 text-head">
							{s.title[lang]}
						</div>
						<div class="flex items-center opacity-30">
							<Icon class="size-12" name="service-{i + 1}" />
						</div>
					</div>
					<div class="text-block">{s.sub[lang]}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- <div class="my-12 min-h-[80svh] pb-24 pt-12 lg:pt-24">
	<div class="-mr-2.5- xl:mr-0-">
		<div class="mb-24">
			<div class="text-4xl font-medium">
				L'harmonie entre science et art dans chaque construction
			</div>
			<div class="font-semibold- mb-5 text-xl font-medium">
				{lang == 'fr' ? `Nos services` : `Our services`}
			</div>
		</div>

		<div class=" m-auto grid w-fit grid-cols-2 gap-24 font-medium leading-5 lg:ml-0">
			{#each text.services as s, i}
				<div class="max-w-140 flex-col- flex items-start gap-6">
					<div class="flex items-center opacity-30">
						<Icon class="size-6" name="service-{i + 1}" />
					</div>
					<div>
						<div class="mb-4 text-xl">{s.title[lang]}</div>
						<div class=" text-black/60">{s.sub[lang]}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div> -->
