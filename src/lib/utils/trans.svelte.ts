import { get_lang_state } from '../lang-state.svelte';

export function trans(fr: string, en: string) {
	const lang = get_lang_state();

	return lang.lang === 'fr' ? fr : en;
}
