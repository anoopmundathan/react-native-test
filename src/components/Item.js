import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Item = (props) => {
  const { name, time } = props
  return(
    <View style={styles.container}>
      <Text style={{fontSize: 18}}>{name}</Text>
      <Text>{time}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginLeft: '5%'
  }
})
