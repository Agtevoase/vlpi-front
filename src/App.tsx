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

                <Button text="Login" type={ButtonType.Primary} onClick={() => {
                    console.log("f")
                }} />

                <Button text="Danger Button" type={ButtonType.Danger} onClick={() => {
                    console.log("f")
                }} />

                <Button text="Login" type={ButtonType.Success} onClick={() => {
                    console.log("f")
                }} />

                <Button text="Login" type={ButtonType.Secondary} onClick={() => {
                    console.log("f")
                }} />

                <Button text="Login" type={ButtonType.Light} onClick={() => {
                    console.log("f")
                }} />

                <Button text="Login" type={ButtonType.GhostLight} onClick={() => {
                    console.log("f")
                }} />

                <Mark markValue={30} minMark={30}/>
                <Mark markValue={29} minMark={30}/>

                <FailIcon />
                <OkIcon />
                <TextInput t={undefined} placeholder="example@mail.com" />

                <div className="page" />
            </Provider>
        </PersistGate>
    )
}

export default App
