import { useDispatch, useSelector } from "react-redux";
import { navbarStateActions } from "../state/navbarState";
import { NavLink } from "react-router-dom";

import styles from "./MainNavigation.module.css";
import logo from "../assets/logo.png";

export default function MainNavigation() {
  const dispatch = useDispatch();

  const show = useSelector((state) => state.menuList.showMenu);

  const toggleMenuHandler = () => {
    dispatch(navbarStateActions.toggleMenu());
  };

  return (
    <header>
      <div>
        <img src={logo} alt="Logo" className="h-12" />
      </div>

      <div className="menu" onClick={toggleMenuHandler}>
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

      <ul className={show ? styles.open : ""}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
            onClick={toggleMenuHandler}
          >
            Home{" "}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/business"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            onClick={toggleMenuHandler}
          >
            Business{" "}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/politics"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            onClick={toggleMenuHandler}
          >
            Politics{" "}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/sports"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            onClick={toggleMenuHandler}
          >
            Sports{" "}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/technology"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            onClick={toggleMenuHandler}
          >
            Technology{" "}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/food"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            onClick={toggleMenuHandler}
          >
            Food{" "}
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
