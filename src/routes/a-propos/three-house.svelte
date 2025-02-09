<script>
	import { onMount } from 'svelte';
	import { quadInOut } from 'svelte/easing';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	import { debounce } from './debounce';

	let reveal = $state(false);

	let scroll = $state(0);

	const min_max = (value, min, max) => Math.min(max, Math.max(min, value));

	let last_width = -1;
	let onresize = $state(() => {});

	function create_scene() {
		onscroll();

		const canvas = document.getElementById('three-house');

		if (!canvas) return;

		const width = window.innerWidth;
		const height = window.visualViewport?.height || window.innerHeight;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);

		camera.position.set(0, 1, 6);
		camera.lookAt(0, 0, 0);

		const light = new THREE.AmbientLight(0xffffff, 1);
		scene.add(light);

		const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setSize(width, height);

		const loader = new GLTFLoader();

		loader.load('model.glb', onload, undefined, (error) => {
			console.error(error);
		});

		function onload(gltf) {
			const model = gltf.scene;
			scene.add(model);

			const house_material = new THREE.MeshBasicMaterial({
				color: '#30302d',
				opacity: 0.25,
				transparent: true
			});
			const tree_material = new THREE.MeshBasicMaterial({
				color: '#537819',
				opacity: 0.6,
				transparent: true
			});

			model.traverse((child) => {
				if (child instanceof THREE.Mesh) {
					if (child.name == 'Cube') child.material = house_material;
					else child.material = tree_material;
				}
			});

			const mixer = new THREE.AnimationMixer(model);

			const anim = gltf.animations[0];
			if (anim) {
				const action = mixer.clipAction(anim);
				action.play();
			}

			render();

			console.log();

			reveal = true;

			window.addEventListener('resize', onresize);

			function render() {
				renderer.render(scene, camera);

				const time = min_max(scroll * anim.duration, 0.01, anim.duration - 0.01);
				mixer.setTime(time);

				update_camera();

				requestAnimationFrame(render);
			}
			onresize = () => {
				if (window.innerWidth == last_width) return;
				last_width = window.innerWidth;
				const width = window.innerWidth;
				const height = window.visualViewport?.height || window.innerHeight;

				// Update camera aspect ratio
				camera.aspect = width / height;
				camera.updateProjectionMatrix();

				// Update renderer size and pixel ratio
				renderer.setSize(width, height);
				renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
				render();
			};
		}
		function update_camera() {
			const spherical = new THREE.Spherical();
			spherical.radius = scroll * -3 + 14; // Distance (m)
			spherical.theta = THREE.MathUtils.degToRad(scroll * 195 + 120); // Horizontal angle
			spherical.phi = THREE.MathUtils.degToRad(scroll * -35 + 90); // Vertical angle

			const position = new THREE.Vector3().setFromSpherical(spherical);

			camera.position.copy(position);
			camera.lookAt(0, 0, 0); // Focus on model
		}
	}

	function onscroll() {
		const progress = min_max(
			window.scrollY / (document.body.scrollHeight - window.innerHeight),
			0,
			1
		);
		scroll = quadInOut(progress);
	}

	onMount(() => {
		create_scene();
	});
</script>

<svelte:window {onscroll} {onresize} />

<div
	class="pointer-events-none fixed left-0 right-0 top-0 h-[100lvh] {reveal
		? 'opacity-60'
		: 'opacity-0'} transition duration-700 ease-in"
>
	<canvas id="three-house" width="100%" height="100%" class="h-full w-full"></canvas>
</div>
