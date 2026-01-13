import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../utils/colors'

const OrderCancelled = () => {
  const router = useRouter()
  const scaleAnim = useRef(new Animated.Value(0)).current
  const opacityAnim = useRef(new Animated.Value(0)).current
  const rotateAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    // Redirect to home after 3 seconds
    const timer = setTimeout(() => {
      router.replace('/(tabs)/Home')
    }, 3000)

    // Start animations
    Animated.parallel([
      // Scale animation
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      // Opacity animation
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      // Rotation animation
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start()

    return () => clearTimeout(timer)
  }, [router, scaleAnim, opacityAnim, rotateAnim])

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Back Button */}
      <View style={styles.headerSection}>
        <View style={styles.backButtonPlaceholder} />
      </View>

      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Animated Cancel Icon */}
        <Animated.View
          style={[
            styles.iconContainer,
            {
              transform: [
                { scale: scaleAnim },
                {
                  rotate: rotateAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['-180deg', '0deg'],
                  }),
                },
              ],
              opacity: opacityAnim,
            },
          ]}
        >
          <View style={styles.outerCircle}>
            <Animated.View
              style={[
                styles.cancelIcon,
                {
                  opacity: opacityAnim,
                  transform: [
                    {
                      scale: scaleAnim.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: [0, 1.2, 1],
                      }),
                    },
                  ],
                },
              ]}
            >
              <Ionicons name="close" size={50} color={colors.orangeBase} />
            </Animated.View>
          </View>
        </Animated.View>

        {/* Main Title */}
        <Text style={styles.mainTitle}>Order Cancelled!</Text>

        {/* Sub-text */}
        <Text style={styles.subText}>
          Your order has been successfully cancelled
        </Text>

        {/* Instructional Text */}
        <Text style={styles.instructionText}>
          If you have any question reach directly to our customer support
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default OrderCancelled

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow2,
  },
  headerSection: {
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  backButtonPlaceholder: {
    width: 24,
    height: 24,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingBottom: 150,
  },
  iconContainer: {
    marginBottom: 32,
  },
  outerCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 8,
    borderColor: colors.orangeBase,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  cancelIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.font,
    textAlign: 'center',
    marginBottom: 16,
  },
  subText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.font,
    textAlign: 'center',
    marginBottom: 40,
    opacity: 0.8,
  },
  instructionText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.font,
    textAlign: 'center',
    opacity: 0.7,
    lineHeight: 20,
  },
})
