export async function load_img(src: string): Promise<HTMLImageElement> {
	const img = new Image();

	return new Promise((resolve, reject) => {
		img.onload = () => resolve(img);
		img.onerror = reject;
		img.src = src;

		if (img.complete) resolve(img);

		img.addEventListener('load', () => {
			resolve(img);
		});

		img.addEventListener('error', (err) => {
			reject(err);
		});
	});
}
