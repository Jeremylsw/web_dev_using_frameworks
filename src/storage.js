// storage.js
import { configureStore } from '@reduxjs/toolkit'
import entityReducer from './entityReducer.js'

export default configureStore({
  reducer: {
    // Register reducers here
    entity: entityReducer
  }
})