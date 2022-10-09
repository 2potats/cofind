<script>
	import { Posts, getSlugs } from '$lib/data';
	const slugs = getSlugs();
</script>

<svelte:head>
	<title>Guides</title>
	<meta name="description" content="Guides by Rayse" />
</svelte:head>

<div class="pt-24">
	<section class="py-8">
		<div class="container max-w-5xl flex flex-wrap justify-center text-black mx-auto m-8">
			{#each slugs as slug, i}
				<div
					class="md:w-2/5 sm:w-full m-5 rounded overflow-hidden flex flex-col bg-white shadow-xl"
				>
					<!-- <img class="max-h-72 max-w-sm w-auto" src={Posts[slug].img} alt="article photo" /> -->
					<a href="guides/{slug}">
						<div
							class="bg-contain bg-center bg-no-repeat h-64"
							style="background-image: url({Posts[slug].img})"
						/>
						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2">{Posts[slug].title}</div>
							<!-- <p class="text-gray-700 text-base">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
							Maiores et perferendis eaque, exercitationem praesentium nihil.
						</p> -->
						</div>
					</a>
					<div class="px-6 pt-4 pb-2 mt-auto">
						{#each Posts[slug].tags as tag, i}<span
								class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>#{tag}</span
							>{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>
