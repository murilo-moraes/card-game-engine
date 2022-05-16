<script lang="ts">
  import logo from "./assets/svelte.png";
  import { CardComponent } from "./lib/Card";
  import { Deck } from "./lib/Deck";

  const deck = Deck().shuffle();
  let cards = deck.deal(52);
</script>

<main>
  <h1>Card Game</h1>
  {#each cards as card}
    <CardComponent {card} />
  {/each}
</main>

<style>
  main {
    width: 1080px;
    margin: 0px auto;
    font-family: sans-serif;
    text-align: center;
  }
</style>
