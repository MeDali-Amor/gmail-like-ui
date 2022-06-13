import { Box, Text } from '@/atoms'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React, { FC } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Sidebar: FC<DrawerContentComponentProps> = () => {
  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Text variant="sidebar" m="lg">
          Bima-Mail
        </Text>
      </SafeAreaView>
    </Box>
  )
}
export default Sidebar
