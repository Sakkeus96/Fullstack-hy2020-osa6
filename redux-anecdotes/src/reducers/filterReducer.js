const initialState = ''

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FILTER':
      state = action.data.filter
      return state
  default:
    return state
  }
  }

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    data: {
      filter
    }
  }
}

export default reducer