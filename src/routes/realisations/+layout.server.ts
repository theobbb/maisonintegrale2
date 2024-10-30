import { client } from '$lib/sanity-client';

export async function load() {
	const res = await client.fetch(`*[_type == "project"]{
    ..., 
    'imgs': imgs[]{..., 'url': asset->url}
  }|order(orderRank)`);

	res.forEach((project, i) => {
		project.i = i;
	});
	return {
		res
	};
}
