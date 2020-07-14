const initialState = null

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEW_NOTIFICATION':
      state = action.data.message
      return state
    case 'REMOVE_NOTIFICATION':
      state = null
      return state
  default:
    return state
  }
}

export const addNotification = (message) => {
  return {
    type: 'NEW_NOTIFICATION',
    data: {
      message
    }
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION',
  }
}

export default reducer