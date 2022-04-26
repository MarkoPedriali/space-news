import './styles.css';
import logo from './logo.png'; 

function Header(){
    return(
        <header id="header">
            <nav className='nav-bar'>
                <img src={logo} alt="space-news logo" />

                <ul className="nav-list">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Sobre</a>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header