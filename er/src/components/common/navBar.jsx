import React from 'react';
import { Link,NavLink } from 'react-router-dom';

const NavBar = () => {
    return ( 
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Navbar</Link>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/movies" exact>Movies </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/customers">Customers</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
    </ul>
  </div>
</nav>
     );
}
 
export default NavBar;