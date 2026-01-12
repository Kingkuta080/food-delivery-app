import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../utils/colors'

const SetFingerPrint = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Yellow Header Section */}
      <View style={styles.headerSection}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
          <Ionicons name="arrow-back" size={22} color={colors.orangeBase} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.headerTitle}>Set Your Fingerprint</Text>
      </View>

      {/* White Card Content */}
      <View style={styles.cardSection}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.cardContent}>
            {/* Content */}
            <View style={styles.content}>
              {/* Introductory Text */}
              <Text style={styles.introText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </Text>

              {/* Fingerprint Icon */}
              <View style={styles.fingerprintContainer}>
                <Ionicons name="finger-print" size={320} color={colors.orangeBase} />
              </View>

              {/* Action Buttons */}
              <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                  style={styles.skipButton} 
                  activeOpacity={0.8}
                  onPress={() => router.replace('/(tabs)/Home')}
                >
                  <Text style={styles.skipButtonText}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.continueButton} 
                  activeOpacity={0.8}
                  onPress={() => router.replace('/(tabs)/Home')}
                >
                  <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default SetFingerPrint

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
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  introText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.font,
    marginBottom: 40,
    opacity: 0.8,
  },
  fingerprintContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 'auto',
    marginBottom: 20,
  },
  skipButton: {
    flex: 1,
    backgroundColor: colors.orange2,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.orangeBase,
  },
  continueButton: {
    flex: 1,
    backgroundColor: colors.orangeBase,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.font2,
  },
})
