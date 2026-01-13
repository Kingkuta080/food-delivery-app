import { Ionicons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import {
  Animated,
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../utils/colors'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const DRAWER_WIDTH = SCREEN_WIDTH * 0.75 // 75% of screen width

interface ProfileDrawerProps {
  visible: boolean
  onClose: () => void
}

interface MenuItem {
  id: string
  label: string
  icon: keyof typeof Ionicons.glyphMap
  onPress?: () => void
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({ visible, onClose }) => {
  const slideAnim = React.useRef(new Animated.Value(DRAWER_WIDTH)).current
  const overlayOpacity = React.useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (visible) {
      // Open drawer
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start()
    } else {
      // Close drawer
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: DRAWER_WIDTH,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start()
    }
  }, [visible, slideAnim, overlayOpacity])

  const menuItems: MenuItem[] = [
    {
      id: 'orders',
      label: 'My Orders',
      icon: 'bag-outline',
      onPress: () => {
        onClose()
        // Navigate to orders - you can add navigation here
      },
    },
    {
      id: 'profile',
      label: 'My Profile',
      icon: 'person-outline',
      onPress: () => {
        onClose()
        // Navigate to profile - you can add navigation here
      },
    },
    {
      id: 'address',
      label: 'Delivery Address',
      icon: 'location-outline',
      onPress: () => {
        onClose()
        // Navigate to address - you can add navigation here
      },
    },
    {
      id: 'payment',
      label: 'Payment Methods',
      icon: 'card-outline',
      onPress: () => {
        onClose()
        // Navigate to payment - you can add navigation here
      },
    },
    {
      id: 'contact',
      label: 'Contact Us',
      icon: 'call-outline',
      onPress: () => {
        onClose()
        // Navigate to contact - you can add navigation here
      },
    },
    {
      id: 'help',
      label: 'Help & FAQs',
      icon: 'chatbubble-outline',
      onPress: () => {
        onClose()
        // Navigate to help - you can add navigation here
      },
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'settings-outline',
      onPress: () => {
        onClose()
        // Navigate to settings - you can add navigation here
      },
    },
    {
      id: 'logout',
      label: 'Log Out',
      icon: 'log-out-outline',
      onPress: () => {
        onClose()
        // Handle logout - you can add logout logic here
      },
    },
  ]

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        {/* Overlay */}
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={onClose}
        >
          <Animated.View
            style={[
              styles.overlayBackground,
              {
                opacity: overlayOpacity,
              },
            ]}
          />
        </TouchableOpacity>

        {/* Drawer */}
        <Animated.View
          style={[
            styles.drawer,
            {
              transform: [{ translateX: slideAnim }],
            },
          ]}
        >
          <SafeAreaView style={styles.drawerContent} edges={['top', 'bottom']}>
            {/* Profile Section */}
            <View style={styles.profileSection}>
              <View style={styles.profileImageContainer}>
                {/* Placeholder for profile image - you can replace with actual image */}
                <View style={styles.profileImagePlaceholder}>
                  <Ionicons name="person" size={40} color={colors.font2} />
                </View>
              </View>
              <Text style={styles.profileName}>John Smith</Text>
              <Text style={styles.profileEmail}>Loremipsum@email.com</Text>
            </View>

            {/* Menu Items */}
            <ScrollView
              style={styles.menuContainer}
              showsVerticalScrollIndicator={false}
            >
              {menuItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <TouchableOpacity
                    style={styles.menuItem}
                    activeOpacity={0.7}
                    onPress={item.onPress}
                  >
                    <View style={styles.menuIcon}>
                      <Ionicons
                        name={item.icon}
                        size={20}
                        color={colors.orangeBase}
                      />
                    </View>
                    <Text style={styles.menuText}>{item.label}</Text>
                  </TouchableOpacity>
                  {index < menuItems.length - 1 && (
                    <View style={styles.separator} />
                  )}
                </React.Fragment>
              ))}
            </ScrollView>
          </SafeAreaView>
        </Animated.View>
      </View>
    </Modal>
  )
}

export default ProfileDrawer

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlayBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: DRAWER_WIDTH,
    backgroundColor: colors.orangeBase,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  drawerContent: {
    flex: 1,
  },
  profileSection: {
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 24,
    alignItems: 'flex-start',
  },
  profileImageContainer: {
    marginBottom: 16,
  },
  profileImagePlaceholder: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.font2,
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: colors.font2,
    opacity: 0.9,
  },
  menuContainer: {
    flex: 1,
    paddingTop: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  menuIcon: {
    marginRight: 16,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.font2,
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginLeft: 24,
    marginRight: 24,
  },
})
