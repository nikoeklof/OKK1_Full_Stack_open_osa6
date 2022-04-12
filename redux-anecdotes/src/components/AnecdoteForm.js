import { useState } from "react"
import { useDispatch } from "react-redux"

const AnecdoteForm = () => {

    const dispatch = useDispatch()
    const [anecdote, setAnecdote] = useState('')


    const updateInput = (e) => {
        setAnecdote(e.target.value)
    }


    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                dispatch({ type: 'anecdotes/createAnecdote', payload: anecdote })
                dispatch({ type: "notification/setNotification", payload: `created: ${anecdote}` })
                setAnecdote("")
            }}>
                <div><input value={anecdote} onChange={updateInput} /></div>
                <button>create</button>
            </form>


        </div >
    )
}
export default AnecdoteForm