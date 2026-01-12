import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/colors'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellowBase,
  },
  headerSection: {
    backgroundColor: colors.yellowBase,
    paddingTop: SCREEN_WIDTH * 0.13, // Responsive padding top
    paddingHorizontal: SCREEN_WIDTH * 0.04,
    paddingBottom: SCREEN_WIDTH * 0.05,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SCREEN_WIDTH * 0.04,
    gap: Math.max(8, SCREEN_WIDTH * 0.02),
    flexWrap: 'wrap',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: Math.max(10, SCREEN_WIDTH * 0.03),
    paddingHorizontal: Math.max(12, SCREEN_WIDTH * 0.03),
    paddingVertical: Math.max(10, SCREEN_WIDTH * 0.025),
    borderWidth: 1,
    borderColor: '#E1BEE7',
    minHeight: 44,
    maxHeight: 50,
    minWidth: SCREEN_WIDTH * 0.5,
  },
  searchInput: {
    flex: 1,
    fontSize: Math.max(14, SCREEN_WIDTH * 0.037),
    color: colors.font,
    paddingVertical: 0,
    minHeight: 20,
  },
  filterIcon: {
    width: Math.max(28, SCREEN_WIDTH * 0.07),
    height: Math.max(28, SCREEN_WIDTH * 0.07),
    borderRadius: Math.max(14, SCREEN_WIDTH * 0.035),
    backgroundColor: colors.orange2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Math.max(8, SCREEN_WIDTH * 0.02),
    minWidth: 26,
    minHeight: 26,
    maxWidth: 32,
    maxHeight: 32,
  },
  actionIcons: {
    flexDirection: 'row',
    gap: Math.max(6, SCREEN_WIDTH * 0.018),
    flexShrink: 0,
  },
  actionIcon: {
    width: Math.max(36, SCREEN_WIDTH * 0.095),
    height: Math.max(36, SCREEN_WIDTH * 0.095),
    borderRadius: Math.max(18, SCREEN_WIDTH * 0.0475),
    backgroundColor: colors.background,
    borderWidth: 1.5,
    borderColor: colors.orangeBase,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 34,
    minHeight: 34,
    maxWidth: 42,
    maxHeight: 42,
  },
  greetingContainer: {
    marginTop: SCREEN_WIDTH * 0.02,
  },
  greetingTitle: {
    fontSize: Math.max(22, SCREEN_WIDTH * 0.07),
    fontWeight: '700',
    color: colors.font2,
    marginBottom: SCREEN_WIDTH * 0.01,
  },
  greetingSubtitle: {
    fontSize: Math.max(12, SCREEN_WIDTH * 0.035),
    color: colors.orangeBase,
    opacity: 0.8,
  },
  contentSection: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: SCREEN_WIDTH * 0.04,
    borderTopRightRadius: SCREEN_WIDTH * 0.04,
    paddingTop: SCREEN_WIDTH * 0.05,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: SCREEN_WIDTH * 0.05,
  },
  categoriesScroll: {
    marginBottom: SCREEN_WIDTH * 0.06,
  },
  categoriesContainer: {
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    gap: SCREEN_WIDTH * 0.04,
  },
  categoryItem: {
    alignItems: 'center',
    minWidth: SCREEN_WIDTH * 0.18,
    maxWidth: SCREEN_WIDTH * 0.2,
    flex: 0,
  },
  categoryIcon: {
    width: Math.max(50, SCREEN_WIDTH * 0.15),
    height: Math.max(50, SCREEN_WIDTH * 0.15),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Math.max(6, SCREEN_WIDTH * 0.02),
    minWidth: 48,
    minHeight: 48,
    maxWidth: 72,
    maxHeight: 72,
    aspectRatio: 1,
    overflow: 'hidden',
    backgroundColor: colors.yellow3,
    borderWidth: 1.5,
    borderColor: colors.orangeBase,
    borderRadius: Math.max(25, SCREEN_WIDTH * 0.075),
  },
  categoryImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  categoryText: {
    fontSize: Math.max(10, SCREEN_WIDTH * 0.03),
    fontWeight: '600',
    color: colors.font,
    textAlign: 'center',
    marginTop: Math.max(4, SCREEN_WIDTH * 0.01),
  },
  section: {
    marginBottom: SCREEN_WIDTH * 0.06,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    marginBottom: SCREEN_WIDTH * 0.03,
  },
  sectionTitle: {
    fontSize: Math.max(18, SCREEN_WIDTH * 0.05),
    fontWeight: '700',
    color: colors.font,
  },
  viewAllText: {
    fontSize: Math.max(12, SCREEN_WIDTH * 0.035),
    fontWeight: '600',
    color: colors.orangeBase,
  },
  itemsContainer: {
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    gap: SCREEN_WIDTH * 0.03,
  },
  foodCard: {
    width: SCREEN_WIDTH * 0.42,
    backgroundColor: colors.background,
    borderRadius: SCREEN_WIDTH * 0.04,
    padding: SCREEN_WIDTH * 0.03,
    marginRight: SCREEN_WIDTH * 0.03,
    borderWidth: 1,
    borderColor: colors.yellow2,
    minWidth: 140,
    maxWidth: 180,
  },
  foodImagePlaceholder: {
    width: '100%',
    aspectRatio: 1.2,
    backgroundColor: colors.yellow2,
    borderRadius: SCREEN_WIDTH * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SCREEN_WIDTH * 0.02,
    minHeight: 100,
    maxHeight: 140,
    overflow: 'hidden',
    position: 'relative',
  },
  foodImage: {
    width: 135,
    height: 200,
  },
  priceTag: {
    position: 'absolute',
    bottom: SCREEN_WIDTH * 0.015,
    right: SCREEN_WIDTH * 0.001,
    backgroundColor: colors.orangeBase,
    paddingHorizontal: SCREEN_WIDTH * 0.02,
    paddingVertical: SCREEN_WIDTH * 0.01,
    borderRadius: SCREEN_WIDTH * 0.015,
  },
  priceText: {
    fontSize: Math.max(10, SCREEN_WIDTH * 0.03),
    fontWeight: '700',
    color: colors.font2,
  },
  foodName: {
    fontSize: Math.max(12, SCREEN_WIDTH * 0.035),
    fontWeight: '600',
    color: colors.font,
  },
  recommendCard: {
    width: SCREEN_WIDTH * 0.47,
    backgroundColor: colors.background,
    borderRadius: SCREEN_WIDTH * 0.04,
    padding: SCREEN_WIDTH * 0.03,
    marginRight: SCREEN_WIDTH * 0.03,
    borderWidth: 1,
    borderColor: colors.yellow2,
    minWidth: 160,
    maxWidth: 200,
  },
  recommendImagePlaceholder: {
    width: '100%',
    aspectRatio: 1.25,
    backgroundColor: colors.yellow2,
    borderRadius: SCREEN_WIDTH * 0.03,
    marginBottom: SCREEN_WIDTH * 0.02,
    minHeight: 120,
    maxHeight: 160,
    overflow: 'hidden',
    position: 'relative',
  },
  recommendImage: {
    width: '100%',
    height: '100%',
  },
  ratingContainer: {
    position: 'absolute',
    top: SCREEN_WIDTH * 0.02,
    left: SCREEN_WIDTH * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SCREEN_WIDTH * 0.01,
    zIndex: 2,
    backgroundColor: colors.background,
    paddingHorizontal: SCREEN_WIDTH * 0.02,
    paddingVertical: SCREEN_WIDTH * 0.01,
    borderRadius: SCREEN_WIDTH * 0.02,
  },
  ratingText: {
    fontSize: Math.max(10, SCREEN_WIDTH * 0.03),
    fontWeight: '600',
    color: colors.font,
  },
  heartIcon: {
    marginLeft: 'auto',
    padding: SCREEN_WIDTH * 0.01,
  },
  recommendPriceTag: {
    position: 'absolute',
    bottom: SCREEN_WIDTH * 0.02,
    right: SCREEN_WIDTH * 0.02,
    backgroundColor: colors.orangeBase,
    paddingHorizontal: SCREEN_WIDTH * 0.02,
    paddingVertical: SCREEN_WIDTH * 0.01,
    borderRadius: SCREEN_WIDTH * 0.015,
    zIndex: 2,
  },
  recommendPriceText: {
    fontSize: Math.max(10, SCREEN_WIDTH * 0.03),
    fontWeight: '700',
    color: colors.font2,
  },
  bannerContainer: {
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    marginBottom: SCREEN_WIDTH * 0.06,
  },
  bannerImage: {
    width: '100%',
    aspectRatio: 2.5,
    borderRadius: SCREEN_WIDTH * 0.04,
    marginBottom: SCREEN_WIDTH * 0.03,
    minHeight: 120,
    maxHeight: 200,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SCREEN_WIDTH * 0.015,
  },
  dot: {
    height: SCREEN_WIDTH * 0.015,
    borderRadius: SCREEN_WIDTH * 0.0075,
    minHeight: 4,
    maxHeight: 8,
  },
  dotActive: {
    width: SCREEN_WIDTH * 0.05,
    backgroundColor: colors.orangeBase,
    minWidth: 16,
    maxWidth: 24,
  },
  dotInactive: {
    width: SCREEN_WIDTH * 0.015,
    backgroundColor: colors.yellow2,
    minWidth: 4,
    maxWidth: 8,
  },
})
