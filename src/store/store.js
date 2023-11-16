import { configureStore } from '@reduxjs/toolkit'
import fight from '../reducers/fight'

export default configureStore({
  reducer: {
    fight
  },
})
