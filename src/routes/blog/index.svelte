<script context="module">
	export const load = async ({ fetch }) => {
		const posts = await fetch('/api/posts.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script>
	import PostListing from '$lib/components/post_listing.svelte';
	export let posts;
</script>

{#if posts.length}
	<PostListing {posts} />
{:else}
	<p>No posts published!</p>
{/if}
