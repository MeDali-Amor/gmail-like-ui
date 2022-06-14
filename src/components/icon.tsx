import { Theme } from '@/themes'
import { ColorProps, useResponsiveProp, useTheme } from '@shopify/restyle'
import React, { ComponentProps, FC } from 'react'
import Feather from 'react-native-vector-icons/Feather'

export type IconProps = ComponentProps<typeof Feather>
type Props = Omit<IconProps, 'color'> & ColorProps<Theme>

const FeatherIcon: FC<Props> = ({ color = '$foreground', ...rest }) => {
  const theme = useTheme<Theme>()
  const colorProp = useResponsiveProp(color)
  const vColor = theme.colors[colorProp || '$foreground']
  return <Feather {...rest} color={vColor} />
}

export default FeatherIcon
