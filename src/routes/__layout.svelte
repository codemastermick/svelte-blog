<script context="module">
  export const load = ({ url }) => {
    const currentRoute = url.pathname;

    return {
      props: {
        currentRoute,
        owner: import.meta.env.VITE_OWNER
      }
    };
  };
</script>

<script lang="ts">
  import Header from '$lib/components/header.svelte';
  import Footer from '$lib/components/footer.svelte';
  import '$lib/styles/style.scss';
  import { fade, fly } from 'svelte/transition';
  export let currentRoute;
  export let owner: string;
</script>

<Header />
{#key currentRoute}
  <main in:fly={{ duration: 150, delay: 150, x: 500 }} out:fade={{ duration: 150 }}>
    <slot {owner} />
  </main>
{/key}
<Footer {owner} />
