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

const Review = () => {
  const router = useRouter()
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const handleSubmit = () => {
    // Handle review submission
    router.back()
  }

  const handleCancel = () => {
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
          onPress={handleCancel}
        >
          <Ionicons name="chevron-back" size={24} color={colors.orangeBase} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.headerTitle}>Leave a Review</Text>
      </View>

      {/* White Content Area */}
      <View style={styles.contentSection}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Dish Image */}
          <View style={styles.imageContainer}>
            <View style={styles.dishImageWrapper}>
              <Image
                source={require('../../assets/images/food2.svg')}
                style={styles.dishImage}
                contentFit="cover"
              />
            </View>
          </View>

          {/* Dish Name */}
          <Text style={styles.dishName}>Chicken Curry</Text>

          {/* Review Prompt */}
          <Text style={styles.reviewPrompt}>
            We&apos;d love to know what you think of your dish.
          </Text>

          {/* Rating Stars */}
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                activeOpacity={0.7}
                onPress={() => setRating(star)}
                style={styles.starButton}
              >
                <Ionicons
                  name={star <= rating ? 'star' : 'star-outline'}
                  size={32}
                  color={colors.orangeBase}
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Comment Section */}
          <Text style={styles.commentLabel}>Leave us your comment!</Text>
          <TextInput
            style={styles.commentInput}
            placeholder="Write Review..."
            placeholderTextColor={colors.font}
            value={comment}
            onChangeText={setComment}
            multiline
            numberOfLines={6}
            textAlignVertical="top"
          />
        </ScrollView>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          activeOpacity={0.7}
          onPress={handleCancel}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}
          activeOpacity={0.8}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Review

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
    color: colors.font,
  },
  contentSection: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 32,
    paddingHorizontal: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // Space for buttons
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  dishImageWrapper: {
    width: 300,
    height: 290,
    borderRadius: 70,
    overflow: 'hidden',
    backgroundColor: colors.yellow2,
    borderWidth: 3,
    borderColor: colors.yellow2,
  },
  dishImage: {
    width: '100%',
    height: '100%',
  },
  dishName: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.font,
    textAlign: 'center',
    marginBottom: 16,
  },
  reviewPrompt: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.font,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginBottom: 32,
  },
  starButton: {
    padding: 4,
  },
  commentLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.font,
    textAlign: 'center',
    marginBottom: 12,
  },
  commentInput: {
    backgroundColor: colors.yellow2,
    borderRadius: 12,
    padding: 16,
    fontSize: 14,
    color: colors.font,
    minHeight: 140,
    textAlignVertical: 'top',
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 16,
    gap: 12,
    backgroundColor: colors.background,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: colors.yellow2,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.font,
    textTransform: 'uppercase',
  },
  submitButton: {
    flex: 1,
    backgroundColor: colors.orangeBase,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.font2,
    textTransform: 'uppercase',
  },
})
