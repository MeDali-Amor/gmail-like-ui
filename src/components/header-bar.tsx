import { Bar } from '@/atoms'
import AnimateBox, { AnimateBoxProps } from '@/atoms/animated-box'
import React, { FC } from 'react'

const HeaderBar: FC<AnimateBoxProps> = ({ children, ...rest }) => {
  return (
    <AnimateBox position="absolute" top={40} right={0} left={0} {...rest}>
      <Bar
        variant="headerBar"
        flexDirection="row"
        alignItems="center"
        mx="lg"
        my="md"
        px="sm"
        minHeight={44}
      >
        {children}
      </Bar>
    </AnimateBox>
  )
}

export default HeaderBar
