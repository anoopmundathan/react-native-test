import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'

import { Seperator } from './Seperator'
import { ListItem } from './ListItem'
import Search from './Search'

import { getCustomers } from '../actions/queue_actions'

class Main extends Component {
  state = {
    loaded: false,
    text: ''
  }

  componentDidMount() {
    this.props.getCustomers()
      .then(() => {
        this.setState({ loaded: true })
      })
  }
  
  render() {
    const { loaded, text } = this.state
    let customers = this.props.customers
    customers = customers.filter(cust => {
      return cust.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
    })
  
    if(!loaded) {
      return(
        <ActivityIndicator />
      )
    } 

    return(
      <View style={styles.container}>
        <Search onChange={text => this.setState({ text })} />
        <View style={{flex: 1, marginLeft: '5%'}}>
          <FlatList 
            data={customers}
            renderItem={({ item }) => <ListItem {...item} />}
            keyExtractor={item => item.email}
            ItemSeparatorComponent={() => <Seperator />} />
        </View>
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
    marginTop: '10%'
  }
})
