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
  export let owner: string;
</script>

<footer>Site owned by {owner}</footer>

<style lang="scss">
  footer {
    padding: 1rem;
    background: lightskyblue;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
</style>
