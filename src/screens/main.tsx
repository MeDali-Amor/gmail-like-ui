// import { View, Text } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { Box, Container, Text, TouchableOpacity } from '@/atoms'
import NoteList from '@/components/note-list'
import HeaderBar from '@/components/header-bar'
import FeatherIcon from '@/components/icon'
import { CompositeScreenProps } from '@react-navigation/native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import useStickyHeader from '@/hooks/sticky-header'
import MoveNoteSheet from '@/components/move-note-sheet'
import ThemePicker from '@/components/theme-picker'

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>

const MainScreen = ({ navigation }: Props) => {
  const refThemePicker = useRef<ThemePicker>(null)
  const refMoveNoteSheet = useRef<MoveNoteSheet>(null)
  const [concealNoteListItem, setConcealNoteListItem] = useState<
    (() => void) | null
  >(null)
  const {
    handleNoteListLayout,
    handleScroll,
    headerBarStyle,
    headerBarHeight
  } = useStickyHeader()
  const handleSideBarOpen = useCallback(() => {
    navigation.toggleDrawer()
  }, [navigation])
  const handleThemeToggle = useCallback(() => {
    const { current: menu } = refThemePicker
    if (menu) {
      menu.show()
    }
  }, [])
  const handleNoteListItemPress = useCallback((noteId: string) => {
    navigation.navigate('Detail', {
      noteId
    })
  }, [])
  const handleNoteListItemSwipeLeft = useCallback(
    (noteId: string, conceal: () => void) => {
      const { current: menu } = refMoveNoteSheet
      if (menu) {
        menu.show()
        setConcealNoteListItem(() => conceal)
      }
    },
    []
  )
  const handleMoveNoteSheetClose = useCallback(() => {
    concealNoteListItem && concealNoteListItem()
    setConcealNoteListItem(null)
  }, [concealNoteListItem])
  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList
        contentInsetTop={headerBarHeight}
        onScroll={handleScroll}
        onItemPress={handleNoteListItemPress}
        onItemSwipeLeft={handleNoteListItemSwipeLeft}
      />
      <HeaderBar style={headerBarStyle} onLayout={handleNoteListLayout}>
        <TouchableOpacity
          m="xs"
          p="xs"
          rippleBorderless
          onPress={handleSideBarOpen}
        >
          <FeatherIcon name="menu" size={22} />
        </TouchableOpacity>
        <Box flex={1} alignItems="center">
          <TouchableOpacity m="xs" p="xs" rippleBorderless>
            <Text>Toutes les Note</Text>
          </TouchableOpacity>
        </Box>
        <TouchableOpacity
          m="xs"
          p="xs"
          rippleBorderless
          onPress={handleThemeToggle}
        >
          <FeatherIcon name="more-vertical" size={22} />
        </TouchableOpacity>
      </HeaderBar>
      <MoveNoteSheet
        ref={refMoveNoteSheet}
        onClose={handleMoveNoteSheetClose}
      />
      <ThemePicker ref={refThemePicker} />
    </Container>
  )
}

export default MainScreen
