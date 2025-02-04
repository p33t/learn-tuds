import {beforeEach, describe, expect} from "vitest";
import type {AppStore} from "../../app/store"
import {makeStore} from "../../app/store"
import * as subject from "./redux"

interface LocalTestContext {
  store: AppStore
}

describe<LocalTestContext>("SearchTerm.redux", it => {
  beforeEach<LocalTestContext>(context => {
    const initialState: subject.SliceState = subject.initialStateFn()

    context.store = makeStore({searchTerm: initialState})
  })

  it("should handle initial state", () => {
    expect(subject.slice.reducer(undefined, { type: "unknown" })).toStrictEqual({
      searchTerm: ""
    })
  })  
  
  it("should modify it's state using the action", () => {
    const previousState = subject.initialStateFn()
    const someTerm = "bruce"
    expect(subject.slice.reducer(previousState, subject.assignSearchTerm(someTerm))).toStrictEqual({
      searchTerm: someTerm
    })
  })  
})
