import { houses } from '$lib/houses';

const translated = {
	'/en': '/',
	'/en/about': '/a-propos',
	'/en/work': '/realisations'
};

export function reroute({ url }) {
	if (url.pathname in translated) {
		return translated[url.pathname];
	}

	const match_house = houses.list.find((h) => h.href.en == url.pathname);
	if (match_house) return match_house.href.fr;
	/*

	if (url.pathname.includes('/en/work')) {
		return url.pathname.replace('/en/work', '/realisations');
	}*/
}
