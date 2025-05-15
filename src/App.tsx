import './init'
import './App.css'
import * as Home from './feature/Home'
import React from 'react'
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
import alliumTheme from '@telus-uds/theme-allium'
import {BaseProvider} from '@telus-uds/components-web'

function App() {
  return (
    <React.StrictMode><Provider store={store}><BaseProvider defaultTheme={alliumTheme}>
      <Home.Ui/>
    </BaseProvider></Provider></React.StrictMode>
  )
}

export default App
