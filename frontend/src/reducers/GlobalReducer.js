export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case 'test': {
      console.log('Test reducer function success.')
      return { ...state }
    }
    default: {
      console.log(`Undefined reducer action: ${action.type}`)
      return { ...state }
    }
  }
}

export const initialState = {
  
}