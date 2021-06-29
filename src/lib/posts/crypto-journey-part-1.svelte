<script>
	import katex from 'katex/dist/katex.mjs';
	const cipherSpace = katex.renderToString('(\\mathcal{K}, \\mathcal{M}, \\mathcal{C})');
	const cipherAlgos = katex.renderToString('(\\mathbb{E}, \\mathbb{D})');
	const encAlgo = katex.renderToString(
		'\\mathbb{E} : \\mathcal{K} \\times \\mathcal{M} \\to \\mathcal{C}'
	);
	const decAlgo = katex.renderToString(
		'\\mathbb{D} : \\mathcal{K} \\times \\mathcal{C} \\to \\mathcal{M}'
	);
	const consistencyEq = katex.renderToString(
		'\\forall m \\in \\mathcal{M}, k \\in \\mathcal{K} : \\mathbb{D}(k, \\mathbb{E}(k, m)) = m'
	);
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
		integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
		crossorigin="anonymous"
	/>
</svelte:head>

<section>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit amet. Pellentesque elit
		ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Vel orci porta non pulvinar
		neque. Enim nunc faucibus a pellentesque. Enim sit amet venenatis urna cursus eget. Dui nunc
		mattis enim ut tellus elementum. Lectus sit amet est placerat in egestas. Nunc sed augue lacus
		viverra vitae. Id porta nibh venenatis cras sed felis eget velit.
	</p>

	<p class="mt-6">
		Nisi vitae suscipit tellus mauris a diam maecenas. Arcu dui vivamus arcu felis bibendum ut. Ut
		etiam sit amet nisl purus in mollis nunc sed. Nibh ipsum consequat nisl vel pretium lectus. Nisl
		suscipit adipiscing bibendum est. Sem et tortor consequat id porta nibh venenatis. Et netus et
		malesuada fames ac turpis egestas. Ac placerat vestibulum lectus mauris ultrices. Posuere lorem
		ipsum dolor sit amet consectetur adipiscing. Pellentesque massa placerat duis ultricies lacus
		sed turpis tincidunt id. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.
		Quis lectus nulla at volutpat.
	</p>
</section>

<section class="mt-6">
	<p>
		A cipher defined of {@html cipherSpace} is a pair of "efficient" algorithms {@html cipherAlgos} where
	</p>
	<ul class="list-inside">
		<li class="pl-4">{@html encAlgo}</li>
		<li class="pl-4">{@html decAlgo}</li>
	</ul>
	<p>such that <br /> <i class="pl-4">{@html consistencyEq}</i>.</p>
</section>
