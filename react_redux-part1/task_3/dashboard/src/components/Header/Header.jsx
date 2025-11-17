import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import holbertonLogo from "../../assets/holberton-logo.jpg";

function Header() {
  const dispatch = useDispatch();

  // Récupération de l'état auth dans le store
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleLogout = (e) => {
    // Rend le handler safe pour les tests (e peut être undefined)
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    dispatch(logout());
  };

  return (
    <header className="App-header flex items-center p-6">
      <img src={holbertonLogo} className="h-20 w-20" alt="Holberton logo" />
      <h1 className="text-[var(--main-color)] text-4xl font-bold ml-4">
        School dashboard
      </h1>

      {/* Section logout si isLoggedIn */}
      {isLoggedIn && user && (
        <section id="logoutSection" className="ml-auto text-right">
          <p>
            Welcome {user.email} (
            <a
              href="#"
              onClick={handleLogout}
              style={{ cursor: "pointer", color: "blue" }}
            >
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
