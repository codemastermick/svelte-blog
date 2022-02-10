<script context="module">
	export const load = async ({ params, fetch }) => {
		const currentCategory = params.category;
		const response = await fetch('/api/posts.json');
		const posts = await response.json();

		const matchingPosts = posts.filter((post) => post.meta.categories.includes(currentCategory));

		return {
			props: {
				posts: matchingPosts
			}
		};
	};
</script>

<script>
	import { page } from '$app/stores';
	import PostListing from '$lib/components/post_listing.svelte';
	export let posts;
</script>

<svelte:head>
	<title>Codemaster's Domain - Posted under "{$page.params.category}"</title>
</svelte:head>

{#if posts.length}
	<PostListing {posts} />
{:else}
	<p>No posts published under <b>{$page.params.category}</b></p>
{/if}
