import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Seperator = () => <View style={styles.container} />

const styles = StyleSheet.create({
  container: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
    marginLeft: '20%',
    marginTop: '1%'
  }
})
