import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Gravatar, GravatarApi} from 'react-native-gravatar'
import { Item } from './Item'

export const ListItem = (props) => {
  const { name, email, expectedTime } = props
  return(
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Gravatar options={{ 
          email,
          parameters: { "size": "100", "d": "mm" }}}
          style={styles.image} />
        <Item name={name} time={expectedTime} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '5%'
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  image: {
    width:60, 
    height:60,
    borderRadius:10
  }
})
