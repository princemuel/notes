<script lang="ts">
  import { Control, Field, FieldErrors, Label } from "formsnap";
  import { superForm } from "sveltekit-superforms";
  import { zod4Client } from "sveltekit-superforms/adapters";
  import { schema } from "./schema.js";

  import Honeypot from "@/components/honeypot.svelte";

  let { data } = $props();
  // svelte-ignore state_referenced_locally
  const form = superForm(data.form, { validators: zod4Client(schema) });

  let type = $state<"password" | "text">("password");

  function handlePassword() {
    type = type === "password" ? "text" : "password";
  }

  const { form: formData, enhance } = form;
</script>

<form
  method="POST"
  class="mx-auto flex w-full max-w-2xl flex-col gap-8 rounded-xl bg-white px-8 py-12 shadow-md"
  use:enhance
>
  <h1 id="a11ty-headline" class="text-grey-900 text-4xl font-bold">Login</h1>

  <section class="grid grid-cols-6 gap-5">
    <Honeypot />

    <div class="group col-span-full flex flex-col gap-2">
      <Field {form} name="email">
        <Control>
          {#snippet children({ props })}
            <Label class="text-grey-500 text-xs font-bold">Email</Label>
            <input
              {...props}
              type="email"
              bind:value={$formData.email}
              aria-autocomplete="list"
              class="border-beige-500 text-grey-900 rounded-lg border bg-transparent px-5 py-4 outline-none autofill:bg-transparent autofill:focus:bg-transparent"
              autoComplete="email"
            />
          {/snippet}
        </Control>
        <FieldErrors class="self-end text-xs text-red-400" />
      </Field>
    </div>

    <div class="group col-span-full flex flex-col gap-2">
      <Field {form} name="password">
        <Control>
          {#snippet children({ props })}
            <Label class="text-grey-500 text-xs font-bold">password</Label>
            <div class="border-beige-500 flex items-center rounded-lg border px-5">
              <input
                {...props}
                {type}
                bind:value={$formData.password}
                aria-autocomplete="list"
                class="text-grey-900 flex-1 bg-transparent py-4 outline-none autofill:bg-transparent focus:outline-0"
                autoComplete="current-password"
              />

              <button type="button" class="text-grey-900" onclick={() => handlePassword()}>
                {#if type === "password"}
                  <!-- <IconEye /> -->
                {:else}
                  <!-- <IconEyeSlash /> -->
                {/if}
              </button>
            </div>
          {/snippet}
        </Control>
        <FieldErrors class="self-end text-xs text-red-400" />
      </Field>
    </div>
  </section>

  <button type="submit" class="bg-grey-900 rounded-lg py-4 text-center text-white"> Login </button>

  <footer class="flex items-center justify-center gap-4">
    <p class="text-grey-500 text-sm">Need to create an account?</p>
    <a href="/signup" class="text-grey-900 font-bold underline">Sign up</a>
  </footer>
</form>
