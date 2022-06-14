// import { View, Text } from 'react-native'
import React, { useCallback } from 'react'
import { Box, Container, Text, TouchableOpacity } from '@/atoms'
import NoteList from '@/components/note-list'
import HeaderBar from '@/components/header-bar'
import FeatherIcon from '@/components/icon'
import { CompositeScreenProps } from '@react-navigation/native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import useStickyHeader from '@/hooks/sticky-header'

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>

const MainScreen = ({ navigation }: Props) => {
  const {
    handleNoteListLayout,
    handleScroll,
    headerBarStyle,
    headerBarHeight
  } = useStickyHeader()
  const handleSideBarOpen = useCallback(() => {
    navigation.toggleDrawer()
  }, [navigation])
  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList contentInsetTop={headerBarHeight} onScroll={handleScroll} />
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
            <Text>All Notes</Text>
          </TouchableOpacity>
        </Box>
        <TouchableOpacity m="xs" p="xs" rippleBorderless>
          <FeatherIcon name="more-vertical" size={22} />
        </TouchableOpacity>
      </HeaderBar>
    </Container>
  )
}

export default MainScreen
