import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { getCustomers } from '../actions/queue_actions';

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
              <Text>{customer.customer.name}</Text>
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
