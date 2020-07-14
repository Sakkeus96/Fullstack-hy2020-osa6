import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { addNotification, removeNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick, filter }) => {
  if (anecdote.content.toLowerCase().includes(filter.toLowerCase()) || filter === '') {
    return (
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={handleClick}>vote</button>
        </div>
      </div>
    )
  }
  else {
    return null
  }
}

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const voteClick = (id, content) => {
    const message = `You voted '${content}'`
    dispatch(voteAnecdote(id))
    dispatch(addNotification(message))
    setTimeout(() => {
      dispatch(removeNotification())}, 5000)
  }
  return (
    anecdotes.map(anect => 
      <Anecdote key={anect.id} anecdote={anect} handleClick={() => voteClick(anect.id, anect.content)} filter={filter} />
    )
  )
}

export default Anecdotes