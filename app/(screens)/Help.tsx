import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../utils/colors'

type MainTabType = 'FAQ' | 'Contact Us'
type CategoryType = 'General' | 'Account' | 'Services'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const Help = () => {
  const router = useRouter()
  const [activeMainTab, setActiveMainTab] = useState<MainTabType>('FAQ')
  const [activeCategory, setActiveCategory] = useState<CategoryType>('General')
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>('1')
  const [searchQuery, setSearchQuery] = useState('')

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',
    },
    {
      id: '2',
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a.',
    },
    {
      id: '3',
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a.',
    },
    {
      id: '4',
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a.',
    },
    {
      id: '5',
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a.',
    },
    {
      id: '6',
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a.',
    },
  ]

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
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

        {/* Title and Subtitle */}
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Help & FAQs</Text>
          <Text style={styles.headerSubtitle}>How Can We Help You?</Text>
        </View>
      </View>

      {/* White Content Area */}
      <View style={styles.contentSection}>
        {/* Main Tabs */}
        <View style={styles.mainTabsContainer}>
          <TouchableOpacity
            style={[
              styles.mainTab,
              activeMainTab === 'FAQ' && styles.mainTabActive,
            ]}
            activeOpacity={0.7}
            onPress={() => setActiveMainTab('FAQ')}
          >
            <Text
              style={[
                styles.mainTabText,
                activeMainTab === 'FAQ' && styles.mainTabTextActive,
              ]}
            >
              FAQ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.mainTab,
              activeMainTab === 'Contact Us' && styles.mainTabActive,
            ]}
            activeOpacity={0.7}
            onPress={() => setActiveMainTab('Contact Us')}
          >
            <Text
              style={[
                styles.mainTabText,
                activeMainTab === 'Contact Us' && styles.mainTabTextActive,
              ]}
            >
              Contact Us
            </Text>
          </TouchableOpacity>
        </View>

        {/* Category Tabs */}
        {activeMainTab === 'FAQ' && (
          <View style={styles.categoryTabsContainer}>
            {(['General', 'Account', 'Services'] as CategoryType[]).map(
              (category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryTab,
                    activeCategory === category && styles.categoryTabActive,
                  ]}
                  activeOpacity={0.7}
                  onPress={() => setActiveCategory(category)}
                >
                  <Text
                    style={[
                      styles.categoryTabText,
                      activeCategory === category && styles.categoryTabTextActive,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ),
            )}
          </View>
        )}

        {/* Search Bar */}
        {activeMainTab === 'FAQ' && (
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor={colors.font}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
            <TouchableOpacity style={styles.filterButton} activeOpacity={0.7}>
              <Ionicons
                name="options-outline"
                size={20}
                color={colors.orangeBase}
              />
            </TouchableOpacity>
          </View>
        )}

        {/* FAQ List */}
        {activeMainTab === 'FAQ' && (
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {faqItems.map((faq, index) => (
              <View key={faq.id}>
                <TouchableOpacity
                  style={styles.faqItem}
                  activeOpacity={0.7}
                  onPress={() => toggleFAQ(faq.id)}
                >
                  <Text style={styles.faqQuestion}>{faq.question}</Text>
                  <Ionicons
                    name={
                      expandedFAQ === faq.id
                        ? 'chevron-down'
                        : 'chevron-down-outline'
                    }
                    size={20}
                    color={colors.orangeBase}
                  />
                </TouchableOpacity>
                {expandedFAQ === faq.id && (
                  <View style={styles.faqAnswerContainer}>
                    <Text style={styles.faqAnswer}>{faq.answer}</Text>
                  </View>
                )}
                {index < faqItems.length - 1 && <View style={styles.separator} />}
              </View>
            ))}
          </ScrollView>
        )}

        {/* Contact Us Content */}
        {activeMainTab === 'Contact Us' && (
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <Text style={styles.placeholderText}>
              Contact Us content coming soon
            </Text>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  )
}

export default Help

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
    color: colors.font,
    opacity: 0.7,
  },
  contentSection: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  mainTabsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  mainTab: {
    flex: 1,
    backgroundColor: colors.yellow2,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTabActive: {
    backgroundColor: colors.orangeBase,
  },
  mainTabText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.orangeBase,
  },
  mainTabTextActive: {
    color: colors.font2,
  },
  categoryTabsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  categoryTab: {
    flex: 1,
    backgroundColor: colors.yellow2,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTabActive: {
    backgroundColor: colors.orangeBase,
  },
  categoryTabText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.orangeBase,
  },
  categoryTabTextActive: {
    color: colors.font2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  searchBar: {
    flex: 1,
    backgroundColor: colors.yellow2,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 0,
  },
  searchInput: {
    fontSize: 14,
    color: colors.font,
    padding: 0,
  },
  filterButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.orangeBase,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  faqQuestion: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.orangeBase,
    marginRight: 12,
  },
  faqAnswerContainer: {
    paddingBottom: 16,
    paddingLeft: 0,
  },
  faqAnswer: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.font,
    opacity: 0.8,
  },
  separator: {
    height: 1,
    backgroundColor: colors.yellow2,
  },
  placeholderText: {
    fontSize: 16,
    color: colors.font,
    textAlign: 'center',
    marginTop: 40,
    opacity: 0.6,
  },
})
