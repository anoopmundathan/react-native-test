import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import { Seperator } from './Seperator'
import { ListItem } from './ListItem'
import { getCustomers } from '../actions/queue_actions'

class List extends Component {

  state = {
    loaded: false
  }

  componentDidMount() {
    this.props.getCustomers()
      .then(() => {
        this.setState({ loaded: true })
    })
    this.interval = setInterval(this.onTick, 30*1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  // reload data on every 30 sec
  onTick = () => {
    this.setState({ loaded: false }, () => {
      this.props.getCustomers()
        .then(() => {
          this.setState({ loaded: true })
        })
    })
  }

  render() {

    const { loaded } = this.state
    const { text, error } = this.props

    // search filter
    const customers = this.props.customers.filter(cust => {
      return cust.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
    })
  
    if(!loaded) {
      return(
        <ActivityIndicator />
      )
    } 

    return(
      <View style={styles.container}>
          
          {error.error && (<Text>{error.error}</Text>)}

          <FlatList 
            data={customers}
            renderItem={({ item }) => <ListItem {...item} />}
            keyExtractor={item => item.email}
            ItemSeparatorComponent={() => <Seperator />} />
      
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCustomers: () => dispatch(getCustomers())
  }
}

const mapStateToProps = ({ customers, error }) => {
  return {
    customers,
    error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '5%'
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
