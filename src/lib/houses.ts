const houses_raw = [
	{
		name: 'atelier',
		location: 'Sainte Adèle',
		designer: 'Maison Intégrale',
		client: 'Stéphane Rousseau',
		n_imgs: 18
	},
	{
		name: 'maison du cerf/house of the deer',
		location: 'Val David',
		designer: 'client',
		n_imgs: 9
	},
	{
		name: 'cottage',
		location: 'Rosemère',
		designer: 'Maison Intégrale',
		n_imgs: 4
	},
	{
		name: 'maison monette/house monette',
		location: 'Val David',
		designer: 'Maison Intégrale',
		n_imgs: 8
	},
	{
		name: 'maison du cerf 2/house of the deer 2',
		location: 'Val David',
		designer: 'client',
		n_imgs: 5
	},
	{
		name: 'maison du cerf modele/deer house model',
		location: 'Val David',
		designer: 'Maison Intégrale',
		n_imgs: 9
	},
	{
		name: 'maison de campagne/country house',
		location: 'Sainte Adèle',
		designer: 'Maison Intégrale',
		n_imgs: 3
	},
	{
		name: 'maisonnette/maisonnette',
		location: 'Sainte Adèle',
		designer: 'Maison Intégrale',
		n_imgs: 6
	}
];

function map_houses() {
	const maped = houses_raw.map((h) => {
		const name = split_lang(h.name);
		const location = split_lang(h.location);
		const designer = split_lang(h.designer);
		const client = split_lang(h.client || '');

		const slug = { fr: name?.fr.replaceAll(' ', '-'), en: name?.en.replaceAll(' ', '-') };

		const href = { fr: `/realisations/${slug.fr}`, en: `/en/work/${slug.en}` };

		return {
			name,
			location,
			designer,
			client,
			slug,
			href,
			n_imgs: h.n_imgs
		};
		function split_lang(prop: string) {
			if (!prop) return null;
			const splitted = prop.split('/');
			const fr = splitted[0];
			const en = splitted[1] ?? fr;

			return { fr, en };
		}
	});

	const houses = {
		list: maped
	};
	maped.forEach((h, i) => {
		h.prev = maped[i - 1]?.href;
		h.next = maped[i + 1]?.href;
		if (i == maped.length - 1) h.next = maped[0].href;
		if (i == 0) h.prev = maped[maped.length - 1].href;

		houses[h.href.fr] = h;
	});
	return houses;
}

export const houses = map_houses();
