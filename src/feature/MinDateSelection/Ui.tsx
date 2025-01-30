import {useAppDispatch, useAppSelector} from "../../app/hooks"
import * as redux from "./redux"
import {DatePicker} from "@telus-uds/components-web";
import {useState} from "react";

/** Selects the API Key for calling TMK */
export const Ui = () => {
  const dispatch = useAppDispatch()
  const selected = useAppSelector(redux.selectSelected)
  const [date, setDate] = useState()
  return (
    <span>

    <label htmlFor="minDate">Min Date: </label>
    <input type="date" name="minDate" id="minDate"
           onChange={evt => dispatch(redux.selectDateMillis(evt.target.valueAsNumber))} value={selected}/>
    <DatePicker id="datePicker" label="Date Picker" dateFormat="YYYY-MM-DD" date={date} 
                onDateChange={setDate}/>
  </span>
  )
}
