import { Image } from 'expo-image'
import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { colors } from '../utils/colors'

const LunchScreen = () => {
  const bounceValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    // Create a continuous bouncing animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: -20,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ])
    ).start()
  }, [bounceValue])

  return (
    <View style={styles.container}>
      {/* Heart Icon with Spoon and Fork Logo */}
      <Animated.View 
        style={[
          styles.logoContainer,
          {
            transform: [{ translateY: bounceValue }],
          },
        ]}
      >
        <Image 
          source={require('../../assets/images/logo-dark.svg')} 
          style={styles.logoImage}
          contentFit="contain"
        />
      </Animated.View>
    </View>
  )
}

export default LunchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellowBase,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logoImage: {
    width: 250,
    height: 300,
    maxWidth: '90%',
  },
  logoText: {
    fontSize: 52,
    fontWeight: '900',
    letterSpacing: 4,
    textAlign: 'center',
  },
  yumText: {
    color: colors.orangeBase,
  },
  quickText: {
    color: colors.font2,
  },
})