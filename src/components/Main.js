import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { SearchBar } from 'react-native-elements'

import { getCustomers } from '../actions/queue_actions'
import { List, ListItem} from 'react-native-elements'

import Avatar from './Avatar';

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

  renderItem = ({ item }) => {
    return(
      <View style={{flex: 1, marginTop: '5%'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View>
            <Avatar email={item.email}/>
          </View>
          <View style={{justifyContent: 'flex-start', marginLeft: '5%'}}>
            <Text style={{fontSize: 20}}>{item.name}</Text>
            <Text>{item.expectedTime}</Text>
          </View>
        </View>
      </View>
    )
  }

  itemSeperator = () => {
    return(
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
          marginLeft: '25%',
          marginTop: '1%'
        }} />
    )
  }

  searchHeader = () => {
    return (<SearchBar lightTheme placeholder='Search' />)
  }

  render() {
    const { loaded } = this.state
    const { customers } = this.props

    if(!loaded) {
      return(<View><Text>Loading...</Text></View>)
    } 

    return(
      <View style={{flex: 1, marginTop: '10%', paddingLeft: '5%'}}>
        <FlatList 
          data={customers}
          renderItem={this.renderItem}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.itemSeperator}
          ListHeaderComponent={this.searchHeader}
          />
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
