import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()
  const style = {
    border: 'solid',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    maxWidth: 500
  }
  if (notification !== '') {


    setTimeout(() => {
      dispatch({ type: "notification/setNotification", payload: "" })
    }, 4000)
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }
  else {
    return (
      <div></div>
    )
  }
}

export default Notification