const translated = {
	'/en': '/',
	'/en/about': '/a-propos',
	'/en/work': '/realisations'
};
export function reroute({ url }) {
	if (url.pathname in translated) {
		return translated[url.pathname];
	}

	if (url.pathname.startsWith('/en/work')) {
		return url.pathname.replace('/en/work', '/realisations');
	}

	/*
	const is_data_json = url.pathname.endsWith('.json');

	if (is_data_json) {
		const path = url.pathname.replace(`/__data.json`, '');
		if (path in translated) {
			return `${translated[path]}/__data.json`;
		}
	}*/
}
