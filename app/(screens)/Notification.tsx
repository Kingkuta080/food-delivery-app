import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../utils/colors'

interface NotificationOption {
  id: string
  label: string
  defaultValue: boolean
}

const Notification = () => {
  const router = useRouter()

  const notificationOptions: NotificationOption[] = [
    { id: '1', label: 'General Notification', defaultValue: true },
    { id: '2', label: 'Sound', defaultValue: true },
    { id: '3', label: 'Sound Call', defaultValue: true },
    { id: '4', label: 'Vibrate', defaultValue: false },
    { id: '5', label: 'Special Offers', defaultValue: false },
    { id: '6', label: 'Payments', defaultValue: false },
    { id: '7', label: 'Promo and discount', defaultValue: false },
    { id: '8', label: 'Cashback', defaultValue: false },
  ]

  const [notificationStates, setNotificationStates] = useState<Record<string, boolean>>(
    notificationOptions.reduce((acc, option) => {
      acc[option.id] = option.defaultValue
      return acc
    }, {} as Record<string, boolean>)
  )

  const toggleNotification = (id: string) => {
    setNotificationStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

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
          <Ionicons name="chevron-back" size={24} color={colors.orangeBase} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.headerTitle}>Notification Setting</Text>
      </View>

      {/* White Content Area */}
      <View style={styles.contentSection}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Notification Options */}
          {notificationOptions.map((option, index) => (
            <View key={option.id}>
              <View style={styles.notificationItem}>
                <Text style={styles.notificationLabel}>{option.label}</Text>
                <Switch
                  value={notificationStates[option.id]}
                  onValueChange={() => toggleNotification(option.id)}
                  trackColor={{
                    false: colors.yellow2,
                    true: colors.orangeBase,
                  }}
                  thumbColor={colors.background}
                  ios_backgroundColor={colors.yellow2}
                />
              </View>
              {index < notificationOptions.length - 1 && (
                <View style={styles.separator} />
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Notification

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
    color: colors.font2,
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
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  notificationLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.font,
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: colors.yellow2,
  },
})
