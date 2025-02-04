import {TextInput} from "@telus-uds/components-web";
import * as redux from "./redux"
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";

/** Selects the API Key for calling TMK */
export const Ui = () => {
  const dispatch = useAppDispatch()
  const searchTerm = useAppSelector(redux.selectSearchTerm)
  
  return (
      <TextInput id="searchTerm"
          label="Search Term"
          hint="Filters the results"
          hintPosition="below"
          tooltip="Min 3 chars"
          value={searchTerm}
          // onChange={searchTermOnChange}
          onChange={(value: any) => dispatch(redux.assignSearchTerm(value))}
      />
  )
}
