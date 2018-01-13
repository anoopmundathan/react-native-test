import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'

import { SearchBar } from 'react-native-elements'
import { Seperator } from './Seperator'
import { ListItem } from './ListItem'

import { getCustomers } from '../actions/queue_actions'

class Main extends Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    this.props.getCustomers()
      .then(() => {
        this.setState({ loaded: true })
      })
  }

  render() {
    const { loaded } = this.state
    const { customers } = this.props
    
    if(!loaded) {
      return(
        <ActivityIndicator />
      )
    } 

    return(
      <View style={styles.container}>
        <FlatList 
          data={customers}
          renderItem={({ item }) => <ListItem {...item} />}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={() => <Seperator />}
          ListHeaderComponent={() => <SearchBar lightTheme placeholder='Search' />} />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCustomers: () => dispatch(getCustomers())
  }
}

const mapStateToProps = ({ customers }) => {
  return {
    customers
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    paddingLeft: '5%'
  }
})
