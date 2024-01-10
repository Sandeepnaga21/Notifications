import './index.css'

const Notification = props => {
  const {childern} = props
  console.log(props)
  return <li className="list-container">{childern}</li>
}

export default Notification
