<script>
	const { blurhash = '' } = $props();

	export let width = 32; // Width for decoding
	export let height = 32; // Height for decoding

	// Decode function to convert blurhash into pixel data
	function decodeBlurHash(blurhash, width, height) {
		// Basic decoding algorithm for BlurHash (customizable)
		const size = width * height * 4;
		const pixels = new Uint8ClampedArray(size);
		// Implement BlurHash decoding algorithm here
		// Populate `pixels` with RGBA values derived from the blurhash string

		return pixels;
	}

	// Render BlurHash as data URL for canvas display
	function renderBlurHash() {
		const pixels = decodeBlurHash(blurhash, width, height);
		const canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		const ctx = canvas.getContext('2d');

		const imageData = new ImageData(pixels, width, height);
		ctx.putImageData(imageData, 0, 0);

		return canvas.toDataURL();
	}
</script>

<canvas bind:this={canvasElement} {width} {height} style="filter: blur(10px);"></canvas>
<img src={renderBlurHash()} alt="BlurHash placeholder" style="display: none;" />
<img
	src="https://cdn.sanity.io/images/1m8675a3/production/107e0a68c6bbefd106b06211ff2f6acd0d84edc5-750x516.jpg"
	alt="Full Image"
	on:load={() => (canvasElement.style.display = 'none')}
/>
