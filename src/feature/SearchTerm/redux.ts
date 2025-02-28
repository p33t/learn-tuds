import type {PayloadAction} from "@reduxjs/toolkit"
import {createAppSlice} from "../../app/createAppSlice"

export interface SliceState {
  term: string
}

export const initialStateFn: () => SliceState = () => ({
  term: ""
})

export const slice = createAppSlice({
  name: "searchTerm",
  initialState: initialStateFn,
  reducers: create => ({
    /** Changes the search term used for querying */
    assignSearchTerm: create.reducer((state, action: PayloadAction<string>) => {
      state.term = action.payload //.trim() // TODO: This 'trim' is a problem when typing
    })
  }),
  selectors: {
    selectSearchTerm: state => state.term,
  },
})

export const {
  /** @see slice.actions.assignSearchTerm */
  assignSearchTerm
} = slice.actions

export const { selectSearchTerm } = slice.selectors
