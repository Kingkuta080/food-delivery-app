import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import React from 'react'
import { Dimensions, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/colors'
import { styles } from './HomeStyles'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

const Home = () => {
  const categories = [
    { name: 'Snacks', image: require('../../assets/images/snack.svg') },
    { name: 'Meal', image: require('../../assets/images/meal.svg') },
    { name: 'Vegan', image: require('../../assets/images/vegan.svg') },
    { name: 'Dessert', image: require('../../assets/images/dessert.svg') },
    { name: 'Drinks', image: require('../../assets/images/snack.svg') }, // Fallback - replace with drinks.svg if available
  ]

  const bestSellers = [
    { price: '$103.0', image: require('../../assets/images/food1.svg') },
    { price: '$50.0', image: require('../../assets/images/food2.svg') },
    { price: '$12.99', image: require('../../assets/images/food3.svg') },
    { price: '$8.20', image: require('../../assets/images/food4.svg') },
  ]

  const recommends = [
    { name: 'Chicken Burger', price: '$10.0', rating: '5.0', image: require('../../assets/images/recom1.svg') },
    { name: 'Spring Rolls', price: '$25.0', rating: '5.0', image: require('../../assets/images/recom2.svg') },
    { name: 'Spring Rolls', price: '$25.0', rating: '5.0', image: require('../../assets/images/recom2.svg') },
  ]

  return (
    <View style={styles.container}>
      {/* Yellow Header Section */}
      <View style={styles.headerSection}>
        {/* Search Bar and Action Icons */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor={colors.font}
            />
            <TouchableOpacity style={styles.filterIcon} activeOpacity={0.7}>
              <Ionicons name="options-outline" size={Math.max(16, SCREEN_WIDTH * 0.045)} color={colors.orangeBase} />
            </TouchableOpacity>
          </View>
          <View style={styles.actionIcons}>
            <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
              <Ionicons name="cart-outline" size={Math.max(18, SCREEN_WIDTH * 0.055)} color={colors.orangeBase} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
              <Ionicons name="notifications-outline" size={Math.max(18, SCREEN_WIDTH * 0.055)} color={colors.orangeBase} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
              <Ionicons name="person-outline" size={Math.max(18, SCREEN_WIDTH * 0.055)} color={colors.orangeBase} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Greeting Message */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingTitle}>Good Morning</Text>
          <Text style={styles.greetingSubtitle}>Rise And Shine! It&apos;s Breakfast Time</Text>
        </View>
      </View>

      {/* White Main Content Area */}
      <View style={styles.contentSection}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Food Categories */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesScroll}
            contentContainerStyle={styles.categoriesContainer}
          >
            {categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryItem} activeOpacity={0.7}>
                <View style={styles.categoryIcon}>
                  <Image 
                    source={category.image} 
                    style={styles.categoryImage}
                    contentFit="contain"
                  />
                </View>
                <Text style={styles.categoryText}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Best Seller Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Best Seller</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.viewAllText}>View All &gt;</Text>
              </TouchableOpacity>
            </View>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.itemsContainer}
            >
              {bestSellers.map((item, index) => (
                <TouchableOpacity key={index} style={styles.foodCard} activeOpacity={0.8}>
                  <View style={styles.foodImagePlaceholder}>
                    <Image 
                      source={item.image} 
                      style={styles.foodImage}
                      contentFit="cover"
                    />
                    <View style={styles.priceTag}>
                      <Text style={styles.priceText}>{item.price}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Promotional Banner */}
          <View style={styles.bannerContainer}>
            <Image 
              source={require('../../assets/images/banner1.png')} 
              style={styles.bannerImage}
              contentFit="cover"
            />
            <View style={styles.paginationDots}>
              <View style={[styles.dot, styles.dotInactive]} />
              <View style={[styles.dot, styles.dotActive]} />
              <View style={[styles.dot, styles.dotInactive]} />
            </View>
          </View>

          {/* Recommend Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recommend</Text>
            </View>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.itemsContainer}
            >
              {recommends.map((item, index) => (
                <TouchableOpacity key={index} style={styles.recommendCard} activeOpacity={0.8}>
                  <View style={styles.recommendImagePlaceholder}>
                    <Image 
                      source={item.image} 
                      style={styles.recommendImage}
                      contentFit="cover"
                    />
                    <View style={styles.ratingContainer}>
                      <Ionicons name="star" size={12} color={colors.orangeBase} />
                      <Text style={styles.ratingText}>{item.rating}</Text>
                      <TouchableOpacity style={styles.heartIcon} activeOpacity={0.7}>
                        <Ionicons name="heart-outline" size={16} color={colors.orangeBase} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.recommendPriceTag}>
                      <Text style={styles.recommendPriceText}>{item.price}</Text>
                    </View>
                  </View>
                  <Text style={styles.foodName}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Home
