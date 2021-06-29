<script context="module">
	export function load({ status }) {
		return {
			props: {
				status: status
			}
		};
	}
</script>

<script>
	export let status;
</script>

<svelte:head>
	<title>Error {status}</title>
</svelte:head>

<a class="block text-center text-gray-700" href="/">Home</a>

<h1 class="text-8xl text-center my-8 font-mono text-red-700 animate-pulse">
	{#if status === 404}
		{status} Not Found
	{:else}
		Error {status}
	{/if}
</h1>
