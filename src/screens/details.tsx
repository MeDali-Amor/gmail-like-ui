import { Box, Text, TouchableOpacity } from '@/atoms'
import { RootStackParamList } from '@/navs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>

const DetailScreen = ({ navigation, route }: Props) => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>Détails</Text>
      <Text>{JSON.stringify(route.params)}</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          padding: 12
        }}
      >
        <Text>Retour</Text>
      </TouchableOpacity>
    </Box>
  )
}

export default DetailScreen
