import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from 'boot/configureStore'

const App = () => {
  const { persistor, store } = configureStore()

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <div />
      </Provider>
    </PersistGate>
  )
}

export default App
