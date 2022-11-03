function Login({ user, setUser, onClick }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div className="login container">
            <form className="row g-3">
                <h3>Login</h3>
                <input
                    className="form-control"
                    placeholder="User" type="text"
                    name="name"
                    onChange={handleChange}
                />
                <input
                    className="form-control"
                    placeholder="Email" type="text"
                    name="email"
                    onChange={handleChange}
                />
                <div className="text-center">
                    <button
                        className="btn btn-dark"
                        data-bs-dismiss="modal"
                        onClick={onClick}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login