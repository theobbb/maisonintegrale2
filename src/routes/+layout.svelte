<script lang="ts">
	import { page } from '$app/stores';
	import Header from './header.svelte';
	import { get_lang_state, set_lang_state } from '../lib/lang-state.svelte';
	import './style.pcss';
	import Footer from './footer.svelte';

	const { children } = $props();

	const url = $page.url.pathname;
	console.log('url', url);
	if (url.startsWith('/en')) {
		set_lang_state('en');
	} else {
		set_lang_state('fr');
	}

	const lang_state = get_lang_state();
</script>

<main class="2xl:px-28 tracking-tight md:tracking-normal xl:px-14 px-4 max-w-[1920px] m-auto">
	<Header />
	{@render children()}
	<Footer />
</main>
