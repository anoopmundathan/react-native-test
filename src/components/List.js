import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Seperator } from './Seperator'
import { ListItem } from './ListItem'

const List = (props) => {
  return(
    <View style={styles.container}>
      <FlatList 
        data={props.customers}
        renderItem={({ item }) => <ListItem {...item} />}
        keyExtractor={item => item.email}
        ItemSeparatorComponent={() => <Seperator />} />
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '5%'
  }
})
