import type {PayloadAction} from "@reduxjs/toolkit"
import {createAppSlice} from "../../app/createAppSlice"

export interface SliceState {
  selected: string // ISO formatted string. Cannot use "Date" because not serializable
}

export function startOfYesterday(): Date {
  const now = new Date();
  const oneDayAgo = new Date(now.getTime() - (1000 * 60 * 60 * 24))
  return new Date(oneDayAgo.getFullYear(), oneDayAgo.getMonth(), oneDayAgo.getDate())
}

export const initialStateFn: () => SliceState = () => ({
  selected: startOfYesterday().toISOString().substring(0, 10)
})

export const slice = createAppSlice({
  name: "minDateSelection",
  initialState: initialStateFn,
  reducers: create => ({
    /** Changes the minimum date used for querying */
    selectDateMillis: create.reducer((state, action: PayloadAction<number>) => {
      if (Number.isNaN(action.payload)) {
        // Not a number
        // do nothing
      }
      else {
        state.selected = new Date(action.payload).toISOString().substring(0, 10)
      }
    })
  }),
  selectors: {
    selectSelected: state => state.selected,
  },
})

export const {
  /** @see slice.actions.selectDate */
  selectDateMillis
} = slice.actions

export const { selectSelected } = slice.selectors
