import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'
import { gapVariants } from '@/app/_shared/lib/theme'

export const listVariants = tv({
  base: 'flex',
  variants: {
    orientation: {
      vertical: 'flex-col',
      horizontal: '',
    },
    ...gapVariants.variants,
  },
})

export type ListVariantsProps = VariantProps<typeof listVariants>
