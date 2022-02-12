<script context="module" lang="ts">
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

<script lang="ts">
  import PostListing from '$lib/components/post_listing.svelte';
  export let posts;
</script>

<svelte:head>
  <title>{import.meta.env.VITE_SITENAME} - Blog</title>
</svelte:head>

{#if posts.length}
  <PostListing {posts} />
{:else}
  <p>No posts published!</p>
{/if}
