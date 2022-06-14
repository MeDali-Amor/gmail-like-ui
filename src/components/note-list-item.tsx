import { Box, Text } from '@/atoms'
import { Note } from '@/models'
import React, { FC, useCallback } from 'react'
import NoteListItemActionView from './note-list-item-action-view'
import SwipeableView from './swipable-view'
import { TouchableOpacity } from '@/atoms'

export interface ListItemProps extends Note {
  onPress: (nodeId: string) => void
  onSwipeLeft?: (nodeId: string, done: () => void) => void
}

const NoteListItem: FC<ListItemProps> = props => {
  const { onPress, onSwipeLeft, id } = props
  const handlePress = useCallback(() => {
    onPress(id)
  }, [onPress, id])
  const handleSwipeLeft = useCallback(
    done => {
      onSwipeLeft && onSwipeLeft(id, done)
    },
    [onSwipeLeft, id]
  )
  const renderBackView = useCallback(({ progress }) => (
    <NoteListItemActionView progress={progress} />
  ))
  return (
    <SwipeableView
      bg="yellow"
      onSwipeLeft={handleSwipeLeft}
      backView={renderBackView}
    >
      <Box bg="$background">
        <TouchableOpacity
          bg="$background"
          px="lg"
          py="md"
          onPress={handlePress}
        >
          <Text
            fontWeight="bold"
            numberOfLines={1}
            ellipsizeMode="tail"
            mb="xs"
          >
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
        </TouchableOpacity>
      </Box>
    </SwipeableView>
  )
}

export default NoteListItem
