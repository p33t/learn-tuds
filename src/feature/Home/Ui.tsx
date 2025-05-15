import {useState} from "react";
import viteLogo from "/vite.svg";
import reactLogo from "../../assets/react.svg";
import * as MinDateSelection from "../MinDateSelection";
import * as SearchTerm from "../SearchTerm";
import * as PetList from "../PetList";

/** Home page UI */
export const Ui = () => {
    const [count, setCount] = useState(0)

    return (<>
        <div>
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo"/>
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo"/>
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
        <div>
            <MinDateSelection.Ui/>
        </div>
        <div>
            <SearchTerm.Ui/>
        </div>
        <div>
            <PetList.Ui/>
        </div>
    </>)
}
