export default function LoginForm() {
    return(
        <div>
            <h2>Login</h2>
            <form className="loginForm">
            <div className="formGroup">
                <label>Username</label>
                < input type="text" placeholder="username" />
            </div>
            <div className="formGroup">
                <label>Password</label>
                < input type="text" placeholder="password" />
            </div>
            <button className="loginBtn"> Login </button>
            </form>
        </div>
    )
}