<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from './button.svelte';

  const { Story } = defineMeta({
    title: 'Components/Button',
    component: Button,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component: 'A versatile button component built with bits-ui and tailwind-variants.',
        },
      },
    },
    tags: ['autodocs'],
    args: { variant: 'primary', size: 'base', disabled: false, class: '' },
    argTypes: {
      size: {
        control: 'select',
        options: ['base', 'sm', 'lg'],
        description: 'The size of the button',
      },
      disabled: { control: 'boolean', description: 'Disables the button' },
      class: { control: 'text', description: 'Additional CSS classes' },
      variant: {
        control: 'select',
        options: ['base', 'primary', 'outline', 'secondary'],
        description: 'The visual variant of the button',
      },
    },
  });
</script>

<script lang="ts">
  import { IconRefresh } from '$lib/assets/icons';
</script>

<Story name="Variant:::Base" args={{ variant: 'base' }} tags={['autodocs']}>Base Button</Story>

<Story name="Variant:::Primary" args={{ variant: 'primary' }} tags={['autodocs']}
  >Primary Button</Story
>

<Story name="Variant:::Secondary" args={{ variant: 'secondary' }} tags={['autodocs']}>
  Secondary Button
</Story>

<Story name="Variant:::Outline" args={{ variant: 'outline' }} tags={['autodocs']}>
  <IconRefresh class="text-2xl text-inherit" /><span>Outline Button</span>
</Story>

<Story name="Variant:::Destructive" args={{ variant: 'destructive' }} tags={['autodocs']}>
  Destructive Button
</Story>

<Story name="Size:::Base" args={{ size: 'base' }} tags={['autodocs']}>Base Button</Story>
<Story name="Size:::Large" args={{ size: 'lg' }} tags={['autodocs']}>Large Button</Story>
<Story name="Size:::Small" args={{ size: 'sm' }} tags={['autodocs']}>Small Button</Story>
