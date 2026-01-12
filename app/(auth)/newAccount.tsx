import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../utils/colors'

const NewAccount = () => {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Yellow Header Section */}
      <View style={styles.headerSection}>
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton} 
          activeOpacity={0.7}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={22} color={colors.orangeBase} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.headerTitle}>New Account</Text>
      </View>

      {/* White Card Content */}
      <View style={styles.cardSection}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.cardContent}>
            {/* Form */}
            <View style={styles.form}>
              {/* Full Name Input */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Full name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your full name"
                  placeholderTextColor={colors.font}
                  value={fullName}
                  onChangeText={setFullName}
                  autoCapitalize="words"
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

              {/* Email Input */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
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

              {/* Mobile Number Input */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Mobile Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="+ 123 456 789"
                  placeholderTextColor={colors.font}
                  value={mobileNumber}
                  onChangeText={setMobileNumber}
                  keyboardType="phone-pad"
                />
              </View>

              {/* Date of Birth Input */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Date of birth</Text>
                <TextInput
                  style={styles.input}
                  placeholder="DD / MM / YYYY"
                  placeholderTextColor={colors.font}
                  value={dateOfBirth}
                  onChangeText={setDateOfBirth}
                />
              </View>

              {/* Terms Text */}
              <View style={styles.termsContainer}>
                <Text style={styles.termsText}>
                  By continuing, you agree to{' '}
                  <Text style={styles.termsLink}>Terms of Use</Text>
                  {' '}and{' '}
                  <Text style={styles.termsLink}>Privacy Policy</Text>
                </Text>
              </View>

              {/* Sign Up Button */}
              <TouchableOpacity 
                style={styles.signUpButton} 
                activeOpacity={0.8}
                onPress={() => router.push('/(auth)/setPassword')}
              >
                <Text style={styles.signUpButtonText}>Sign Up</Text>
              </TouchableOpacity>

              {/* Social Sign Up */}
              <View style={styles.socialSection}>
                <Text style={styles.socialText}>or sign up with</Text>
                <View style={styles.socialIcons}>
                  <TouchableOpacity style={styles.socialIcon} activeOpacity={0.7}>
                    <Text style={styles.socialIconText}>G</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialIcon} activeOpacity={0.7}>
                    <Text style={styles.socialIconText}>f</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialIcon} activeOpacity={0.7}>
                    <Ionicons name="finger-print-outline" size={24} color={colors.orangeBase} />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Login Link */}
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={styles.loginLink}>Log in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default NewAccount

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
  termsContainer: {
    marginTop: 8,
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  termsText: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.font,
    textAlign: 'center',
    opacity: 0.8,
  },
  termsLink: {
    color: colors.orangeBase,
    fontWeight: '600',
  },
  signUpButton: {
    width: '100%',
    backgroundColor: colors.orangeBase,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
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
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    paddingBottom: 16,
  },
  loginText: {
    fontSize: 13,
    color: colors.font,
    opacity: 0.7,
  },
  loginLink: {
    fontSize: 13,
    color: colors.orangeBase,
    fontWeight: '600',
  },
})
