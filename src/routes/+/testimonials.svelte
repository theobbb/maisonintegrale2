<script>
	import Icon from '$lib/ui/icons/icon.svelte';

	import { text } from './text';
</script>

{#each text.comments as c}
	<div>
		<div class="text-lg font-medium leading-6">{c.text}</div>
		<div class="text-block mt-4 flex items-center gap-2 font-medium">
			<Icon name="user" class="text-xl opacity-40" />
			{c.from}
		</div>
	</div>
{/each}
