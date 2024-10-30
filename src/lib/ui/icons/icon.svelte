<script>
	import { icons } from '.';
	const { name, ...props } = $props();

	const Icon = $derived(icons[name]);
</script>

{#if icons[name]}
	<Icon this={icons[name]} class="inline-block {props.class}" />
{/if}
