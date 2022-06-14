import React, { FC } from 'react'
import Pressable, { PressableProps } from './pressable'
import {
  backgroundColor,
  BackgroundColorProps,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  border,
  BorderProps,
  composeRestyleFunctions,
  opacity,
  OpacityProps,
  ResponsiveValue,
  useResponsiveProp,
  useRestyle,
  useTheme
} from '@shopify/restyle'
import { Theme } from '@/themes'
import { Platform } from 'react-native'

type RestyleProps = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  BorderProps<Theme> &
  OpacityProps<Theme>

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  backgroundColorShorthand,
  backgroundColor,
  border,
  opacity
])

interface Props extends PressableProps {
  pressed?: RestyleProps
  rippleColor?: ResponsiveValue<keyof Theme['colors'], Theme>
  rippleBorderless?: boolean
}

const Touchable = ({
  pressed,
  rippleColor,
  rippleBorderless,
  style,
  ...rest
}: Props) => {
  const { style: pressedStyle } = pressed
    ? useRestyle(restyleFunctions, pressed)
    : { style: undefined }
  const theme = useTheme<Theme>()
  const rippleColorProp = rippleColor && useResponsiveProp(rippleColor)
  const rippleColorValue = rippleColorProp && theme.colors[rippleColorProp]
  return (
    <Pressable
      {...rest}
      android_ripple={{ color: 'transparent', borderless: rippleBorderless }}
      // @ts-ignore
      style={({ pressed: isPressed }) =>
        isPressed ? [style, pressedStyle] : style
      }
    />
  )
}

export const TouchableOpacity: FC<Props> = props => (
  <Touchable
    rippleColor="$foreground"
    {...props}
    pressed={{
      opacity: Platform.select({
        ios: 0.6,
        android: 0.6
      })
    }}
  />
)

export default Touchable
