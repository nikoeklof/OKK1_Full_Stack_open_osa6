
let oldTimeout

const reducer = (state = "", action) => {
    switch (action.type) {
        case 'SET_NOTE':
            return action.data
        case 'REMOVE_NOTIFICATION':
            return ""
        default: return state
    }
}

export const removeNotification = () => {
    return { type: "REMOVE_NOTIFICATION" }

}
export const setNotification = (content) => {
    let time = content.time * 1000
    return dispatch => {
        clearTimeout(oldTimeout)
        dispatch({
            type: 'SET_NOTE',
            data: content.message
        })
        oldTimeout = setTimeout(() => dispatch(removeNotification()), time)

    }
}
export default reducer