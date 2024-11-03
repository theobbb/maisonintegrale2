<script>
	import { page } from '$app/stores';
	import { get_lang_state } from '$lib/lang-state.svelte';

	const lang_state = get_lang_state();
	const lang = $derived(lang_state.lang);

	const messages = {
		'404': { fr: `Page introuvable`, en: 'Page not found' },
		'500': { fr: `Erreur interne du serveur`, en: 'Internal server error' },
		'503': { fr: `Service indisponible`, en: 'Service unavailable' }
	};

	const error_status = $derived($page.status in messages ? $page.status : '500');
</script>

<div class="py-24 w-fit m-auto flex flex-col items-center gap-3">
	<div class="text-3xl font-semibold">{messages[error_status][lang]}</div>
	<a href={lang == 'fr' ? '/' : '/en'} class="font-medium border-b"
		>{lang == 'fr' ? "Retour à la page d'accueil" : 'Back to home'}</a
	>
</div>
