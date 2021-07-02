<script context="module">
	export async function load({ page, fetch }) {
		const url = `/${page.params.slug}.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					post: await res.json()
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
	import PostTemplate from '$lib/posts/post-empty-template.svelte';
	import CryptoJourneyPart1 from '$lib/posts/crypto-journey-part-1.svelte';

	export let post;

	let PostContent;

	switch (post.slug) {
		case 'crypto-journey-part-1':
			PostContent = CryptoJourneyPart1;
			break;
		default:
			PostContent = PostTemplate;
	}
</script>

<svelte:head>
	<title>{post.title} — interrato · blog</title>
	<meta name="title" content="{post.title} — interrato · blog" />
	<meta name="description" content={post.description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://blog.interrato.dev/{post.slug}" />
	<meta property="og:title" content="{post.title} — interrato · blog" />
	<meta property="og:description" content={post.description} />
	<meta property="og:image" content="/header.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://blog.interrato.dev/{post.slug}" />
	<meta property="twitter:title" content="{post.title} — interrato · blog" />
	<meta property="twitter:description" content={post.description} />
	<meta property="twitter:image" content="/header.png" />
</svelte:head>

<section>
	<a class="block md:text-left text-center text-gray-700" href="/">Home</a>
	<h1 class="font-serif text-gray-800 text-4xl text-center my-4">{post.title}</h1>

	<time datetime={post.publishedOn} class="block text-gray-700 text-lg text-center">
		{new Date(post.publishedOn).toUTCString().slice(0, 11)}
	</time>
</section>

<section class="mt-4 py-4 flex justify-center">
	<div class="text-lg antialiased max-w-prose">
		<svelte:component this={PostContent} />
	</div>
</section>
