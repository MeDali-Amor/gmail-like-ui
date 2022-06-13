import { Box, Text } from '@/atoms'
import { Note } from '@/models'
import React, { FC } from 'react'

export interface ListItemProps extends Note {}

const NoteListItem: FC<ListItemProps> = props => {
  return (
    <Box bg="$background">
      <Box bg="$background" px="lg" py="md">
        <Text fontWeight="bold" numberOfLines={1} ellipsizeMode="tail" mb="xs">
          {props.title}
        </Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          fontSize={14}
          opacity={0.6}
        >
          {props.body}
        </Text>
      </Box>
    </Box>
  )
}

export default NoteListItem
