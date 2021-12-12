import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Loader from 'common/loader'

import configureStore from 'boot/configureStore'
import { setStore } from 'services/store'
import Examples from 'Examples'
import NavBar from 'common/navBar'

const App = () => {
  const { persistor, store } = configureStore()

  setStore(store)

  return (
    <PersistGate persistor={persistor} loading={<Loader withSpace />}>
      <Provider store={store}>
        <NavBar userName='John Smith'/>
        <Examples />
        <div className="page" />
      </Provider>
    </PersistGate>
  )
}

export default App
