<script lang="ts" module>
  import { tv } from "tailwind-variants";

  import type { WithElementRef } from "bits-ui";
  import type { HTMLInputAttributes } from "svelte/elements";
  import type { VariantProps } from "tailwind-variants";

  const input = tv({
    base: [
      "peer flex w-full items-center gap-2 rounded-lg transition-colors",
      "border-grey-300 text-grey-950 border bg-white px-4 py-3 text-sm",
      "shadow-xs",
      "selection:text-grey-500 placeholder:text-gray-500",
      "hover:bg-grey-50",
      "focus:ring-grey-500 focus:border-grey-950 focus:ring-4 focus:ring-offset-2",
      "autofill:bg-white focus-visible:ring-1 focus-visible:outline-none",
    ],
    variants: {
      disabled: { true: "pointer-events-none cursor-not-allowed opacity-50" },
    },
    compoundVariants: [{ disabled: true, class: "bg-grey-50 text-grey-300" }],
  });

  type InputVariants = VariantProps<typeof input>;
  type Props = Prettify<WithElementRef<HTMLInputAttributes, HTMLInputElement> & InputVariants>;
</script>

<script lang="ts">
  let { disabled, value = $bindable(), ...attrs }: Props = $props();
  // @ts-expect-error just ignore the error from the class type
  let className = input({ disabled, class: attrs.class });
  let isDisabled = $derived(disabled ?? false);
</script>

<input
  bind:value
  data-slot="input"
  {...attrs}
  placeholder="Placeholder text"
  disabled={isDisabled}
  class={className}
/>

<!-- class={cn(
		"placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
		"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
		"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
		className
	)} -->
