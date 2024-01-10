import {AiFillCheckCircle} from 'react-icons/ai'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  ;<ul className="app-container">
    <Notification>
      <AiFillCheckCircle className="success" />
      <h1>Success</h1>
      <p>You can accesses all the files in the folder</p>
    </Notification>
  </ul>
}

export default AlertNotifications
