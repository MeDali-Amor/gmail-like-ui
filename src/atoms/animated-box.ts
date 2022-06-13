import React from 'react'
import { Theme } from '@/themes'
import { createBox } from '@shopify/restyle'
import { ViewProps } from 'react-native'
import Animated, { AnimateProps } from 'react-native-reanimated'

const AnimateBox = createBox<Theme, AnimateProps<ViewProps>>(Animated.View)
export type AnimateBoxProps = React.ComponentProps<typeof AnimateBox>
export default AnimateBox
