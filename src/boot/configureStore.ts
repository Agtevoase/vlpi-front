import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import rootReducer from 'store'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancer = composeWithDevTools(
  compose(applyMiddleware(thunk, logger)),
)

const configureStore = () => {
  const store = createStore(persistedReducer, composedEnhancer)
  const persistor = persistStore(store)

  return { persistor, store }
}

export default configureStore
