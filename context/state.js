import { createContext, useContext } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
  return (
    <AppContext.Provider value={{ fish: 'fishy' }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}