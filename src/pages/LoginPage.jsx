export function LoginPage() {
  return (
    <div className="container container--wide">
      <h1 className="container-title">Login</h1>

      <p className="container-description">
        Please enter your credentials to log in.
      </p>

      <div className="container-section container-section--grid">
        <label>
          <span className="container-subtitle">Email</span>
          <input type="email" placeholder="Enter your email" />
        </label>

        <label>
          <span className="container-subtitle">Password</span>
          <input type="password" placeholder="Enter your password" />
        </label>

        <button>Sign In</button>
      </div>
    </div>
  );
}