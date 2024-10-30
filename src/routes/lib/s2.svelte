<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
	<!-- Grid Background -->
	<pattern id="modernGrid2" width="10" height="10" patternUnits="userSpaceOnUse">
		<path d="M 10 0 L 0 0 0 10" fill="none" class="stroke-black/20" stroke-width="0.5" />
	</pattern>

	<rect width="200" height="200" fill="url(#modernGrid2)" />

	<!-- Floor Plan -->
	<g class="stroke-lime-800/30" fill="none" stroke-width="1">
		<!-- Outer Square -->
		<rect x="40" y="40" width="120" height="120" />
		<!-- Interior Lines -->
		<path d="M 40 100 L 100 100 L 100 40" />
		<path d="M 100 160 L 100 130 L 160 130" />
		<!-- Corner Markers -->
		<circle cx="40" cy="40" r="2" class="fill-lime-800/30" />
		<circle cx="160" cy="40" r="2" class="fill-lime-800/30" />
		<circle cx="40" cy="160" r="2" class="fill-lime-800/30" />
		<circle cx="160" cy="160" r="2" class="fill-lime-800/30" />
	</g>
</svg>
