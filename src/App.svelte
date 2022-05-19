<script lang="ts">
  import logo from "./assets/svelte.png";
  import { CardComponent, Card } from "./lib/Card";
  import { StandardDeck } from "./lib/StandardDeck";

  const standardDeck = StandardDeck.createCompleteDeck().shuffle().shuffle();
  let tableCards: Card[] = standardDeck.deal(4, { revealed: true });
  let handCards: Card[] = [];

  function cardSelected(event) {
    const card: Card = event.detail.card;
    console.log(card.title);
    handCards = [...handCards, card];
    tableCards = tableCards.filter((c) => c.id !== card.id);
  }

  function deal() {
    tableCards = [...tableCards, ...standardDeck.deal(1, { revealed: true })];
  }
</script>

<main>
  <h1>Table</h1>
  <section class="cards-container">
    {#each tableCards as card}
      <CardComponent {card} on:card-selected={cardSelected} />
    {/each}
  </section>
  <h1>Hand</h1>
  <section class="cards-container">
    {#each handCards as card}
      <CardComponent {card} />
    {/each}
  </section>
  <button on:click={deal}>Deal</button>
</main>

<style>
  main {
    width: 1080px;
    margin: 0px auto;
    font-family: sans-serif;
    text-align: center;
  }

  .cards-container {
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    flex-wrap: wrap;
    min-height: 200px;
  }
</style>
