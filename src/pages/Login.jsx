import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <form action="/login" method="POST">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" placeholder="email" type="email" />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" name="confirmPassword" type="password" />

          <button>Log In</button>
        </form>
      </div>
      <Link to="/">Go to HomePage</Link>
      <Link to="/register">Register</Link>
    </>
  );
}

export default Login;
