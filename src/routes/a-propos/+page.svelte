<script>
	import { get_lang_state } from '../../lib/lang-state.svelte';
	import { text } from './text';
	import ModelViewer from './model-viewer.svelte';
	import Icon from '$lib/ui/icons/icon.svelte';
	import ThreeHouse from './three-house.svelte';

	const lang_state = get_lang_state();

	lang_state.set_href('/a-propos', '/en/about');

	const lang = $derived(lang_state.lang);
	const fr = $derived(lang == 'fr');

	let scrolled = $state(false);

	function onscroll() {
		if (window.scrollY > 100) scrolled = true;
	}
</script>

<svelte:head>
	<title>
		Maison Intégrale | {lang == 'fr' ? `À propos` : `About`}
	</title>
	<meta
		name="description"
		content={lang == 'fr'
			? `Un physicien + une designer qui unissent leurs talents | Découvrez les valeurs et la démarche de Maison Intégrale.`
			: `A physicist + a designer combining their talents | Discover the values and approach of Maison Intégrale.`}
	/>
</svelte:head>

<svelte:window {onscroll} />

<!-- <ModelViewer /> -->
<ThreeHouse />
<div
	class="text-block fixed bottom-8 right-24 flex items-center gap-4 max-md:hidden {scrolled
		? 'translate-y-4 opacity-0'
		: ''} transition duration-500 ease-out"
>
	<div>
		<Icon name="ArrowLeft" class="-rotate-90 text-2xl" />
	</div>
	<div class="flex flex-col">
		<div>Défilez pour découvrir</div>
		<div>notre démarche</div>
	</div>
</div>

