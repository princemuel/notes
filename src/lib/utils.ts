import { cn } from "tailwind-variants";
import type { CnOptions } from "tailwind-variants";

export function capitalize(str = "") {
  if (!str) return str;
  return str[0].toLocaleUpperCase() + str.slice(1);
}

/**
 * Combines class names and merges conflicting Tailwind CSS classes using `tailwind-merge`.
 * @param classes - Class names to combine (strings, arrays, objects, etc.)
 * @returns A merged class string, or `undefined` if no valid classes are provided
 * @example
 * ```ts
 * // Simple usage with default twMerge config
 * tw('bg-red-500', 'bg-blue-500') // => 'bg-blue-500'
 * tw('px-2', 'px-4', 'py-2') // => 'px-4 py-2'
 *
 * ```
 */
export const tw = <T extends CnOptions>(...classes: T) => cn(...classes);
