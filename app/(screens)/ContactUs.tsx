import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../utils/colors'

type TabType = 'FAQ' | 'Contact Us'

interface ContactOption {
  id: string
  label: string
  icon: keyof typeof Ionicons.glyphMap
}

const ContactUs = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabType>('Contact Us')

  const contactOptions: ContactOption[] = [
    {
      id: '1',
      label: 'Customer service',
      icon: 'headset-outline',
    },
    {
      id: '2',
      label: 'Website',
      icon: 'globe-outline',
    },
    {
      id: '3',
      label: 'Whatsapp',
      icon: 'logo-whatsapp',
    },
    {
      id: '4',
      label: 'Facebook',
      icon: 'logo-facebook',
    },
    {
      id: '5',
      label: 'Instagram',
      icon: 'logo-instagram',
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
          <Ionicons name="chevron-back" size={24} color={colors.orangeBase} />
        </TouchableOpacity>

        {/* Title and Subtitle */}
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Contact Us</Text>
          <Text style={styles.headerSubtitle}>How Can We Help You?</Text>
        </View>
      </View>

      {/* White Content Area */}
      <View style={styles.contentSection}>
        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'FAQ' && styles.tabActive,
            ]}
            activeOpacity={0.7}
            onPress={() => setActiveTab('FAQ')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'FAQ' && styles.tabTextActive,
              ]}
            >
              FAQ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'Contact Us' && styles.tabActive,
            ]}
            activeOpacity={0.7}
            onPress={() => setActiveTab('Contact Us')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'Contact Us' && styles.tabTextActive,
              ]}
            >
              Contact Us
            </Text>
          </TouchableOpacity>
        </View>

        {/* Contact Options List */}
        {activeTab === 'Contact Us' && (
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {contactOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={styles.contactItem}
                activeOpacity={0.7}
              >
                <View style={styles.contactItemLeft}>
                  <Ionicons
                    name={option.icon}
                    size={24}
                    color={colors.orangeBase}
                  />
                  <Text style={styles.contactItemText}>{option.label}</Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={colors.orangeBase}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}

        {/* FAQ Content (placeholder) */}
        {activeTab === 'FAQ' && (
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <Text style={styles.placeholderText}>FAQ content coming soon</Text>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  )
}

export default ContactUs

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
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 40,
    padding: 6,
    zIndex: 1,
  },
  headerContent: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.font2,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.font2,
    opacity: 0.9,
  },
  contentSection: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  tab: {
    flex: 1,
    backgroundColor: colors.yellow2,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    backgroundColor: colors.orangeBase,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.orangeBase,
  },
  tabTextActive: {
    color: colors.font2,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.yellow2,
  },
  contactItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  contactItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.orangeBase,
    marginLeft: 16,
  },
  placeholderText: {
    fontSize: 16,
    color: colors.font,
    textAlign: 'center',
    marginTop: 40,
    opacity: 0.6,
  },
})
