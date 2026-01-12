import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/colors'

const OnboardC = () => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image 
        source={require('../../assets/images/onboarding-c.svg')}
        style={styles.backgroundImage}
        contentFit="cover"
      />
      
      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton} activeOpacity={0.7}>
        <Text style={styles.skipText}>Skip &gt;</Text>
      </TouchableOpacity>

      {/* White Card Overlay */}
      <View style={styles.cardSection}>
        <View style={styles.cardContent}>
          {/* Icon */}
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <Image 
                source={require('../../assets/images/delivery.svg')} 
                style={styles.iconImage}
                contentFit="contain"
              />
            </View>
          </View>

          {/* Title */}
          <Text style={styles.title}>Order For Food</Text>

          {/* Description */}
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </Text>

          {/* Pagination Dots */}
          <View style={styles.paginationContainer}>
            <View style={[styles.paginationDot, styles.paginationDotInactive]} />
            <View style={[styles.paginationDot, styles.paginationDotInactive]} />
            <View style={[styles.paginationDot, styles.paginationDotActive]} />
          </View>

          {/* Next Button */}
          <TouchableOpacity style={styles.nextButton} activeOpacity={0.8}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OnboardC

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  skipText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.orangeBase,
  },
  cardSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '45%',
  },
  cardContent: {
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 16,
  },
  icon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  iconImage: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.orangeBase,
    marginBottom: 12,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  description: {
    fontSize: 13,
    lineHeight: 20,
    color: colors.font,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 16,
    maxWidth: '100%',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 20,
  },
  paginationDot: {
    height: 6,
    borderRadius: 3,
  },
  paginationDotActive: {
    backgroundColor: colors.orangeBase,
    width: 20,
  },
  paginationDotInactive: {
    backgroundColor: colors.yellow2,
    width: 6,
  },
  nextButton: {
    width: '100%',
    maxWidth: 280,
    backgroundColor: colors.orangeBase,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.font2,
  },
})