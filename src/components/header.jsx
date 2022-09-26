import Link from 'next/link';

let Header = ()=>{
    return(
        <header className="header">
            <div className="container">
                <nav className="header_nav d-flex align-center justify-between">
                    <div className="logo">
                        <h1>
                            <Link href="/">
                                <a>
                                     Novagems
                                </a>
                            </Link>
                        </h1>
                    </div>
                    <ul className="nav_list d-flex align-center">
                        <li>
                            <Link href="login">
                                <a className="cta cta-light">
                                    Log In
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="signup">
                                <a className="cta cta-light">
                                    Sign Up
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;