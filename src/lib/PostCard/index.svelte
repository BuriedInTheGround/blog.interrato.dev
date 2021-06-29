<script>
	export let post;
</script>

<a class="p-6 hover:bg-gray-50 flex flex-col items-center" href="/{post.slug}">
	<h3 class="text-xl font-semibold text-center">{post.title}</h3>
	<p class="text-center">{new Date(post.publishedOn).toUTCString().slice(0, 11)}</p>
</a>
