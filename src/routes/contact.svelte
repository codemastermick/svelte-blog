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
  <title>Get in touch with {owner}</title>
</svelte:head>

<h1>Get in touch with {owner}</h1>

<p><a href="mailto:codemastermick@gmail.com">Email me!</a></p>
