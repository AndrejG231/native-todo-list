import React from "react"
import { Todos } from "./pages/Todos"
import { Provider } from "react-redux"
import { store } from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  )
}

export default App
