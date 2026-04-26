import type { ComponentProps } from 'react'
import type { ListVariantsProps } from '../styles/list.variants'

import { useMemo } from 'react'
import { listVariants } from '../styles/list.variants'

export type ListProps = ComponentProps<'ul'> & {
  direction?: 'horizontal' | 'vertical'
} & ListVariantsProps

export function List(props: ListProps) {
  const { className, orientation, gap, ...restProps } = props
  const classes = useMemo(() => listVariants({ className, gap, orientation }), [className, gap, orientation])

  return <ul className={classes} {...restProps}></ul>
}
