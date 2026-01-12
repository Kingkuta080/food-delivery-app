import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/colors'

const SetPassword = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <View style={styles.container}>
      {/* Yellow Header Section */}
      <View style={styles.headerSection}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
          <Ionicons name="arrow-back" size={22} color={colors.orangeBase} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.headerTitle}>Set Password</Text>
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
              {/* Introductory Text */}
              <Text style={styles.introText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>

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

              {/* Confirm Password Input */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Confirm Password</Text>
                <View style={styles.passwordInputWrapper}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder={confirmPassword ? '' : 'Confirm your password'}
                    placeholderTextColor={colors.font}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!showConfirmPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={styles.eyeIcon}
                  >
                    <Ionicons
                      name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
                      size={20}
                      color={colors.orangeBase}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Create New Password Button */}
              <TouchableOpacity style={styles.createPasswordButton} activeOpacity={0.8}>
                <Text style={styles.createPasswordButtonText}>Create New Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default SetPassword

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
  introText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.font,
    marginBottom: 24,
    opacity: 0.8,
  },
  inputContainer: {
    marginBottom: 20,
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
  createPasswordButton: {
    width: '100%',
    backgroundColor: colors.orangeBase,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  createPasswordButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.font2,
  },
})
