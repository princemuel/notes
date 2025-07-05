<script lang="ts" module>
  import { tv } from "tailwind-variants";

  import type { ComponentProps } from "svelte";
  import type { VariantProps } from "tailwind-variants";

  export const button = tv({
    base: [
      "inline-flex items-center justify-center gap-2 rounded-lg transition-colors",
      "text-sm font-medium",
    ],
    defaultVariants: { variant: "primary", size: "base" },
    variants: {
      size: { base: "px-4 py-3", sm: "px-3 py-2", lg: "px-5 py-4" },
      disabled: { true: "pointer-events-none cursor-not-allowed border-none" },
      stretch: { true: "w-full" },
      variant: {
        base: "",
        primary: "bg-cobalt-500 hover:bg-cobalt-700 text-white",
        secondary:
          "text-grey-600 hover:text-grey-950 bg-grey-100 hover:border-grey-300 hover:bg-white hover:shadow-xs",
        outline:
          "text-grey-950 border-grey-950 hover:bg-grey-100 hover:text-grey-600 bg-white not-hover:border",
        destructive: "bg-ruby-500 text-white",
      },
    },
    compoundVariants: [
      { disabled: true, class: "bg-grey-100 text-grey-300" },
      {
        variant: ["primary", "secondary", "outline"],
        class: "focus:ring-grey-400 focus:ring-2 focus:ring-offset-2",
      },
      {
        variant: ["secondary", "outline"],
        class: "focus:border-grey-950 focus:text-grey-950 focus:border focus:bg-white",
      },
    ],
  });

  type ButtonVariants = VariantProps<typeof button>;
  type Props = Prettify<ComponentProps<typeof ButtonPrimitive.Root> & ButtonVariants>;
</script>

<script lang="ts">
  import { Button as ButtonPrimitive } from "bits-ui";

  let { variant, size, disabled, stretch, children, ...attrs }: Props = $props();
  // @ts-expect-error just ignore the error from the class type
  let className = button({ variant, size, disabled, stretch, class: attrs.class });
</script>

<ButtonPrimitive.Root {...attrs} class={className} {disabled}>
  {@render children?.()}
</ButtonPrimitive.Root>
