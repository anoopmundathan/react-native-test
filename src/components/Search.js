import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export const Search = (props) => {
  return(
    <View style={styles.container}>
      <TextInput
        value={props.value}
        onChangeText={props.onChange}
        placeholder="Search"
        underlineColorAndroid='transparent'
        style={styles.input} />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: '90%',
    marginLeft: '5%',
    padding: 10,
    paddingLeft: '5%',
    backgroundColor: '#CED0CE',
    borderRadius: 5
  }
})
