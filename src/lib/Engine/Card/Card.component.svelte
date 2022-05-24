<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Card } from "./Card";

  export let card: Card;
  let image = "";

  const dispatch = createEventDispatcher();

  function cardClicked() {
    if (card.revealed) {
      dispatchSelectedEvent();
    } else {
      card.revealed = true;
    }
  }

  function dispatchSelectedEvent() {
    dispatch("card-selected", {
      card,
    });
  }

  $: {
    image = card.revealed ? card.imageFront : card.imageBack;
  }
</script>

<div class="card">
  {#if card}
    <img src={image} alt={card.title} on:click={cardClicked} />
  {/if}
</div>

<style>
  .card {
    display: inline-block;
    cursor: pointer;
  }

  .card img {
    width: 139px;
    height: 209px;
  }
</style>
