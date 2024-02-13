import { useContext, useEffect } from 'react'

import { GlobalStateDispatch } from '../contexts/GlobalContext'



export const useDetectPage = (page) => {
  const dispatch = useContext(GlobalStateDispatch)

  useEffect(() => {
    if (page !== '') {
      dispatch({ type: 'set-page', payload: page })
    }
  }, [])
}