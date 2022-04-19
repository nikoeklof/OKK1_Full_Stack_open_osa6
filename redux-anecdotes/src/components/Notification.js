import { useSelector } from "react-redux"
import { connect } from "react-redux"


const Notification = () => {
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    maxWidth: 500
  }
  if (notification !== "") {
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }
  return (
    <div></div>
  )



}


export default Notification