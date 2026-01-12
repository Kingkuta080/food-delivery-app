import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/colors'

const OptionScreen = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoSection}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/images/logo-white.svg')} 
            style={styles.logoImage}
            contentFit="contain"
          />
        </View>

        {/* Description Text */}
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsSection}>
        <TouchableOpacity 
          style={styles.loginButton}
          activeOpacity={0.8}
          onPress={() => router.push('/(auth)/login')}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.signUpButton}
          activeOpacity={0.8}
          onPress={() => router.push('/(auth)/newAccount')}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OptionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orangeBase,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  logoSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 200,
    height: 240,
    maxWidth: '80%',
  },
  quickText: {
    color: colors.font2,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.font2,
    textAlign: 'center',
    paddingHorizontal: 20,
    maxWidth: 320,
  },
  buttonsSection: {
    width: '100%',
    alignItems: 'center',
    gap: 16,
  },
  loginButton: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: colors.yellowBase,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.font,
  },
  signUpButton: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: colors.yellow2,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.font,
  },
})