import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Loader from 'common/loader'

import configureStore from 'boot/configureStore'


const App = () => {
  const { persistor, store } = configureStore()

  return (
    <PersistGate persistor={persistor} loading={<Loader withSpace />}>
      <Provider store={store}>
        <div className="page" />
      </Provider>
    </PersistGate>
  )
}

export default App
