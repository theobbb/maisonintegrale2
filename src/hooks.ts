const translated = {
	'/en': '/',
	'/en/about': '/a-propos',
	'/en/work': '/realisations'
};
export function reroute({ url }) {
	if (url.pathname in translated) {
		return translated[url.pathname];
	}

	if (url.pathname.includes('/en/work')) {
		console.log('hooks', url.pathname);
		return url.pathname.replace('/en/work', '/realisations');
	}
}
