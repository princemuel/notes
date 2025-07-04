<script lang="ts" module>
	import { tv } from 'tailwind-variants';

	import type { WithElementRef } from 'bits-ui';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { VariantProps } from 'tailwind-variants';

	export const btn = tv({
		base: 'flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors',
		defaultVariants: { variant: 'primary', size: 'base' },
		variants: {
			size: { base: 'px-4 py-3', sm: 'px-3 py-2', lg: 'px-5 py-4' },
			disabled: { true: 'bg-grey-50 text-grey-300 pointer-events-none cursor-not-allowed' },
			stretch: { true: 'w-full' },
			variant: {
				primary: 'bg-cobalt-500 hover:bg-cobalt-700 text-white'
			}
		}
	});

	type ButtonVariants = VariantProps<typeof btn>;
	type Props = WithElementRef<HTMLButtonAttributes> & ButtonVariants & {};
</script>

<script lang="ts">
	import { Button } from 'bits-ui';

	let { variant, size, disabled, stretch, children, ...attrs }: Props = $props();
</script>

<Button.Root {...attrs} class={btn({ variant, size, disabled, stretch })} {disabled}>
	{@render children?.()}
</Button.Root>
