<script context="module" lang="ts">
  export const load = ({ url }) => {
    const currentRoute = url.pathname;

    return {
      props: {
        currentRoute,
        owner: import.meta.env.VITE_OWNER,
        sitename: import.meta.env.VITE_SITENAME
      }
    };
  };
</script>

<script lang="ts">
  export let owner: string;
  export let sitename: string;
</script>

<svelte:head>
  <title>{owner}'s Domain</title>
</svelte:head>

<!-- TODO change this to reference your own info instead -->
<h1>Welcome to {sitename}</h1>
<p>
  This site is based on a personal website/blog by Codemaster Mick. You can fill in this area to
  display some cool stuff about yourself if you like, and maybe direct the viewer to look around at
  the links provided.
</p>
<p>
  If you are reading this text, this copy of the site has not yet been customized and is probably
  still in development. If you are the site owner, please see the README.md file in the source for
  details on setting things up.
</p>
