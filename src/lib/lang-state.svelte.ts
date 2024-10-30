import { onNavigate } from '$app/navigation';
import { getContext, setContext } from 'svelte';

export const lang_state = (initial_lang) => {
	let state = $state(initial_lang);
	let href_state = $state({
		fr: '/',
		en: '/en'
	});

	onNavigate((nav) => {
		const url = nav.to.url.pathname;

		if (url.startsWith('/en')) {
			state = 'en';
		} else {
			state = 'fr';
		}
	});

	return {
		set(new_state: 'fr' | 'en') {
			state = new_state;
		},
		get param() {
			return state === 'en' ? '/en' : '';
		},
		get lang() {
			return state;
		},
		toggle() {
			state = state === 'fr' ? 'en' : 'fr';
		},
		set_href(fr: string, en: string) {
			if (!state) return;
			href_state = {
				fr,
				en
			};
		},
		get href() {
			return href_state;
		}
	};
};

const LANG_KEY = Symbol('LANG_KEY');

export function set_lang_state(initial_lang) {
	return setContext(LANG_KEY, lang_state(initial_lang));
}
export function get_lang_state() {
	return getContext<ReturnType<typeof set_lang_state>>(LANG_KEY);
}

export function get_lang() {
	const lang_state = get_lang_state();
	return lang_state.lang;
}

export function l2(fr: string, en: string) {
	const lang = get_lang_state();

	return lang.lang === 'fr' ? fr : en;
}
