import './styles.css';

function Header(){
    return(
        <header id="header">
            <nav>
                <img src="" alt="space-news logo" />

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