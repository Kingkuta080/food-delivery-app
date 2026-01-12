import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Orders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Orders</Text>
    </View>
  )
}

export default Orders

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
