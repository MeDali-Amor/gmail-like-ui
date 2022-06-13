import { Theme } from '@/themes'
import { createBox } from '@shopify/restyle'
import React, { FC, useCallback } from 'react'
import { FlatList, FlatListProps } from 'react-native'
import NoteListItem from './note-list-item'
import NOTES from '@/fixtures/notes'
import { Note } from '@/models'

const StyledFlatList = createBox<Theme, FlatListProps<Note>>(FlatList)

interface Props {}

const NoteList: FC<Props> = () => {
  const renderItem = useCallback(({ item }) => {
    return <NoteListItem {...item} />
  }, [])
  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={NOTES}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      width="100%"
    />
  )
}
export default NoteList
