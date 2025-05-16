import {Listbox} from "@telus-uds/components-web";
import * as Sidebar from "./index.ts";

/** Sidebar for navigation */
export const Ui = ({baseRoute}: Sidebar.Props) => (
    <div style={{width: "200px"}}>
        <Listbox
            items={[
                {label: "Home", href: `${baseRoute}/`},
                {label: "About", href: `${baseRoute}/about`}
            ]}/>
    </div>
)
