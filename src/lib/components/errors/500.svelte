<script lang="ts">
  export let status: number;
  export let message: string;
</script>

<h1>{status}: {message}</h1>

<p>
  Sorry, something went wrong! We honestly aren't sure what, but we can look in to it if you raise
  an issue with the maintainer <a href="https://github.com/codemastermick/svelte-blog/issues"
    >here</a
  >.
</p>
<p>Things you could try:</p>
<ul>
  <li>Go back to the previous page</li>
  <li>Try again later</li>
</ul>
