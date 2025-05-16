import * as Sidebar from "./index.ts";
import {Link} from "react-router-dom";

/** Sidebar for navigation */
export const Ui = ({baseRoute}: Sidebar.Props) => (
    <div style={{width: "200px"}}>
        <Link to={`${baseRoute}/`}>Home</Link><br/>
        <Link to={`${baseRoute}/about`}>About</Link><br/>
        
        {/*Need to switch to LinkRouter technique to avoid page reloads but don't know how*/}
        {/*import {Listbox} from "@telus-uds/components-web";*/}
        {/*<Listbox*/}
        {/*    items={[*/}
        {/*        {label: "Home", href: `${baseRoute}/`},*/}
        {/*        {label: "About", href: `${baseRoute}/about`}*/}
        {/*    ]}/>*/}
    </div>
)
