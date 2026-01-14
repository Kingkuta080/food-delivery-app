import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../utils/colors'

type OrderFilter = 'Active' | 'Completed' | 'Cancelled'

interface Order {
  id: string
  name: string
  date: string
  time: string
  price: string
  items: string
  image: any
  status?: 'delivered' | 'active' | 'cancelled'
}

const Orders = () => {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState<OrderFilter>('Active')

  const filters: OrderFilter[] = ['Active', 'Completed', 'Cancelled']

  // Sample order data based on filter
  const activeOrders: Order[] = [
    {
      id: '1',
      name: 'Strawberry shake',
      date: '29 Nov',
      time: '01:20 pm',
      price: '$20.00',
      items: '2 items',
      image: require('../../assets/images/food1.svg'),
      status: 'active',
    },
  ]

  const completedOrders: Order[] = [
    {
      id: '2',
      name: 'Chicken Curry',
      date: '29 Nov',
      time: '01:20 pm',
      price: '$50.00',
      items: '2 items',
      image: require('../../assets/images/food2.svg'),
      status: 'delivered',
    },
    {
      id: '3',
      name: 'Bean and Vegetable Burger',
      date: '10 Nov',
      time: '06:05 pm',
      price: '$50.00',
      items: '2 items',
      image: require('../../assets/images/food3.svg'),
      status: 'delivered',
    },
    {
      id: '4',
      name: 'Coffee Latte',
      date: '10 Nov',
      time: '08:30 am',
      price: '$8.00',
      items: '1 item',
      image: require('../../assets/images/food4.svg'),
      status: 'delivered',
    },
    {
      id: '5',
      name: 'Strawberry Cheesecake',
      date: '03 Oct',
      time: '03:40 pm',
      price: '$22.00',
      items: '2 items',
      image: require('../../assets/images/food1.svg'),
      status: 'delivered',
    },
  ]

  const cancelledOrders: Order[] = [
    {
      id: '6',
      name: 'Sushi Wave',
      date: '02 Nov',
      time: '04:00 pm',
      price: '$103.00',
      items: '3 items',
      image: require('../../assets/images/food1.svg'),
      status: 'cancelled',
    },
    {
      id: '7',
      name: 'Fruit and Berry Tea',
      date: '12 Oct',
      time: '03:15 pm',
      price: '$15.00',
      items: '2 items',
      image: require('../../assets/images/food2.svg'),
      status: 'cancelled',
    },
  ]

  const getOrdersByFilter = (): Order[] => {
    switch (activeFilter) {
      case 'Active':
        return activeOrders
      case 'Completed':
        return completedOrders
      case 'Cancelled':
        return cancelledOrders
      default:
        return []
    }
  }

  const orders = getOrdersByFilter()
  const hasOrders = orders.length > 0

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
        <Text style={styles.headerTitle}>My Orders</Text>
      </View>

      {/* White Content Area */}
      <View style={styles.contentSection}>
        {/* Filter Tabs */}
        <View style={styles.filterContainer}>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterTab,
                activeFilter === filter && styles.filterTabActive,
              ]}
              activeOpacity={0.7}
              onPress={() => setActiveFilter(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  activeFilter === filter && styles.filterTextActive,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Orders List or Empty State */}
        {hasOrders ? (
          <ScrollView
            style={styles.ordersList}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.ordersListContent}
          >
             {orders.map((order) => (
               <View key={order.id} style={styles.orderCard}>
                 <View style={styles.orderCardContent}>
                   {/* Left Side - Order Image */}
                   <View style={styles.orderImageContainer}>
                     <Image
                       source={order.image}
                       style={styles.orderImage}
                       contentFit="cover"
                     />
                   </View>

                   {/* Right Side - Order Details and Actions */}
                   <View style={styles.orderDetailsContainer}>
                     {/* Top Section - Name, Date, Price, Items */}
                     <View style={styles.orderHeader}>
                       <View style={styles.orderInfoLeft}>
                         <Text style={styles.orderName}>{order.name}</Text>
                         <Text style={styles.orderDateTime}>
                           {order.date}, {order.time}
                         </Text>
                         {/* Status for Completed orders */}
                         {order.status === 'delivered' && (
                           <View style={styles.statusContainer}>
                             <Ionicons
                               name="checkmark-circle"
                               size={16}
                               color={colors.orangeBase}
                             />
                             <Text style={styles.statusText}>Order delivered</Text>
                           </View>
                         )}
                         {/* Status for Cancelled orders */}
                         {order.status === 'cancelled' && (
                           <View style={styles.statusContainer}>
                             <Ionicons
                               name="close-circle"
                               size={16}
                               color="#FF4444"
                             />
                             <Text style={styles.statusText}>Order cancelled</Text>
                           </View>
                         )}
                       </View>
                       <View style={styles.orderInfoRight}>
                         <Text style={styles.orderPrice}>{order.price}</Text>
                         <Text style={styles.orderItems}>{order.items}</Text>
                       </View>
                     </View>

                     {/* Action Buttons - Different for Active vs Completed vs Cancelled */}
                     {activeFilter !== 'Cancelled' && (
                       <View style={styles.orderActions}>
                         {activeFilter === 'Active' ? (
                           <>
                             <TouchableOpacity
                               style={styles.cancelButton}
                               activeOpacity={0.7}
                               onPress={() => router.push('/(screens)/CancelOrder')}
                             >
                               <Text style={styles.cancelButtonText}>Cancel Order</Text>
                             </TouchableOpacity>
                             <TouchableOpacity
                               style={styles.trackButton}
                               activeOpacity={0.7}
                             >
                               <Text style={styles.trackButtonText}>Track Driver</Text>
                             </TouchableOpacity>
                           </>
                         ) : activeFilter === 'Completed' ? (
                           <>
                             <TouchableOpacity
                               style={styles.reviewButton}
                               activeOpacity={0.7}
                               onPress={() => router.push('/(screens)/Review')}
                             >
                               <Text style={styles.reviewButtonText}>Leave a review</Text>
                             </TouchableOpacity>
                             <TouchableOpacity
                               style={styles.orderAgainButton}
                               activeOpacity={0.7}
                             >
                               <Text style={styles.orderAgainButtonText}>Order Again</Text>
                             </TouchableOpacity>
                           </>
                         ) : null}
                       </View>
                     )}
                   </View>
                 </View>
               </View>
             ))}
          </ScrollView>
        ) : (
          <View style={styles.emptyStateContainer}>
            <Image
              source={require('../../assets/images/doc.svg')}
              style={styles.emptyStateImage}
              contentFit="contain"
            />
            <Text style={styles.emptyStateText}>
              You don&apos;t have any {activeFilter.toLowerCase()} orders at this
              time
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

export default Orders

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
  filterContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  filterTab: {
    flex: 1,
    backgroundColor: colors.yellow2,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterTabActive: {
    backgroundColor: colors.orangeBase,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.orangeBase,
  },
  filterTextActive: {
    color: colors.font2,
  },
  ordersList: {
    flex: 1,
  },
  ordersListContent: {
    paddingBottom: 20,
  },
  orderCard: {
    backgroundColor: colors.background,
    borderRadius: 12,
    marginBottom: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.yellow2,
  },
  orderCardContent: {
    flexDirection: 'row',
    padding: 16,
  },
  orderImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.yellow2,
    flexShrink: 0,
    marginRight: 16,
  },
  orderImage: {
    width: '100%',
    height: '100%',
  },
  orderDetailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  orderInfoLeft: {
    flex: 1,
    marginRight: 12,
  },
  orderName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.font,
    marginBottom: 6,
  },
  orderDateTime: {
    fontSize: 14,
    color: colors.font,
    opacity: 0.6,
    marginBottom: 6,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.orangeBase,
  },
  orderInfoRight: {
    alignItems: 'flex-end',
  },
  orderPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.orangeBase,
    marginBottom: 6,
  },
  orderItems: {
    fontSize: 14,
    color: colors.font,
    opacity: 0.6,
  },
  orderActions: {
    flexDirection: 'row',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: colors.orangeBase,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.font2,
  },
  trackButton: {
    flex: 1,
    backgroundColor: colors.yellow2,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.orangeBase,
  },
  reviewButton: {
    flex: 1,
    backgroundColor: colors.orangeBase,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.font2,
  },
  orderAgainButton: {
    flex: 1,
    backgroundColor: colors.yellow2,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderAgainButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.orangeBase,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
    marginBottom: 150,
  },
  emptyStateImage: {
    width: 200,
    height: 200,
  },
  emptyStateText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.orangeBase,
    textAlign: 'center',
    paddingHorizontal: 40,
    lineHeight: 24,
    marginTop: 24,
  },
})
