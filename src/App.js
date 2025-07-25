import React from 'react'
import Body from './components/Body'
import { Provider } from 'react-redux'
import appStore,{ persistor }  from './utils/ReduxStore'
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store ={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <Body/>
      </PersistGate>  
    </Provider>

  )
}

export default App
