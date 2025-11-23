import React from "react";
import { useSelector } from "react-redux";
import { getCurrentYear, getFooterCopy } from "../../utils/utils";

function Footer() {
  // Récupération de l'état auth dans le store Redux
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  return (
    <footer className="App-footer text-center text-sm border-t-4 border-[var(--main-color)] mt-10 py-4 text-gray-600">
      <p>
        Copyright {getCurrentYear()} - {getFooterCopy(true)}
      </p>

      {/* Afficher "Contact us" uniquement si l'utilisateur est connecté */}
      {isLoggedIn && user && (
        <p>
          <a href="#contact">Contact us</a>
        </p>
      )}
    </footer>
  );
}

export default Footer;
