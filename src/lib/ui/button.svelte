<script>
	const { children, ...props } = $props();
</script>

<button
	{...props}
	class="text-sm font-semibold text-white bg-lime-700/80 px-3 py-1.5 {props.class}"
>
	{@render children()}
</button>
