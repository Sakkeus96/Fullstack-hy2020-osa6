import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { addNotification, removeNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'


const NewAnecdote = (props) => {
  const dispatch = useDispatch()
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    const message = `You created '${content}'`
    event.target.anecdote.value = ''
    const NewAnecdote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(NewAnecdote))
    dispatch(addNotification(message))
    setTimeout(() => {
      dispatch(removeNotification())}, 5000)
  }
  
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default NewAnecdote