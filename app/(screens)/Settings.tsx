import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../utils/colors'

interface SettingOption {
  id: string
  label: string
  icon: keyof typeof Ionicons.glyphMap
  onPress?: () => void
}

const Settings = () => {
  const router = useRouter()

  const settingsOptions: SettingOption[] = [
    {
      id: '1',
      label: 'Notification Setting',
      icon: 'notifications-outline',
      onPress: () => {
        router.push('/(screens)/Notification')
      },
    },
    {
      id: '2',
      label: 'Password Setting',
      icon: 'key-outline',
      onPress: () => {
        router.push('/(screens)/Password')
      },
    },
    {
      id: '3',
      label: 'Delete Account',
      icon: 'person-outline',
      onPress: () => {
        // Navigate to delete account
        // router.push('/(screens)/DeleteAccount')
      },
    },
  ]

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
          <Ionicons name="chevron-back" size={24} color={colors.font} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* White Content Area */}
      <View style={styles.contentSection}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Settings Options */}
          {settingsOptions.map((option, index) => (
            <TouchableOpacity
              key={option.id}
              style={styles.settingItem}
              activeOpacity={0.7}
              onPress={option.onPress}
            >
              {/* Left Side - Icon */}
              <View style={styles.iconContainer}>
                <Ionicons
                  name={option.icon}
                  size={24}
                  color={colors.orangeBase}
                />
              </View>

              {/* Middle - Label */}
              <View style={styles.labelContainer}>
                <Text style={styles.settingLabel}>{option.label}</Text>
              </View>

              {/* Right Side - Chevron */}
              <Ionicons
                name="chevron-forward"
                size={20}
                color={colors.orangeBase}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellowBase,
  },
  headerSection: {
    backgroundColor: colors.yellowBase,
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 40,
    padding: 6,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.font,
    textTransform: 'uppercase',
  },
  contentSection: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.yellow2,
  },
  iconContainer: {
    marginRight: 16,
    width: 32,
    alignItems: 'center',
  },
  labelContainer: {
    flex: 1,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.font,
  },
})
