import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from '../reducers/anecdoteReducer'
import notificationReducer from '../reducers/NotificationReducer'

const store = configureStore({
    reducer: {
        anecdote: anecdoteReducer,
        notification: notificationReducer
    }
})


export default store