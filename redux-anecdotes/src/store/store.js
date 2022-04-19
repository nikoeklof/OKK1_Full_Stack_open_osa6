import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from '../reducers/anecdoteReducer'
import NotificationReducer from '../reducers/NotificationReducer'


const store = configureStore({
    reducer: {
        anecdote: anecdoteReducer,
        notification: NotificationReducer
    }
})


export default store