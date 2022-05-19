<script lang="ts">
  import logo from "./assets/svelte.png";
  import { CardComponent } from "./lib/Card";
  import { StandardDeck } from "./lib/StandardDeck";

  const standardDeck = StandardDeck.createCompleteDeck().shuffle().shuffle();
  let cards = standardDeck.deal(4);
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
