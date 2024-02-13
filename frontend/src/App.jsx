import { useReducer } from 'react'

import { GlobalState, GlobalStateDispatch } from './contexts/GlobalContext'
import { GlobalReducer, initialState } from './reducers/GlobalReducer'

import RoutesComponent from './components/RoutesComponent'



export default function App() {
  const [state, dispatch] = useReducer(GlobalReducer, initialState)

  return (
    <GlobalState.Provider value={state}>
      <GlobalStateDispatch.Provider value={dispatch}>
        <RoutesComponent />
      </GlobalStateDispatch.Provider>
    </GlobalState.Provider>
  )
}