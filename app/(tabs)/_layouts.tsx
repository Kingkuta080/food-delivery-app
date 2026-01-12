import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { Platform, StyleSheet } from 'react-native'
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
          height: Platform.OS === 'ios' ? 60 : 60,
          paddingBottom: Platform.OS === 'ios' ? 8 : 6,
          paddingTop: 8,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 0,
          shadowOpacity: 0,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        },
        tabBarIconStyle: {
          marginTop: 0,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Menu"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="restaurant-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Orders"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="clipboard-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Support"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="headset-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
