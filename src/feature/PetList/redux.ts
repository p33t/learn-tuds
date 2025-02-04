import type {PayloadAction} from "@reduxjs/toolkit"
import {createAppSlice} from "../../app/createAppSlice"
import {FindPetsByStatusApiArg} from "../../middleware/petstore-client/generated.ts";

export interface SliceState {
  petStatusArr: FindPetsByStatusApiArg['status']
}

export const initialStateFn: () => SliceState = () => ({
  petStatusArr: []
})

export const slice = createAppSlice({
  name: "searchTerm",
  initialState: initialStateFn,
  reducers: create => ({
    /** Changes the petStatus list used for querying */
    assignPetStatusArr: create.reducer((state, action: PayloadAction<SliceState['petStatusArr']>) => {
      state.petStatusArr = [...action.payload]
    })
  }),
  selectors: {
    selectPetStatus: state => state.petStatusArr,
  },
})

export const {
  /** @see slice.actions.assignPetStatus */
  assignPetStatusArr
} = slice.actions

export const { selectPetStatus } = slice.selectors
