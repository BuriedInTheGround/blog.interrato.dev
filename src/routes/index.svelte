<script context="module">
	export const prerender = true;

	export async function load({ fetch }) {
		const url = `/index.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					posts: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import PostCard from '$lib/PostCard/index.svelte';

	export let posts;

	const birthDate = new Date('1999/01/28');
	const ageMillis = Math.abs(new Date() - birthDate);
	const age = Math.floor(ageMillis / 1000 / 3600 / 24 / 365.25);
</script>

<svelte:head>
	<title>interrato · blog</title>
	<meta name="title" content="interrato · blog" />
	<meta
		name="description"
		content="I'm a software developer and undergraduate student of computer engineering!"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://blog.interrato.dev" />
	<meta property="og:title" content="interrato · blog" />
	<meta
		property="og:description"
		content="I'm a software developer and undergraduate student of computer engineering!"
	/>
	<meta property="og:image" content="/header.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://blog.interrato.dev" />
	<meta property="twitter:title" content="interrato · blog" />
	<meta
		property="twitter:description"
		content="I'm a software developer and undergraduate student of computer engineering!"
	/>
	<meta property="twitter:image" content="/header.png" />
</svelte:head>

<section>
	<h1 class="font-serif text-gray-800 text-4xl text-center my-4">interrato · blog</h1>

	<h2 class="text-gray-700 text-sm text-center">
		Hi! I'm <a href="/about" class="no-underline text-indigo-600">Simone Ragusa</a>. I'm {age} and I
		live in Italy.
	</h2>
</section>

<section class="mt-4 py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#if posts.length > 0}
		{#each posts as post}
			<PostCard {post} />
		{/each}
	{:else}
		<p class="text-xl text-center font-mono">No posts found.</p>
	{/if}
</section>
