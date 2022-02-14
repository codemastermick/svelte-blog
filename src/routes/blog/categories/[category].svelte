<script context="module">
  import { getArticlesByCategory } from '$lib/graphql.client';
  export const load = async ({ params, fetch }) => {
    // const currentCategory = params.category;
    // const response = await fetch('/api/posts.json');
    // const posts = await response.json();

    // const matchingPosts = posts.filter((post) => post.meta.categories.includes(currentCategory));

    return {
      props: {
        category: params.category,
        posts: await getArticlesByCategory(params.category)
      }
    };
  };
</script>

<script lang="ts">
  import BlogRoll from '$lib/components/blogRoll.svelte';
  export let category;
  export let posts;
</script>

<svelte:head>
  <title>{import.meta.env.VITE_SITENAME} - Posted under "{category}"</title>
</svelte:head>

{#if posts.length}
  <BlogRoll {posts} />
{:else}
  <p>No posts published under <b>{category}</b></p>
{/if}
