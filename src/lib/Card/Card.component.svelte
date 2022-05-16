<script lang="ts">
  import type { ICard } from "./Card";

  export let card: ICard;

  const imagePath = (): string => {
    return `/cards/${card.getSuit()}/${card.getValue()}.png`;
  };
</script>

{#if card}
  <img src={imagePath()} alt={card.toString()} />
{/if}

<style>
  img {
    width: 139px;
    height: 209px;
  }
</style>
