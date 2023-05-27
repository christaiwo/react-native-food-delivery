import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slices/CartSlice'
import RestaurantSlice from './slices/RestaurantSlice'

export default configureStore({
  reducer: {
    cart: CartSlice,
    restaurant: RestaurantSlice
  },
})