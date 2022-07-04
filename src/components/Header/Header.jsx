import './styles.css';
import logo from './logo.png'; 

function Header(){
    return(
        <header id="header">
            <nav className='nav-bar'>
                <div class="menu-wraper">
                    <input type="checkbox" id="menu"/>
                    <label for="menu"  class="linhas">
                        <div class="linha"></div>
                        <div class="linha"></div>
                        <div class="linha"></div>
                    </label>               
                </div>
                <img src={logo} alt="space-news logo" id='logo' />
                <ul className="nav-list">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Sobre</a>
                    </li>
                </ul>
            </nav>
            <h1 id='main-title'>The 10 importants news about the Space</h1>
        </header>

    )
}

export default Header