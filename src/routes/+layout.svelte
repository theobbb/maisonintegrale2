<script lang="ts">
	import { page } from '$app/stores';
	import Header from './+/header.svelte';
	import { get_lang_state, set_lang_state } from '../lib/lang-state.svelte';
	import '$lib/style.css';
	import Footer from './+/footer.svelte';
	import { onMount } from 'svelte';

	const { children } = $props();

	const url = $page.url.pathname;

	if (url.startsWith('/en')) {
		set_lang_state('en');
	} else {
		set_lang_state('fr');
	}

	const lang_state = get_lang_state();

	onMount(() => {
		//document.
	});
</script>

<main
	class="**:border-black/10 m-auto max-w-[1920px] px-4 tracking-tight md:tracking-normal xl:px-14 2xl:px-28"
>
	<Header />
	<div class="min-h-[calc(100lvh-17rem)]">{@render children()}</div>
	<Footer />
</main>
