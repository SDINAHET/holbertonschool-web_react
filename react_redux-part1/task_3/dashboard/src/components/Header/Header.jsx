import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import holbertonLogo from "../../assets/holberton-logo.jpg";

function Header() {
  const dispatch = useDispatch();

  // On lit le state auth via Redux
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  // Handle logout: déclenche simplement l'action
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="App-header">
      <img src={holbertonLogo} className="App-logo" alt="Holberton logo" />
      <h1>School dashboard</h1>

      {isLoggedIn && user && (
        <section id="logoutSection">
          <p>
            Welcome {user.email} (
            <a href="#" onClick={handleLogout}>
              logout
            </a>
            )
          </p>
        </section>
      )}
    </header>
  );
}

export default Header;
