import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <ul className='flex justify-end'>
        <li className='mr-5'>
          <Link to="/">Home</Link>
        </li>
        <li className='mr-5'>
          <Link to="/about">About</Link>
        </li>
        <li className='mr-5'>
          <Link to="/robotsFriends">RobotsFriends</Link>
        </li>
      </ul>
    </div>
  )
}
export default Nav