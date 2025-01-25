<script>
	const { active, children, ...props } = $props();
</script>

<a
	{...props}
	class="{props.class} {active
		? 'underline decoration-2 underline-offset-4 decoration-black/20'
		: ''} "
>
	{@render children()}
</a>
