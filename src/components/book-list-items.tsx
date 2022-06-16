import { Box, Text, TouchableOpacity } from '@/atoms'
import { Book } from '@/models'
import { Theme } from '@/themes'
import { ColorProps } from '@shopify/restyle'
import React, { FC, useCallback } from 'react'

export type ListItemProps = Book &
  ColorProps<Theme> & {
    onPress: (noteId: string) => void
  }

const BookListItem: FC<ListItemProps> = ({ id, name, onPress, color }) => {
  const handlePress = useCallback(() => {
    onPress(id)
  }, [id])

  return (
    <Box>
      <TouchableOpacity px="lg" py="sm" onPress={handlePress}>
        <Text
          fontWeight="bold"
          numberOfLines={1}
          ellipsizeMode="tail"
          mb="xs"
          color={color || '$sidebarForeground'}
        >
          {name}
        </Text>
      </TouchableOpacity>
    </Box>
  )
}

export default BookListItem
