import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/add">Add Student</Link>
      <br></br>
      <Link to="/search">Search Students</Link>
    </nav>
  );
}

export default Navigation;