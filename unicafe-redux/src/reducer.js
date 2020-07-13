const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOOD':
      const changeState = {...state, good: state.good + 1}
      return changeState
    case 'OK':
      const changeState1 = {...state, ok: state.ok + 1}
      return changeState1
    case 'BAD':
      const changeState2 = {...state, bad: state.bad + 1}
      return changeState2
    case 'ZERO':
      const changeState3 = {...state, good: 0, bad: 0, ok: 0}
      return changeState3
    default: return state
  }
  
}

export default counterReducer