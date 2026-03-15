import reactLogo from './assets/react.svg'

function NAV() {
  return (
    <nav>
      <ul className='nav-list'>
      <li className='nav-items'><a href="#">Pricing</a></li>
       <li className='nav-items'><a href="#">About</a></li>
      <li className='nav-items'><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default function Header() {
  return (
   <header className="header">
    <img src={reactLogo} alt="React Logo" width='100'/>
    <NAV/>
   </header>
  )
}
