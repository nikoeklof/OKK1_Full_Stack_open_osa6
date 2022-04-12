import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdote)
    const dispatch = useDispatch()

    return (
        <ul>
            {anecdotes.map(anecdote =>
                <li key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => {
                            dispatch({ type: 'anecdotes/vote', payload: anecdote.id });
                            dispatch({ type: 'notification/setNotification', payload: `You voted: ${anecdote.content}`  })
                        }}>vote</button>
                    </div>
                </li >
            )
            }
        </ul >

    )
}

export default AnecdoteList