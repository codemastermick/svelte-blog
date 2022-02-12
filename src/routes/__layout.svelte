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
  import { fade } from 'svelte/transition';
  export let currentRoute;
  export let owner: string;
</script>

<Header />
{#key currentRoute}
  <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot {owner} />
  </main>
{/key}
<Footer {owner} />
