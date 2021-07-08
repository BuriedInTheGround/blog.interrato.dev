<script>
	import '../app.postcss';

	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
	import GoMarkGithub from 'svelte-icons/go/GoMarkGithub.svelte';
</script>

<main class="p-4 max-w-6xl mx-auto">
	<slot />
</main>

<footer class="static inset-x-0 bottom-0 m-6 flex place-content-center gap-4">
	<div class="w-8 h-8 text-gray-800">
		<a href="https://twitter.com/BuriedInTheGnd" rel="noopener noreferrer external" target="_blank"
			><FaTwitter /></a
		>
	</div>
	<div class="w-8 h-8 text-gray-800">
		<a
			href="https://github.com/BuriedInTheGround"
			rel="noopener noreferrer external"
			target="_blank"><GoMarkGithub /></a
		>
	</div>
</footer>
