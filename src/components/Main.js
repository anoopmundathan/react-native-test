import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import Search from './Search'
import List from './List'
import { getCustomers } from '../actions/queue_actions'

class Main extends Component {

  state = {
    loaded: false,
    text: '',
    backupText: ''
  }

  componentDidMount() {

    // get customer fetch
    this.props.getCustomers()
      .then(() => {
        this.setState({ loaded: true })
    })

    // set timer
    this.interval = setInterval(this.onTick, 30*1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  // reload data on every 30 sec
  onTick = () => {
    this.setState({
      loaded: false,
      text: ''
    }, () => {
      this.props.getCustomers()
        .then(() => {
          this.setState({ 
            loaded: true,
            text: this.state.backupText
          })
        })
    })
  }

  onChange = (text) => {
    this.setState({
      text,
      backupText: text
    })
  }

  render() {
    const { loaded, text } = this.state
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
        <Search value={text} onChange={this.onChange} />
        <List customers={customers} />
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
    marginTop: '8%'
  }
})
