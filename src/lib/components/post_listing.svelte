<script>
  export let posts;
</script>

{#if posts.length}
  <ul>
    {#each posts as post}
      <li>
        <h2>
          <a href="blog/{post.slug}">
            {post.title}
          </a>
        </h2>
        Published {post.publishDate}
      </li>
    {/each}
  </ul>
{/if}
