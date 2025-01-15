import reactLogo from '../assets/react.svg'
import '../css/Navbar.css'

export default function Navbar() {
    return <header>
        <nav id='navbar'>
            <a href="https://vite.dev" target="_blank">
                <img src={reactLogo} className="logo" alt="Vite logo" />
            </a> 
            <h1>ReactFacts</h1>
        </nav>
    </header>
}