<script>
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="landing page" />
</svelte:head>

<section>
	<div class="bg"></div>
	<h1>
		<span class="welcome">
			<picture>
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	.bg {
		background: url('pkmn-meowth-love.webp');
	}
</style>
