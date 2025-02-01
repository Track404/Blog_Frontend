import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <div>
        <h1>Register</h1>
      </div>
      <div>
        <form action="/users" method="POST">
          <label htmlFor="username">userName</label>
          <input
            id="username"
            name="username"
            placeholder="username"
            type="text"
          />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" placeholder="email" type="email" />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" name="confirmPassword" type="password" />

          <button>Sign Up</button>
        </form>
      </div>
      <Link to="/">Go to Homepage</Link>
      <Link to="/login">Log In</Link>
    </>
  );
}

export default Register;
