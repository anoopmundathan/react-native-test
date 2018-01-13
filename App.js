import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'

import { StyleSheet, Text, View } from 'react-native'
import Main from './src/components/Main'

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Main />
        </View>
      </Provider>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
