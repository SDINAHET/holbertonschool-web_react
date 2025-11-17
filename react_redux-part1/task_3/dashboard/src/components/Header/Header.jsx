import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import holbertonLogo from "../../assets/holberton-logo.jpg";

function Header() {
  const dispatch = useDispatch();

  // Récupération de l'état auth dans le store
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = (e) => {
    // Safe pour les tests qui peuvent appeler sans event
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    dispatch(logout());
  };

  return (
    <header className="App-header">
      <img src={holbertonLogo} className="App-logo" alt="Holberton logo" />
      <h1>School dashboard</h1>

      {/* Section logout si isLoggedIn */}
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
