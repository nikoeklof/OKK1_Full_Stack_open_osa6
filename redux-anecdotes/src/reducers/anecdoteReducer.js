import anecdotesAtStart from "../data/anecdotes"
import { createSlice } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload
      state.push({
        content: content,
        id: getId(),
        votes: 0,

      })
    },
    vote(state, action) {
      const id = action.payload
      const votedAnecdote = state.find(anecdote => anecdote.id === id)
      const changedAnecdote = {
        ...votedAnecdote,
        votes: votedAnecdote.votes + 1
      }

      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote).sort((a, b) => b.votes-a.votes)
    }

  }

})

export const { createAnecdote, vote } = anecdoteSlice.actions
export default anecdoteSlice.reducer