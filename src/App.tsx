import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Loader from 'common/loader'

import configureStore from 'boot/configureStore'
import { setStore } from 'services/store'


import Button, { ButtonType } from 'components/button'
import FailIcon from 'components/icons/fail'
import OkIcon from 'components/icons/ok'
import Mark from 'components/mark'
import TextInput from './components/inputs/text'




const App = () => {
    const { persistor, store } = configureStore()

    setStore(store)

    return (
        <PersistGate persistor={persistor} loading={<Loader withSpace />}>
            <Provider store={store}>

                <div className="page" />
            </Provider>
        </PersistGate>
    )
}

export default App
