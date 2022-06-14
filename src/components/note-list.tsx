import { Theme } from '@/themes'
import { createBox } from '@shopify/restyle'
import React, { FC, useCallback } from 'react'
import {
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent
} from 'react-native'
import NoteListItem from './note-list-item'
import NOTES from '@/fixtures/notes'
import { Note } from '@/models'
import Animated, { AnimateProps } from 'react-native-reanimated'
import { Box } from '@/atoms'

const StyledFlatList = createBox<Theme, AnimateProps<FlatListProps<Note>>>(
  Animated.FlatList
)

interface Props {
  contentInsetTop: number
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onItemPress: (nodeId: string) => void
  onItemSwipeLeft: (nodeId: string, cancel: () => void) => void
}

const NoteList: FC<Props> = ({
  onScroll,
  contentInsetTop,
  onItemPress,
  onItemSwipeLeft
}) => {
  const renderItem = useCallback(
    ({ item }) => {
      return (
        <NoteListItem
          {...item}
          onPress={onItemPress}
          onSwipeLeft={onItemSwipeLeft}
        />
      )
    },
    [onItemPress, onItemSwipeLeft]
  )
  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={NOTES}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      width="100%"
      onScroll={onScroll}
      scrollEventThrottle={16}
      ListHeaderComponent={<Box width="100%" height={contentInsetTop} />}
    />
  )
}
export default NoteList
