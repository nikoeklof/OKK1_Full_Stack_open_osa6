import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"
import { setNotification } from "./NotificationReducer"

const getId = () => (100000 * Math.random()).toFixed(0)

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload.sort((a, b) => b.votes - a.votes)
    }


  }

})

export const { appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))

  }
}
export const createAnecdote = content => {
  return async dispatch => {
    console.log(content)
    const newAnecdote = await anecdoteService.addAnecdote({ content: content, id: getId(), votes: 0 })
    dispatch(appendAnecdote(newAnecdote))
    
  }
}
export const addVote = content => {

  return async dispatch => {
    const anecdote = content
    const updatedAnecdote = { content: anecdote.content, id: anecdote.id, votes: anecdote.votes + 1 }
    await anecdoteService.addVotes(updatedAnecdote)
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))


  }
}

export default anecdoteSlice.reducer