<div class=" mt-14 grid-cols-1 pb-44 lg:mr-10 lg:mt-14 xl:mt-24">
	<div class="space-y-176 text-block">
		<div class="space-y-44">
			<div>
				<div class="text-head">MARC BAILLARGEON</div>

				<div class="pt-0.5 opacity-70">
					<div class="mb-4">
						{#if fr}
							Constructeur{:else}Builder{/if}
					</div>
					<div class="flex flex-col-reverse md:flex-col">
						<div>
							{#if fr}Entrepreneur en construction depuis 20 ans +{:else}A construction contractor
								with over twenty years of experience.{/if}
						</div>
						<div class="">
							{#if fr}Ph.D. en physique des particules
							{:else}
								Ph.D. in particle physics.
							{/if}
						</div>
					</div>
				</div>

				<div class=" mt-14">
					{#if fr}
						<div class="max-w-127">
							Marc est est à la fois un homme de science et un homme de terrain. Il est reconnu pour
							son esprit rigoureux et son engagement à livrer des habitations à la pointe de
							l'efficacité énergétique.
						</div>
						<br /> <br />

						<div class="max-w-156">
							De la conception à la construction, en passant par toutes les étapes intermédiaires,
							il supervise personnellement chaque étape de ses projets jusqu'au rendu final.
						</div>
					{:else}
						<div class="max-w-127">
							Marc is both a scientist and a hands-on professional. He is known for his rigorous
							mindset and dedication to delivering homes at the forefront of energy efficiency.
						</div>
						<br />
						<br />
						<div class="max-w-146">
							From design to construction, including all the intermediate steps, he personally
							oversees every stage of his projects until the final result.
						</div>
					{/if}
				</div>
			</div>

			<div>
				<div class="text-head">MARISOL SARRAZIN</div>

				<div class="pt-0.5 opacity-70">
					<div class="mb-4">
						{#if fr}Conceptrice{:else}Designer{/if}
					</div>
					<div>
						{#if fr}Artiste reconnue au Québec{:else}A recognized artist in Quebec.{/if}
					</div>
					<div class="">
						{#if fr}Dimplômée en design{:else}Graduate in design.{/if}
					</div>
					<div class="">
						{#if fr}Conférencière{:else}Speaker{/if}
					</div>
				</div>
				<div class="max-w-120 mt-14">
					{#if fr}
						Marisol apporte sa contribution à la dimension stylistique globale de chaque projet,
						ainsi qu'à son ergonomie et à l'agencement pratique et esthétique des espaces.
					{:else}
						Marisol contributes to the overall stylistic dimension of each project, as well as to
						its ergonomics and the practical and aesthetic arrangement of the spaces.
					{/if}
				</div>
			</div>
		</div>

		<div class="">
			<div class="text-head">
				{#if fr}Créer de la valeur, avec passion et rigueur{:else}Creating value with passion and
					precision.{/if}
			</div>

			<div class=" mt-7">
				<div class="max-w-194 mt-7">
					{#if fr}
						Nous partageons avec notre clientèle une vision commune : bâtir des habitations qui
						respectent et intègrent la nature comme un véritable partenaire vivant. L’avenir de
						notre planète repose sur notre capacité à concevoir des espaces durables et
						intelligents, où la science joue un rôle clé. Grâce à une approche rigoureuse et
						innovante, nous mettons notre expertise au service de projets qui allient performance,
						esthétique et respect de l’environnement.
					{:else}We share a common vision with our clients: to build homes that respect and
						integrate nature as a true living partner. The future of our planet depends on our
						ability to design sustainable and intelligent spaces, where science plays a key role.
						With a rigorous and innovative approach, we bring our expertise to projects that combine
						performance, aesthetics, and environmental respect.{/if}
				</div>
				<br />
				<div class="max-w-190">
					{#if fr}
						Chaque projet est une aventure unique, avec ses propres défis et aspirations. Nous vous
						accompagnons tout au long de votre démarche, en transformant vos idées en une maison à
						la fois fonctionnelle et harmonieuse. Notre approche repose sur un cadre réaliste qui
						prend en compte toutes les contraintes, qu’elles soient techniques, budgétaires ou
						écologiques, afin d’atteindre l’équilibre parfait entre ambition et faisabilité.
					{:else}Each project is a unique journey, with its own challenges and aspirations. We
						accompany you throughout the process, transforming your ideas into a home that is both
						functional and harmonious. Our approach is based on a realistic framework that takes
						into account all constraints—whether technical, budgetary, or ecological—to achieve the
						perfect balance between ambition and feasibility.{/if}
				</div>
				<br />
				<div class="max-w-204">
					{#if fr}
						Pour préserver cette exigence de qualité, nous choisissons de nous investir pleinement
						dans un nombre restreint de projets. En nous limitant à deux ou trois réalisations par
						année, nous assurons une attention minutieuse à chaque détail et une présence constante
						à chaque étape, garantissant ainsi un résultat à la hauteur de vos attentes.
					{:else}To maintain this high standard of quality, we choose to fully invest in a limited
						number of projects. By limiting ourselves to only two or three projects per year, we
						ensure meticulous attention to every detail and constant presence at each stage,
						guaranteeing a result that meets your expectations.{/if}
				</div>
			</div>
		</div>
		<div class="space-y-44">
			<div class="">
				<div class="text-head">
					{#if fr}Démarche technique{:else}Technical approach{/if}
				</div>

				<div class="max-w-154 mt-7">
					{#if fr}
						Chaque projet repose sur une analyse approfondie du plan architectural, optimisé en
						fonction de la consommation énergétique, des habitudes de vie et des besoins, tant
						actuels qu’à venir. En collaboration avec le propriétaire, nous établissons un
						calendrier précis et un plan d’exécution rigoureux, accompagnés d’un budget adapté aux
						attentes. Une attention minutieuse est portée à chaque détail lors de la construction,
						garantissant une réalisation fidèle à la vision initiale.
					{:else}Each project begins with a thorough analysis of the architectural plan, optimized
						for energy consumption, lifestyle habits, and both current and future needs. In
						collaboration with the client, we establish a precise timeline, a detailed construction
						plan, and a budget that aligns with their requests. Every detail is carefully considered
						during the construction phase to ensure the project stays true to the original vision
						while meeting technical and functional requirements.{/if}
				</div>
			</div>
			<div class="">
				<div class="text-head">
					{#if fr}Démarche esthétique{:else}Aesthetic approach{/if}
				</div>

				<div class="max-w-164 mt-7">
					{#if fr}
						L’élaboration du projet débute par un dialogue avec le propriétaire afin de cerner ses
						besoins, ses attentes et ses préférences. Les éléments clés – topographie, orientation,
						dimensions, perspectives visuelles, circulation des espaces, proportions et ouvertures –
						sont intégrés dès la conception pour assurer une harmonie parfaite. Chaque fenêtre
						devient alors un tableau vivant, une connexion privilégiée avec la nature environnante.
						L’objectif est d’amplifier la beauté du site existant et de le transformer, étape par
						étape, en un lieu de vie encore plus inspirant.
					{:else}The design process begins with a consultation to understand the client's needs,
						expectations, and preferences. Key elements such as topography, orientation, dimensions,
						visual perspectives, circulation areas, and proportions of spaces and openings are
						carefully integrated from the outset. Each window is treated as a frame, offering a view
						of nature and enhancing the connection to the surroundings. The goal is to transform an
						already beautiful natural space into an even more inspiring and harmonious living
						environment, step by step.{/if}
				</div>
			</div>
		</div>
	</div>
</div>
