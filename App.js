import React from 'react'
import { fetchCustomers } from './utils/api'

import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {

  state = {
    customers: [],
    loading: false
  }

  componentDidMount() {
    fetchCustomers()
      .then(customers => {
        this.setState({
          customers,
          loading: true
        })
      })
  }

  render() {

    if(this.state.loading) {
      console.log(this.state.customers)
    }

    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
