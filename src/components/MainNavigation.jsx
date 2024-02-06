import { useState } from "react";

import styles from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function MainNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div>
        <img src={logo} alt="Logo" />
      </div>

      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 text-sky-700 lg:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <ul className={menuOpen ? styles.open : ""}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            Home{" "}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/business"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Business{" "}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/politics"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Politics{" "}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/sports"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Sports{" "}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/technology"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Technology{" "}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/food"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Food{" "}
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
