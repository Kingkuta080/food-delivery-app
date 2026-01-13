import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
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

const AddCard = () => {
  const router = useRouter()
  const [cardHolderName, setCardHolderName] = useState('John Smith')
  const [cardNumber, setCardNumber] = useState('000 000 000 00')
  const [expiryDate, setExpiryDate] = useState('04/28')
  const [cvv, setCvv] = useState('0000')

  const handleSaveCard = () => {
    // Handle card save
    router.back()
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
        <Text style={styles.headerTitle}>Add Card</Text>
      </View>

      {/* White Content Area */}
      <View style={styles.contentSection}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Credit Card Visualization */}
          <View style={styles.cardContainer}>
            
            <Image source={require('../../assets/images/card2.svg')} style={styles.cardIcon} />
          </View>

          {/* Input Fields */}
          <View style={styles.formContainer}>
            {/* Card Holder Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Card holder name</Text>
              <TextInput
                style={styles.input}
                value={cardHolderName}
                onChangeText={setCardHolderName}
                placeholder="Card holder name"
                placeholderTextColor={colors.font}
              />
            </View>

            {/* Card Number */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Card Number</Text>
              <TextInput
                style={styles.input}
                value={cardNumber}
                onChangeText={setCardNumber}
                placeholder="000 000 000 00"
                placeholderTextColor={colors.font}
                keyboardType="numeric"
                maxLength={19}
              />
            </View>

            {/* Expiry Date and CVV */}
            <View style={styles.rowInputs}>
              <View style={[styles.inputGroup, styles.halfWidth]}>
                <Text style={styles.label}>Expiry Date</Text>
                <TextInput
                  style={styles.input}
                  value={expiryDate}
                  onChangeText={setExpiryDate}
                  placeholder="04/28"
                  placeholderTextColor={colors.font}
                  keyboardType="numeric"
                  maxLength={5}
                />
              </View>
              <View style={[styles.inputGroup, styles.halfWidth]}>
                <Text style={styles.label}>CVV</Text>
                <TextInput
                  style={styles.input}
                  value={cvv}
                  onChangeText={setCvv}
                  placeholder="0000"
                  placeholderTextColor={colors.font}
                  keyboardType="numeric"
                  maxLength={4}
                  secureTextEntry
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Save Card Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.saveButton}
          activeOpacity={0.8}
          onPress={handleSaveCard}
        >
          <Text style={styles.saveButtonText}>Save Card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default AddCard

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
    paddingBottom: 100, // Space for button
  },
  cardContainer: {
    marginBottom: 32,
    alignItems: 'center',
  },
  cardIcon: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    padding: 24,
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: colors.orangeBase,
    overflow: 'hidden',
  },
  cardGradientOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '60%',
    height: '100%',
    backgroundColor: colors.yellowBase,
    opacity: 0.6,
  },
  cardChipTop: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  cardChipBottom: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1,
  },
  chipPlaceholder: {
    width: 40,
    height: 30,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  cardNumber: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.font2,
    letterSpacing: 2,
    marginTop: 40,
    textAlign: 'center',
    zIndex: 1,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    zIndex: 1,
  },
  cardDetailItem: {
    flex: 1,
  },
  cardLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.font2,
    opacity: 0.8,
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.font2,
  },
  formContainer: {
    gap: 20,
  },
  inputGroup: {
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.font,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.yellow2,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: colors.font,
    borderWidth: 0,
  },
  rowInputs: {
    flexDirection: 'row',
    gap: 12,
  },
  halfWidth: {
    flex: 1,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 16,
    backgroundColor: colors.background,
  },
  saveButton: {
    backgroundColor: colors.orangeBase,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.font2,
    textTransform: 'uppercase',
  },
})
