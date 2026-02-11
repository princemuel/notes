<script lang="ts">
  import "temporal-polyfill/global";
  import "./globals.css";

  let { children } = $props();
</script>

<svelte:head>
  <meta
    name="description"
    content="Take control of your finances with notes. Track spending, manage budgets, reach savings goals, and gain insights into your financial health. Free personal finance app with bank-level security."
  />
  <meta
    name="keywords"
    content="personal finance, personal finance software, budget tracker, budget planner, expense tracking, track expenses, savings goals, financial planning, money management, budget app, spending tracker, financial wellness"
  />
  <meta name="robots" content="index, follow" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://notes.com" />
  <meta property="og:title" content="notes - Smart Personal Finance Management" />
  <meta
    property="og:description"
    content="Take control of your finances with notes. Track spending, manage budgets, reach savings goals, and gain insights into your financial health."
  />
  <meta property="og:site_name" content="notes" />
  <meta property="og:image" content="https://notes.com/og.png" />

  <meta name="twitter:title" content="notes - Smart Personal Finance Management" />
  <meta
    name="twitter:description"
    content="Take control of your finances with notes. Track spending, manage budgets, reach savings goals, and gain insights into your financial health."
  />
  <meta name="twitter:image" content="https://notes.com/og.png" />
</svelte:head>

{@render children()}
