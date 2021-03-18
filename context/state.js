import { createContext, useContext, useReducer } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
  let initialState = {
    darkMode: false,
    name: ''
  }

  let reducer = (state, action) => {
    if (action.type === "TOGGLE_DARK_MODE") {
      return { ...state, darkMode: !state.darkMode }
    } else if (action.type === "SET_NAME") {
      return { ...state, name: action.value }
    }
  }

  let [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}