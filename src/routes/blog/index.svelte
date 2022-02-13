<script context="module" lang="ts">
  import { getBlogRoll } from '$lib/graphql.client';
  export const load = async ({ fetch }) => {
    // const posts = await fetch('/api/posts.json');
    // const allPosts = await posts.json();
    try {
      const res = await getBlogRoll();
      return {
        props: {
          posts: res
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
</script>

<script lang="ts">
  import PostListing from '$lib/components/post_listing.svelte';
  export let posts: PostMetadata[];
</script>

<svelte:head>
  <title>{import.meta.env.VITE_SITENAME} - Blog</title>
</svelte:head>

{#if posts.length}
  <PostListing {posts} />
{:else}
  <p>No posts published!</p>
{/if}

<!-- TODO add category listing on the right hand side -->
