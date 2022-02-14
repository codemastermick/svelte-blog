<script context="module" lang="ts">
  import { getArticleBySlug } from '$lib/graphql.client';
  export async function load(page) {
    try {
      const article = (await getArticleBySlug(page.params.slug)) as PostMetadata;
      let found = [];
      article.categories.forEach((category) => {
        found.push(category.tag);
      });
      return {
        props: {
          title: article.title,
          date: article.publishDate,
          categories: [...new Set(found)],
          edited: article.updatedAt,
          author: article.author.name,
          authorAvatar: article.author.avatarURL,
          body: article.body
        }
      };
    } catch (error) {
      console.log(error);
    }
  }
</script>

<script>
  import Author from '$lib/components/author.svelte';
  export let title;
  export let date;
  export let categories;
  export let edited;
  export let author;
  export let authorAvatar;
  export let body;
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

{body}

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
