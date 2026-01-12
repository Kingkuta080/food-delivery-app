import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/colors'

const LoginB = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={styles.container}>
      {/* Yellow Header Section (25%) */}
      <View style={styles.headerSection}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
          <Ionicons name="arrow-back" size={22} color={colors.orangeBase} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.headerTitle}>Hello!</Text>
      </View>

      {/* White Card Content (65%) */}
      <View style={styles.cardSection}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.cardContent}>
            {/* Welcome Section */}
            <View style={styles.welcomeSection}>
              <Text style={styles.welcomeTitle}>Welcome</Text>
              {/* <Text style={styles.welcomeDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text> */}
            </View>

            {/* Form */}
            <View style={styles.form}>
              {/* Email or Mobile Number Input */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Email or Mobile Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="example@example.com"
                  placeholderTextColor={colors.font}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              {/* Password Input */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordInputWrapper}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder={password ? '' : 'Enter your password'}
                    placeholderTextColor={colors.font}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeIcon}
                  >
                    <Ionicons
                      name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                      size={20}
                      color={colors.orangeBase}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Forget Password */}
              <TouchableOpacity style={styles.forgotPassword} activeOpacity={0.7}>
                <Text style={styles.forgotPasswordText}>Forget Password</Text>
              </TouchableOpacity>

              {/* Log In Button */}
              <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
                <Text style={styles.loginButtonText}>LOG IN</Text>
              </TouchableOpacity>

              {/* Social Sign Up */}
              <View style={styles.socialSection}>
                <Text style={styles.socialText}>or</Text>
                <View style={styles.socialIcons}>
                  <TouchableOpacity style={styles.socialIcon} activeOpacity={0.7}>
                    <Ionicons name="finger-print-outline" size={24} color={colors.orangeBase} />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Sign Up Link */}
              <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Don&apos;t have an account? </Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={styles.signUpLink}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

    </View>
  )
}

export default LoginB

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellowBase,
  },
  headerSection: {
    flex: 0.2,
    backgroundColor: colors.yellowBase,
    paddingTop: 40,
    paddingHorizontal: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 40,
    padding: 6,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.font2,
    marginTop: 16,
    textTransform: 'uppercase',
  },
  cardSection: {
    flex: 0.8,
    backgroundColor: colors.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  cardContent: {
    flex: 1,
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
  },
  welcomeSection: {
    marginBottom: 24,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.font,
    marginBottom: 8,
  },
  welcomeDescription: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.font,
    opacity: 0.8,
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.font,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 46,
    backgroundColor: colors.yellow2,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    color: colors.font,
  },
  passwordInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.yellow2,
    borderRadius: 10,
    paddingRight: 10,
  },
  passwordInput: {
    flex: 1,
    height: 46,
    paddingHorizontal: 14,
    fontSize: 15,
    color: colors.font,
  },
  eyeIcon: {
    padding: 6,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 13,
    color: colors.orangeBase,
    fontWeight: '600',
  },
  loginButton: {
    width: '100%',
    backgroundColor: colors.orangeBase,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.font2,
    textTransform: 'uppercase',
  },
  socialSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  socialText: {
    fontSize: 13,
    color: colors.font,
    marginBottom: 12,
    opacity: 0.7,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFDECF',
    borderWidth: 1.5,
    borderColor: colors.orangeBase,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIconText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.orangeBase,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    paddingBottom: 16,
  },
  signUpText: {
    fontSize: 13,
    color: colors.font,
    opacity: 0.7,
  },
  signUpLink: {
    fontSize: 13,
    color: colors.orangeBase,
    fontWeight: '600',
  },
})
