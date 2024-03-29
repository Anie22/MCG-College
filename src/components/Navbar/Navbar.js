import './Navbar.css';

function Navbar() {
    return (
        <header className="header w-10 sticky-top shadow-2lg bg-light py-2 pb-2">
            <nav className="navbar p-2">
                <div className=''>
                    <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar' >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='offcanvas offcanvas-end' tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
                        <div className='offcanvas-header'>
                            <button className='btn-close' type='button' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                        </div>
                        <div className='offcanvas-body'>
                            <ul>
                                <li>kkkk</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;