function Navbar({ user, setCoinId }) {
    

    return (
        <header className="navbar">
            <span className="navbar__logo">
                Crypto Currency
            </span>
            {user
                ?
                <span className="navbar__user-info">{user}</span>
                :
                <span className="navbar__login"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setCoinId("Login")}
                >
                    Login
                </span>
            }
        </header>
    )
}

export default Navbar;