import './init'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as MinDateSelection from './feature/MinDateSelection'
import * as SearchTerm from './feature/SearchTerm'
import * as PetList from './feature/PetList'
import React from 'react'
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
import alliumTheme from '@telus-uds/theme-allium'
import {BaseProvider} from '@telus-uds/components-web'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.StrictMode><Provider store={store}><BaseProvider defaultTheme={alliumTheme}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        <MinDateSelection.Ui/>
      </p>
      <p>
        <SearchTerm.Ui/>
      </p>
      <p>
        <PetList.Ui/>
      </p>
    </BaseProvider></Provider></React.StrictMode>
  )
}

export default App
