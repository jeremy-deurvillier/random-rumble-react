import { configureStore } from '@reduxjs/toolkit'
import { fightReducer as fight } from '../reducers/fight'

export default configureStore({
  reducer: {
    fight
  },
})
