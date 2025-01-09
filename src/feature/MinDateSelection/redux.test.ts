import {beforeEach, describe, expect} from "vitest";
import type {AppStore} from "../../app/store"
import {makeStore} from "../../app/store"
import * as subject from "./redux"

interface LocalTestContext {
  store: AppStore
}

describe<LocalTestContext>("MinDateSelection.redux", it => {
  beforeEach<LocalTestContext>(context => {
    const initialState: subject.SliceState = subject.initialStateFn()

    context.store = makeStore({minDateSelection: initialState})
  })

  it("should handle initial state", () => {
    expect(subject.slice.reducer(undefined, { type: "unknown" })).toStrictEqual({
      selected: subject.startOfYesterday().toISOString().substring(0, 10)
    })
  })  
  
  it("should modify it's state using the action", () => {
    const previousState = subject.initialStateFn()
    const someDate = new Date(2025, 1, 8);
    expect(subject.slice.reducer(previousState, subject.selectDateMillis(someDate.getTime()))).toStrictEqual({
      selected: someDate.toISOString().substring(0, 10)
    })
  })  
})
