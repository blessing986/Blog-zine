import { useState } from "react";

import styles from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function MainNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="myLogo">
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
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10 text-sky-700 sm:hidden"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
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
            to="/lifestyle"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            LifeStyle{" "}
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
      </ul>
    </header>
  );
}
