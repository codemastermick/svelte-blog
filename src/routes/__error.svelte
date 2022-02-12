<script context="module">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }) {
    return {
      props: {
        message: error.message,
        status // same as status: status
      }
    };
  }
</script>

<script lang="ts">
  import NotFound from '$lib/components/errors/404.svelte'; // your own Error screen component
  import GenericError from '$lib/components/errors/500.svelte'; // your own 404 screen component
  export let status: number;
  export let message: string;
</script>

<!--Note the use of == instead of ===! This accounts for a string or number -->
{#if status == 404}
  <NotFound {message} {status} />
{:else}
  <GenericError {message} {status} />
{/if}
