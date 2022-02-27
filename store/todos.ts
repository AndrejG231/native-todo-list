import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type TodoState = {
  todos: string[]
}

const initialState: TodoState = {
  todos: [],
}

export const todosSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.todos.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1)
    },
    clear: (state) => {
      state.todos = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, clear } = todosSlice.actions

export default todosSlice.reducer
