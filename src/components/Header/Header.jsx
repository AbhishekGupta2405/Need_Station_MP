import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuth } from "../../store/AuthContext.jsx";

const Header = () => {
  const { user, logout } = useAuth();
  console.log("AuthContext user:", user);

  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <div className={styles.logo}>
            Need<span>Station</span>
          </div>
        </Link>
        <nav className={styles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="#">About Us</Link>
          <Link to="#">Services</Link>
          <Link to="#">Contact Us</Link>
        </nav>
        <div className={styles.authButtons}>
          {user ? (
            <>
              <span className={styles.greeting}>Hello, {user.username}</span>
              <button
                className={styles.logout}
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className={styles.login}>Log in</button>
              </Link>
              <Link to="/signup">
                <button className={styles.signup}>Sign up</button>
              </Link>
              <Link to = "/helper-registration">
              <button className={styles.becomeTasker}>Become a Tasker</button>
              </Link>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
