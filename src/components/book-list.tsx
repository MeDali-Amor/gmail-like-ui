import { Theme } from '@/themes'
import { ColorProps, createBox } from '@shopify/restyle'
import React, { FC, useCallback } from 'react'
import { FlatList, FlatListProps } from 'react-native'
import BookListItem from './book-list-items'
import BOOKS from '@/fixtures/books'
import { Book } from '@/models'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'

const StyledFlatList = createBox<Theme, FlatListProps<Book>>(FlatList)

const StyledBottomSheetFlatList = createBox<Theme, FlatListProps<Book>>(
  BottomSheetFlatList
)

type Props = {
  inBottomSheet?: boolean
  onPressItem: (noteId: string) => void
  headerComponent?: FC<any>
} & ColorProps<Theme>

const BookList: FC<Props> = ({
  onPressItem,
  headerComponent,
  color,
  inBottomSheet
}) => {
  const renderItem = useCallback(
    ({ item }) => {
      return <BookListItem {...item} onPress={onPressItem} color={color} />
    },
    [onPressItem]
  )
  const ListComponent = inBottomSheet
    ? StyledBottomSheetFlatList
    : StyledFlatList
  return (
    <ListComponent
      contentInsetAdjustmentBehavior="automatic"
      data={BOOKS}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      width="100%"
      scrollEventThrottle={16}
      pt="sm"
      ListHeaderComponent={headerComponent}
    />
  )
}
export default BookList
