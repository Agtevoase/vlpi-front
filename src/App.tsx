import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Loader from 'common/loader'

import configureStore from 'boot/configureStore'
import { setStore } from 'services/store'
import Router from 'pages/router'

const App = () => {
  const { persistor, store } = configureStore()

  setStore(store)

  return (
    <PersistGate persistor={persistor} loading={<Loader withSpace />}>
      <Provider store={store}>
        <div className="page">
          <Router />
        </div>
      </Provider>
    </PersistGate>
  )
}

export default App
