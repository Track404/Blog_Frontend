import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <div>
        <h1>Welcome to the Blog </h1>
      </div>
      <div>
        <h2>Everything start here !</h2>
        <Link to="/login">Log In</Link>
        <Link to="/register">Register</Link>
      </div>
    </>
  );
}

export default HomePage;
