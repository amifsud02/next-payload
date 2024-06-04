import React, { forwardRef, ForwardRefExoticComponent, Ref } from 'react'

import classes from './index.module.scss'

type Props = {
  left?: boolean
  right?: boolean
  className?: string
  children: React.ReactNode
}

export const Gutter: ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>> =
  forwardRef((props: Props, ref: Ref<HTMLDivElement>) => {
    const { left = true, right = true, className, children } = props

    return (
      <div
        ref={ref}
        className={[
          left && classes.gutterLeft,
          right && classes.gutterRight,
          className,
          classes.gutter,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {children}
      </div>
    )
  })

Gutter.displayName = 'Gutter'
