<script lang="ts">
  export let name: string;
  export let avatar: string;
  if (name === undefined) {
    name = 'posted by admin';
  }
  if (avatar === undefined) {
    avatar = '../static/generic_avatar.png';
  }
</script>

<span>
  {name}
  <img src={avatar} alt="Avatar for {name}" />
</span>

<style lang="scss">
  img {
    width: 1.5em;
  }
</style>
