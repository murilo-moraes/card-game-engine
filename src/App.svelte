<script lang="ts">
  import logo from "./assets/svelte.png";
  import { StandardCard } from "./lib/Engine";
  import { CardComponent, Card } from "./lib/Engine/Card";
  import { Game } from "./lib/Regicide/Game";

  let game = new Game(1);
  let unrevealedCard = new StandardCard("clubs", "A", false);
</script>

<main>
  <h1>Regicide</h1>
  {#if game}
    <section class="stage-area">
      <section>
        <h2>Castle</h2>
        <CardComponent card={game.activeCastleCard} />
      </section>
      <section>
        <h2>Tavern</h2>
        <CardComponent card={unrevealedCard} />
      </section>
      <section>
        <h2>Discard</h2>
        {#if game.discardPileShowingCard}
          <CardComponent card={game.discardPileShowingCard} />
        {/if}
      </section>
    </section>
    <hr />
    <h2>Players Hands</h2>
    {#each game.playersHands as hand}
      <section class="cards-container">
        {#each hand.show() as card}
          <CardComponent {card} />
        {/each}
      </section>
    {/each}
  {/if}
</main>

<style>
  main {
    max-width: 1080px;
    margin: 0.5rem auto;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-family: sans-serif;
    text-align: center;
    background-color: rgb(240, 248, 255, 0.5);
  }

  .cards-container {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    flex-wrap: wrap;
    min-height: 200px;
  }

  .stage-area {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 48px;
  }
</style>
