import {createSlice, Dispatch} from '@reduxjs/toolkit'
import type {RootState} from '../../app/store'

// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
}

export const characterSlice = createSlice({
  name: 'character',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    update: (state) => {

    },
  },
})

export const { update } = characterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.character.value

export function fetchCharacter(id: string) {
  return async function fetchCharacterThunk(dispatch: Dispatch) {

  }
}

export default characterSlice.reducer