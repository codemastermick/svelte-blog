<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        message: error.message,
        status // same as status: status
      }
    };
  }
</script>

<script>
  import NotFound from '$lib/components/errors/404.svelte'; // your own Error screen component
  import GenericError from '$lib/components/errors/500.svelte'; // your own 404 screen component
  export let message;
  export let status;
</script>

{#if status == 404}
  <NotFound />
{:else}
  <GenericError {message} {status} />
{/if}
