import { Box, Text } from '@/atoms'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React, { FC, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BookList from './book-list'

const Sidebar: FC<DrawerContentComponentProps> = ({ navigation }) => {
  const handleBookListItemPress = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])

  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Text variant="sidebar" m="lg" fontWeight="900" fontSize={20}>
          Bima-Notes
        </Text>
      </SafeAreaView>
      <BookList onPressItem={handleBookListItemPress} />
    </Box>
  )
}
export default Sidebar
