import {useAppDispatch, useAppSelector} from "../../app/hooks"
import * as redux from "./redux"

/** Selects the API Key for calling TMK */
export const Ui = () => {
  const dispatch = useAppDispatch()
  const selected = useAppSelector(redux.selectSelected)
  return (
    <span>

    <label htmlFor="minDate">Min Date: </label>
    <input type="date" name="minDate" id="minDate"
           onChange={evt => dispatch(redux.selectDateMillis(evt.target.valueAsNumber))} value={selected}/>
  </span>
  )
}
