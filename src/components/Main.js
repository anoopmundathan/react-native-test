import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Search from './Search'
import List from './List'

class Main extends Component {

  state = {
    text: ''
  }

  render() {
    const { text } = this.state
    return(
      <View style={styles.container}>
        <Search value={text} onChange={text => this.setState( { text })} />
        <List text={text}/>
      </View>
    )
  }
}

export default Main

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '8%'
  }
})
