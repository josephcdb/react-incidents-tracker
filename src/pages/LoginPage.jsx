export function LoginPage() {
  return (
    <div style={{ display: "grid", gap: "12px", maxWidth: "420px" }}>
      <h1 style={{ margin: 0 }}>Login</h1>

      <p style={{ margin: 0, color: "#555" }}>
        Please enter your credentials to log in.
      </p>

      <div style={{ display: "grid", gap: "8px" }}>
        <label style={{ display: "grid", gap: "4px" }}>
          <span style={{ fontWeight: 700 }}>Email</span>
          <input type="email" placeholder="Enter your email" />
        </label>

        <label style={{ display: "grid", gap: "4px" }}>
          <span style={{ fontWeight: 700 }}>Password</span>
          <input type="password" placeholder="Enter your password" />
        </label>

        <button style={{ padding: "8px 12px", borderRadius: "4px" }}>
            Sign In
        </button>
      </div>
    </div>
  );
}