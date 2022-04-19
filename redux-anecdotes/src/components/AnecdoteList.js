import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/NotificationReducer';

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdote)
    const dispatch = useDispatch()

    const voteAnecdote = async (anecdote) => {
        dispatch(addVote(anecdote))
        dispatch(setNotification({ message:`You voted: ${anecdote.content}`, time: 5 }))
    }


    return (
        <ul>
            {anecdotes.map(anecdote =>
                <li key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => voteAnecdote(anecdote)}>vote</button>
                    </div>
                </li >
            )
            }
        </ul >

    )
}

export default AnecdoteList