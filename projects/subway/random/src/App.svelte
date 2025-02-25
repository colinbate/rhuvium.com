<script lang="ts">
  import { CATEGORY, SAUCE, TOPPING } from "./lib/data";
  import { trueRandomSub, createRandomSub } from "./lib/create";
  import type { Sub } from "./lib/subs";
  let exclude = $state({
    category: [],
    sauce: [],
    topping: [],
  });
  let sub: Sub | undefined = $state();
</script>

{#if sub}
  <div>
    <h2>
      {sub.type?.name} on {sub.toasted ? "toasted " : ""}{sub.bread?.name} with {sub
        .cheese?.name} cheese
    </h2>
    <strong style="padding-top: 1rem; display: block;">Toppings:</strong>
    <ul>
      {#each sub.toppings as t}
        <li>{t.name}</li>
      {/each}
      {#each sub.sauces as t}
        <li>{t.name}</li>
      {/each}
    </ul>
    <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
      <strong>Price for footlong: </strong><span
        >{sub.getPrice("footlong")}</span
      >
    </div>
  </div>
  <button onclick={() => (sub = undefined)}>Clear</button>
{:else}
  <section>
    <h2>For the fearless:</h2>
    <button onclick={() => (sub = trueRandomSub())}>Truly Random!</button>

    <h2>Preferences:</h2>
    <p>
      Just check the boxes next to the items that you <strong
        >refuse to eat</strong
      > &mdash; if you won't eat more than you will eat, maybe this isn't the best
      tool for you.
    </p>

    <h3>Categories</h3>
    <ul>
      {#each CATEGORY as cat}
        <li>
          <input type="checkbox" bind:group={exclude.category} value={cat.id} />
          {cat.name}
        </li>
      {/each}
    </ul>

    <h3>Toppings</h3>
    <ul>
      {#each TOPPING as top}
        <li>
          <input type="checkbox" bind:group={exclude.topping} value={top.id} />
          {top.name}
        </li>
      {/each}
    </ul>

    <h3>Sauces</h3>
    <ul>
      {#each SAUCE as ss}
        <li>
          <input type="checkbox" bind:group={exclude.sauce} value={ss.id} />
          {ss.name}
        </li>
      {/each}
    </ul>

    <br />
    <button onclick={() => (sub = createRandomSub(exclude))}
      >Make Me A Sub!</button
    >
    <div class="note">
      OK this is now different than the top button! This actually takes into
      consideration the ommissions you require above. And it performs some basic
      sanity checks on the sub to at least make it edible. It is still possible
      to get a sub with 5 sauces say &mdash; but much less likely now.
    </div>
  </section>
{/if}
