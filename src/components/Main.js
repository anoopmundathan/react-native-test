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
    text: '',
    page: 1
  }

  componentDidMount() {
    this.props.getCustomers(this.state.page)
      .then(() => {
        this.setState({ loaded: true })
    })
    this.interval = setInterval(this.onTick, 10*1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onTick = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.props.getCustomers(this.state.page)
    })
  }
  
  render() {
    const { loaded, text } = this.state
  
    // filter
    let customers = this.props.customers.filter(cust => {
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
    getCustomers: (page) => dispatch(getCustomers(page))
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
