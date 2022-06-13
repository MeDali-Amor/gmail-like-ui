import React, { FC } from 'react'
import { BoxProps } from '@shopify/restyle'
import { Theme } from '@/themes'
import Box from './box'

const Container: FC<BoxProps<Theme>> = props => (
  <Box {...props} flex={1} backgroundColor="$background">
    {props.children}
  </Box>
)

export default Container
