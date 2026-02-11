<script lang="ts">
  import { setSidebarCookieClient } from "@/lib/cookies";

  let { data, children } = $props();

  // svelte-ignore state_referenced_locally
  let state = $state(data.sidebarState);

  async function toggleSidebar() {
    state = state === "compact" ? "default" : "compact";
    await setSidebarCookieClient(state);
  }
</script>

<div class="grid h-svh grid-rows-[1fr_auto] lg:grid-cols-[auto_1fr] lg:grid-rows-1">
  <aside id="sidebar" aria-label="Sidebar" class={[]}></aside>

  <main aria-labelledby="a11ty-headline" class="">
    {@render children()}
  </main>
</div>
