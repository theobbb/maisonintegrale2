<script>
	const { children, ...props } = $props();
</script>

<button
	{...props}
	class="cursor-pointer border-2 bg-white/20 px-3 py-1.5 text-sm font-bold tracking-wide transition hover:bg-black/10 {props.class}"
>
	{@render children()}
</button>
