
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import modeReducer from './modeReducer'
import { configureStore } from '@reduxjs/toolkit'

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, modeReducer)

  export default () => {
    let store = configureStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
  }
  