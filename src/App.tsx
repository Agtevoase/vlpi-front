import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Loader from 'common/loader'

import configureStore from 'boot/configureStore'
import { setStore } from 'services/store'
import TaskIcon from 'components/icons/task'
import Block, { BlockType } from 'components/block'
import Examples from 'Examples'

const App = () => {
  const { persistor, store } = configureStore()

  setStore(store)

  return (
    <PersistGate persistor={persistor} loading={<Loader withSpace />}>
      <Provider store={store}>
        <Examples/>
        <div className="page" />
      </Provider>
    </PersistGate>
  )
}

export default App
