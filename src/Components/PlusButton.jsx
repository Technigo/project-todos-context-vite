import { Link } from 'react-router-dom'
import '../Styles/button.css'

export const PlusButton = () => {
  return (
    <Link to={'/addnewtask'}>
      <button id="plusButton">+</button>
    </Link>
  )
}
