<script>
	const { src = '', alt = '', ...props } = $props();

	const splitted = src.split('/');
	const folder = splitted[1];
	const file = splitted[2];

	const medias = [400, 800, 1200, 1600];

	const srcset = medias.map((size) => `/images/${folder}/${size}/${file} ${size}w`).join(', ');

	const sizes = medias
		.map((size, i) => (i == medias.length - 1 ? `${size}px` : `(max-width: ${size}px) ${size}px`))
		.join(', ');
</script>

<picture {...props} class="{props.class} relative flex items-center justify-center">
	<source {srcset} {sizes} />
	<img class="max-h-[80svh] object-contain" src="/images{src}" {alt} loading="lazy" />
</picture>
