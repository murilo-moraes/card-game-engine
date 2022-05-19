<script lang="ts">
  import type { ICard } from "./Card";

  export let card: ICard;
</script>

{#if card}
  <img src={card.image} alt={card.title} />
{/if}

<style>
  img {
    width: 139px;
    height: 209px;
  }
</style>
