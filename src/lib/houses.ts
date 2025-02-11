const names = [
	'atelier/atelier',
	'maison-du-cerf/house-of-the-deer',
	'cottage/cottage',
	'maison-monette/house-monette',
	'maison-du-cerf-2/house-of-the-deer-2',
	'maison-du-cerf-modele/deer-house-model',
	'maison-de-campagne/country-house',
	'maisonnette/maisonnette'
];

export const houses = names.map((h) => {
	const splitted = h.split('/');
	return { fr: `/realisations/${splitted[0]}`, en: `/en/work/${splitted[1]}` };
});
