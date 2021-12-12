import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Loader from 'common/loader'

import configureStore from 'boot/configureStore'
import { setStore } from 'services/store'
import TaskIcon from 'components/icons/task'

const App = () => {
  const { persistor, store } = configureStore()

  setStore(store)

  return (
    <PersistGate persistor={persistor} loading={<Loader withSpace />}>
      <Provider store={store}>
        <TaskIcon taskNumber={1}/>
        <TaskIcon taskNumber={2}/>
        <TaskIcon taskNumber={3}/>
        <TaskIcon taskNumber={4}/>
        <div className="page" />
      </Provider>
    </PersistGate>
  )
}

export default App
