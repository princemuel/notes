<script lang="ts">
  import { onMount } from "svelte";
  import { MediaQuery } from "svelte/reactivity";

  let theme = $state("");
  let query = new MediaQuery("prefers-color-scheme: dark", true);

  onMount(() => {
    const prefersDarkMode = query.current;
    const isManualDarkMode = document.documentElement.dataset.theme === "dark";
    if (!isManualDarkMode) settheme(prefersDarkMode ? "dark" : "light");
  });

  const settheme = (theme: string) => {
    document.documentElement.dataset.theme = theme;
    document.cookie = `__SITE_THEME__=${theme};path="/";max-age=${60 * 60 * 24 * 365}`;
    theme = theme;
  };
</script>

<li class="relative">
  {#if theme == "light"}
    <button type="button" onclick={() => settheme("dark")}>Moon</button>
  {:else}
    <button type="button" onclick={() => settheme("light")}>Sun</button>
  {/if}
</li>
