<script lang="ts" module>
  import { tv } from 'tailwind-variants';

  import type { WithElementRef } from 'bits-ui';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import type { VariantProps } from 'tailwind-variants';

  export const btn = tv({
    base: 'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors',
    defaultVariants: { variant: 'primary', size: 'base' },
    variants: {
      size: { base: 'px-4 py-3', sm: 'px-3 py-2', lg: 'px-5 py-4' },
      disabled: { true: 'pointer-events-none cursor-not-allowed border-none' },
      stretch: { true: 'w-full' },
      variant: {
        base: '',
        primary: 'bg-cobalt-500 hover:bg-cobalt-700 text-white',
        secondary:
          'text-grey-600 hover:text-grey-950 bg-grey-100 hover:border-grey-300 hover:bg-white hover:shadow',
        outline:
          'text-grey-950 border-grey-950 hover:bg-grey-100 hover:text-grey-600 bg-white not-hover:border',
        destructive: 'bg-ruby-500 text-white',
      },
    },
    compoundVariants: [
      { disabled: true, class: 'bg-grey-100 text-grey-300' },
      {
        variant: ['primary', 'secondary', 'outline'],
        class: 'focus:ring-grey-400 focus:ring-2 focus:ring-offset-2',
      },
      {
        variant: ['secondary', 'outline'],
        class: 'focus:border-grey-950 focus:text-grey-950 focus:border focus:bg-white',
      },
    ],
  });

  type ButtonVariants = VariantProps<typeof btn>;
  type Props = WithElementRef<HTMLButtonAttributes> & ButtonVariants & {};
</script>

<script lang="ts">
  import { Button } from 'bits-ui';

  let { variant, size, disabled, stretch, children, ...attrs }: Props = $props();
  let isDisabled = $derived(disabled ?? false);
</script>

<Button.Root {...attrs} class={btn({ variant, size, disabled, stretch })} disabled={isDisabled}>
  {@render children?.()}
</Button.Root>
