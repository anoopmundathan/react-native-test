import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, StyleSheet } from 'react-native'
import { getCustomers } from '../actions/queue_actions'
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

  render() {
    const { loaded } = this.state
    const { customers } = this.props

    if(!loaded) {
      return(<View><Text>Loading...</Text></View>)
    } 

    return(
      <View>
        {customers.map((customer, index) => {
          return(
            <View key={index}>
              <Text>{customer.name}</Text>
              <Text>{customer.expectedTime}</Text>
              <Avatar email={customer.email}/>
            </View>
          )
        })}
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
  roundedProfileImage: {
    width:100, height:100, borderWidth:3,
    borderColor:'white', borderRadius:50
  }
})
