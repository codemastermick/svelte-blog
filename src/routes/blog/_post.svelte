<script lang="ts">
  import Author from '$lib/components/author.svelte';
  export let title: string;
  export let date: string;
  export let categories: string[];
  export let edited: string;
  export let author: string;
  export let authorAvatar: string;
</script>

<svelte:head>
  <title>{import.meta.env.VITE_SITENAME} - {title}</title>
  <meta property="og:title" content={title} />
  <meta property="og:type" content="article" />
  <meta property="article:author" content={author} />
  <meta property="article:published_time" content={date} />
  <meta property="article:modified_time" content={edited} />
  {#each categories as category}
    <meta property="article:tag" content={category} />
  {/each}
</svelte:head>

<h1>{title}</h1>

<span>
  <Author name={author} avatar={authorAvatar} />
  <p class="publish">
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

<style>
  .publish {
    font-size: 0.75em;
  }
</style>
