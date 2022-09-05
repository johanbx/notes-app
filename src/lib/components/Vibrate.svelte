<script lang="ts">
  import { onMount } from "svelte";

  let elem: HTMLDivElement;

  onMount(() => {
    if (!elem) return;

    elem.style.animation = `vibrate-1 10s linear ${(Math.random() * 5000).toFixed(0)}ms infinite both`;
  });
</script>

<div bind:this={elem}>
  <slot />
</div>
