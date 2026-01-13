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

interface PaymentMethod {
  id: string
  type: string
  name: string
  icon: keyof typeof Ionicons.glyphMap
}

const PaymentMethods = () => {
  const router = useRouter()
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)

  const paymentMethods: PaymentMethod[] = [
    {
      id: '1',
      type: 'credit',
      name: '*** *** *** 43',
      icon: 'card-outline',
    },
    {
      id: '2',
      type: 'apple',
      name: 'Apple Play',
      icon: 'logo-apple',
    },
    {
      id: '3',
      type: 'paypal',
      name: 'Paypal',
      icon: 'logo-paypal',
    },
    {
      id: '4',
      type: 'google',
      name: 'Google Play',
      icon: 'logo-google-playstore',
    },
  ]

  const handleAddNewCard = () => {
    router.push('/(screens)/AddCard')
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
        <Text style={styles.headerTitle}>Payment Methods</Text>
      </View>

      {/* White Content Area */}
      <View style={styles.contentSection}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Payment Methods List */}
          {paymentMethods.map((method) => (
            <TouchableOpacity
              key={method.id}
              style={styles.paymentItem}
              activeOpacity={0.7}
              onPress={() => setSelectedMethod(method.id)}
            >
              {/* Left Side - Icon */}
              <View style={styles.iconContainer}>
                <Ionicons
                  name={method.icon}
                  size={28}
                  color={colors.orangeBase}
                />
              </View>

              {/* Middle - Payment Method Name */}
              <View style={styles.paymentInfo}>
                <Text style={styles.paymentName}>{method.name}</Text>
              </View>

              {/* Right Side - Radio Button */}
              <View style={styles.radioContainer}>
                <View
                  style={[
                    styles.radioButton,
                    selectedMethod === method.id && styles.radioButtonSelected,
                  ]}
                >
                  {selectedMethod === method.id && (
                    <View style={styles.radioButtonInner} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}

          {/* Add New Card Button */}
          <TouchableOpacity
            style={styles.addButton}
            activeOpacity={0.7}
            onPress={handleAddNewCard}
          >
            <Text style={styles.addButtonText}>Add New Card</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default PaymentMethods

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
    color: colors.orangeBase,
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
  paymentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.yellow2,
  },
  iconContainer: {
    marginRight: 16,
    width: 40,
    alignItems: 'center',
  },
  paymentInfo: {
    flex: 1,
  },
  paymentName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.font,
  },
  radioContainer: {
    marginLeft: 8,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.orangeBase,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    borderColor: colors.orangeBase,
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.orangeBase,
  },
  addButton: {
    marginTop: 24,
    backgroundColor: colors.orangeBase,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.font2,
  },
})
