<script context="module">
	export const load = async ({ params, fetch }) => {
		const response = await fetch('/api/posts.json');
		const posts = await response.json();
		let found = [];
		posts.forEach((p) => {
			found = [...found, ...p.meta.categories];
		});
		const allCategories = [...new Set(found)];

		return {
			props: {
				allCategories: allCategories
			}
		};
	};
</script>

<script>
	export let allCategories;
</script>

<svelte:head>
	<title>Codemaster's Domain - Post categories</title>
</svelte:head>

{#if allCategories.length}
	<ul>
		{#each allCategories as category}
			<li>
				<a href="/blog/categories/{category}">
					{category}
				</a>
			</li>
		{/each}
	</ul>
{:else}
	<p>No categories found!</p>
{/if}
