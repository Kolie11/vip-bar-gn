import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("fr");

  return (
    <>
      <header className="h-20 w-full bg-dark-bg border-b border-dark-border flex justify-between items-center px-6">
        <h1 className="text-gold text-2xl font-bold tracking-wider">VIP Bar</h1>

        {/* Links desktop - caché sur mobile */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="text-white hover:text-gold transition">
            Accueil
          </Link>
          <Link to="/galerie" className="text-white hover:text-gold transition">
            Galerie
          </Link>
          <Link
            to="/reservation"
            className="text-white hover:text-gold transition"
          >
            Réservations
          </Link>
          <Link to="/contact" className="text-white hover:text-gold transition">
            Contact
          </Link>
          <Link to="/about" className="text-white hover:text-gold transition">
            À Propos
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <div>
            <button
              className="cursor-pointer px-6 text-black bg-gold py-2 rounded transition"
              style={{ transition: "all 0.3s" }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "var(--gold-light)")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "var(--gold)")
              }
            >
              {" "}
              Réserver une Table
            </button>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => setSelectedLang("fr")}
              className={`px-6 py-1 border border-gold rounded cursor-pointer ${selectedLang === "fr" ? "bg-gold text-black" : "text-gold"}`}
            >
              FR
            </button>
            <button
              onClick={() => setSelectedLang("en")}
              className={`px-6 py-1 border border-gold rounded cursor-pointer ${selectedLang === "en" ? "bg-gold text-black" : "text-gold"}`}
            >
              EN
            </button>
          </div>
          <button
            size={24}
            className="md:hidden text-gold cursor-pointer transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Menu mobile - EN DEHORS du header */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-card border-b border-dark-border p-4 flex flex-col gap-4">
          <Link
            to="/"
            className="text-white hover:text-gold transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            to="/galerie"
            className="text-white hover:text-gold transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Galerie
          </Link>
          <Link
            to="/reservation"
            className="text-white hover:text-gold transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Réservations
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gold transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gold transition"
            onClick={() => setIsMenuOpen(false)}
          >
            À Propos
          </Link>

          <div className="flex gap-2 pt-4 border-t border-dark-border">
            <button
              onClick={() => setSelectedLang("fr")}
              className={`px-3 py-1 border border-gold rounded cursor-pointer ${selectedLang === "fr" ? "bg-gold text-black" : "text-gold"}`}
            >
              FR
            </button>
            <button
              onClick={() => setSelectedLang("en")}
              className={`px-3 py-1 border border-gold rounded cursor-pointer ${selectedLang === "en" ? "bg-gold text-black" : "text-gold"}`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
