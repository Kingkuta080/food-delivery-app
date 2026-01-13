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

interface Address {
  id: string
  name: string
  address: string
}

const Delivery = () => {
  const router = useRouter()
  const [selectedAddress, setSelectedAddress] = useState<string>('2') // My Office is selected

  const addresses: Address[] = [
    {
      id: '1',
      name: 'My home',
      address: '778 Locust View Drive Oakland, CA',
    },
    {
      id: '2',
      name: 'My Office',
      address: '778 Locust View Drive Oakland, CA',
    },
    {
      id: '3',
      name: "Parent's House",
      address: '778 Locust View Drive Oakland, CA',
    },
  ]

  const handleAddNewAddress = () => {
    router.push('/(screens)/AddNewAddress')
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
        <Text style={styles.headerTitle}>Delivery Address</Text>
      </View>

      {/* White Content Area */}
      <View style={styles.contentSection}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Address List */}
          {addresses.map((address) => (
            <TouchableOpacity
              key={address.id}
              style={styles.addressItem}
              activeOpacity={0.7}
              onPress={() => setSelectedAddress(address.id)}
            >
              {/* Left Side - Icon and Address Info */}
              <View style={styles.addressInfo}>
                <View style={styles.iconContainer}>
                  <Ionicons
                    name="home-outline"
                    size={24}
                    color={colors.orangeBase}
                  />
                </View>
                <View style={styles.addressDetails}>
                  <Text
                    style={[
                      styles.addressName,
                      selectedAddress === address.id && styles.addressNameSelected,
                    ]}
                  >
                    {address.name}
                  </Text>
                  <Text style={styles.addressText}>{address.address}</Text>
                </View>
              </View>

              {/* Right Side - Radio Button */}
              <View style={styles.radioContainer}>
                <View
                  style={[
                    styles.radioButton,
                    selectedAddress === address.id && styles.radioButtonSelected,
                  ]}
                >
                  {selectedAddress === address.id && (
                    <View style={styles.radioButtonInner} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}

          {/* Add New Address Button */}
          <TouchableOpacity
            style={styles.addButton}
            activeOpacity={0.7}
            onPress={handleAddNewAddress}
          >
            <Text style={styles.addButtonText}>Add New Address</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Delivery

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
  addressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.yellow2,
  },
  addressInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 16,
  },
  iconContainer: {
    marginRight: 16,
  },
  addressDetails: {
    flex: 1,
  },
  addressName: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.font,
    marginBottom: 4,
  },
  addressNameSelected: {
    color: colors.orangeBase,
    textDecorationLine: 'underline',
  },
  addressText: {
    fontSize: 14,
    color: colors.font,
    opacity: 0.6,
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
    backgroundColor: colors.yellow2,
    borderWidth: 1,
    borderColor: colors.orangeBase,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.orangeBase,
  },
})
