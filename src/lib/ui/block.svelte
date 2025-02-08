<script>
	const { text, spacing = 1.5, ...props } = $props();
</script>

<div class="text-block whitespace-pre-line {props.class}">
	{#each text as p}
		<p style="">
			{#each p.children as span}
				<span>{span.text}</span>
			{/each}
		</p>
		{#if p.children.length == 1 && p.children[0].text == ''}
			<div style="margin-bottom: {spacing}rem;"></div>
		{/if}
	{/each}
</div>
