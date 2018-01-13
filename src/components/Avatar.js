import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { pipe, trim, lower, md5Hash } from '../utils/helpers'

export const graApiUrl = 'https://www.gravatar.com/avatar/'

class Avatar extends Component {

	render() {
    const { email } = this.props
    const curriedFunc = pipe(trim, lower, md5Hash)
    const hashedEmail = curriedFunc(email)
    return (
      <Image 
        style={styles.roundedImage}
        source={{uri:graApiUrl + hashedEmail}} />
		)
	}
}

export default Avatar

const styles = StyleSheet.create({
  roundedImage: {
    width: 80, 
    height: 80,
    borderRadius: 20
  }
})
