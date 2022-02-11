<script>
	export let title;
	export let date;
	export let categories;
	export let edited;
</script>

<svelte:head>
	<title>Codemaster's Blog - {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<h1>{title}</h1>

<span>
	<p>
		Published: {date}
		{#if edited}
			<i>(Updated {edited})</i>
		{/if}
	</p>
</span>

<slot />

{#if categories.length}
	<aside>
		<h2>Posted in:</h2>
		<ul>
			{#each categories as category}
				<li>
					<a href="/blog/categories/{category}">
						{category}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
