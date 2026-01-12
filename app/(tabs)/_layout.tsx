import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { colors } from '../utils/colors'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.font2,
        tabBarInactiveTintColor: colors.font2,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.orangeBase,
          borderTopWidth: 0,
          height: Platform.OS === 'ios' ? 70 : 70,
          paddingBottom: Platform.OS === 'ios' ? 10 : 8,
          paddingTop: 10,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarIconStyle: {
          marginTop: 0,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? { backgroundColor: 'rgba(255, 255, 255, 0.2)', width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' } : {}}>
              <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Menu"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? { backgroundColor: 'rgba(255, 255, 255, 0.2)', width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' } : {}}>
              <Ionicons name={focused ? "restaurant" : "restaurant-outline"} size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? { backgroundColor: 'rgba(255, 255, 255, 0.2)', width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' } : {}}>
              <Ionicons name={focused ? "heart" : "heart-outline"} size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Orders"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? { backgroundColor: 'rgba(255, 255, 255, 0.2)', width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' } : {}}>
              <Ionicons name={focused ? "clipboard" : "clipboard-outline"} size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Support"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? { backgroundColor: 'rgba(255, 255, 255, 0.2)', width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' } : {}}>
              <Ionicons name={focused ? "headset" : "headset-outline"} size={24} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  )
}
