<script context="module" lang="ts">
  export const load = () => {
    return {
      props: {
        owner: import.meta.env.VITE_OWNER
      }
    };
  };
</script>

<script lang="ts">
  export let owner: string;
</script>

<svelte:head>
  <title>Who is {owner}?</title>
</svelte:head>

<h1>Hi, I'm {owner}!</h1>

<p>This will be filled in later with information about myself.</p>
