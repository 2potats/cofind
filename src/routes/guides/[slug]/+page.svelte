<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section class="container mx-auto mt-28 p-12 bg-white rounded shadow-lg">
	<article class="leading-8">
		<h1 class="my-4 text-4xl font-bold leading-tight">{data.title}</h1>
		<div class=" ">{@html data.content}</div>
	</article>
</section>
