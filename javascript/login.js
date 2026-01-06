let isLogin=false;
export function login() {
  if (isLogin) {
    return `
     <div class="register-login-page-wrapper">
      <div class="login-page">
        <div class="register-card">
          <div class="register-title">You don't have an account yet?</div>
          <div class="register-subtitle">Join us and get started</div>
          <button class="register-btn" id="goRegister">Register Now</button>
        </div>

        <div class="login-card">
          <h1>Welcome Back</h1>
          <p>Please login to your account</p>

          <form>
            <input type="text" placeholder="Username or Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
     </div>
    `;
  } else {
    return `
    <div class="register-login-page-wrapper">

      <div class="register-page">
        <div class="register-card">
        
        <form>
        <h1>Create Account</h1>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Register</button>
          </form>
        </div>

        <div class="login-card">
          <div class="register-title">You already have an account?</div>
          <button class="register-btn" id="goLogin">Login Now</button>
        </div>
      </div>
    </div>
    `;
  }
}


export function renderAuth() {
  const app = document.getElementById("app");
  app.innerHTML = login();

  if (isLogin) {
    document.getElementById("goRegister").onclick = () => {
      isLogin = false;   // ✅ updates shared state
      renderAuth();     // ✅ re-render
    };
  } else {
    document.getElementById("goLogin").onclick = () => {
      isLogin = true;
      renderAuth();
    };
  }
}