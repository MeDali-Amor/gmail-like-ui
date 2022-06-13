// import { View, Text } from 'react-native'
import React from 'react'
import { Container } from '@/atoms'
import NoteList from '@/components/note-list'
import HeaderBar from '@/components/header-bar'

const MainScreen = () => {
  return (
    <Container justifyContent="center" alignItems="center">
      <HeaderBar />
      <NoteList />
    </Container>
  )
}

export default MainScreen
