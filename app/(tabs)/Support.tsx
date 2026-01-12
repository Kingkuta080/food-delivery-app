import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Support = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Support</Text>
    </View>
  )
}

export default Support

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
})
