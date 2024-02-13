export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case 'test': {
      console.log('Test reducer function success.')
      return { ...state }
    }
    case 'set-page': {
      return { ...state, currentPage: action.payload }
    }
    default: {
      console.log(`Undefined reducer action: ${action.type}`)
      return { ...state }
    }
  }
}

export const initialState = {
  currentPage: 'home'
}