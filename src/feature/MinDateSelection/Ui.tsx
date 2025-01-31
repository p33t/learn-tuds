import {useAppDispatch, useAppSelector} from "../../app/hooks"
import * as redux from "./redux"
import {DatePicker, DatePickerProps} from "@telus-uds/components-web";
import {useState} from "react";

/** Selects the API Key for calling TMK */
export const Ui = () => {
  const dispatch = useAppDispatch()
  const selected = useAppSelector(redux.selectSelected)
  const [date, setDate] = useState()
  const dpProps: DatePickerProps = {
    id: 'datePicker', // This is a required field, and it would be nice if this caused errors when commented out
    label: 'Date Picker',
    dateFormat: 'YYYY-MM-DD',
    tooltip: "the tooltip",
    date,
    onChanged: setDate,
    isDayDisabled: () => false
  }
  return (
    <span>

    <label htmlFor="minDate">Min Date: </label>
    <input type="date" name="minDate" id="minDate"
           onChange={evt => dispatch(redux.selectDateMillis(evt.target.valueAsNumber))} value={selected}/>
    <DatePicker {...dpProps}/>
  </span>
  )
}
