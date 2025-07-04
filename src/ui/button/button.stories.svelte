<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from './button.svelte';
	const { Story } = defineMeta({ component: Button });
</script>

<Story name="Default" tags={['autodocs']} />
