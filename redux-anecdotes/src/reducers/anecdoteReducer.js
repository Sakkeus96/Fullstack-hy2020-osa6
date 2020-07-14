
const reducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnect = {
        ...anecdoteToChange, votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnect).sort((a, b) => b.votes - a.votes)
    case 'NEW_ANECDOTE':
      return [...state, action.content]
    case 'INIT_ANECDOTES':
      return action.data
  default:
    return state
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    content
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

export default reducer