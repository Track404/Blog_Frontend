import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import image from '../assets/image.png';
function Login() {
  useEffect(() => {
    fetch('http://localhost:3000/user', { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <div className="container">
        <div className="rightPage">
          <div>
            <h2>Log In to BlogApi</h2>
          </div>
          <div>
            <form id="registerForm" action="/users">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  placeholder="email"
                  type="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" required />
              </div>

              <button>Sign Up</button>
            </form>
          </div>
          <Link to="/">Go to Homepage</Link>
          <Link to="/register">Sign Up</Link>
        </div>
        <div className="leftPage">
          <img src={image} alt="image" id="registerImg" />
        </div>
      </div>
    </>
  );
}

export default Login;
