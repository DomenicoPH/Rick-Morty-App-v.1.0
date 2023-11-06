import styles from "./Nav.module.css";
import SearchBar from "../searchbar/SearchBar";
import NavLink from "../navlink/Navlink";
import rmlogo from '../../assets/img/rmlogo.png'

function Nav({onSearch}) {
  return (
    <div className={styles.container}><div className={styles.containerLogo}>
        <img src={rmlogo} alt="Logo Rick & Morty" />
        <h1 className={styles.logo}>Rick <span className={styles.logoSpan}>and</span> Morty</h1>
    </div>

            <div>
        
                <NavLink to='/home'>
                    <button className={styles.navButton}>Home</button>
                </NavLink>

                <NavLink to='/favorites'>
                    <button className={styles.navButton}>Favorites</button>
                </NavLink>

                <NavLink to='/about'>
                    <button className={styles.navButton}>About</button>
                </NavLink>
                
            </div>

            <SearchBar onSearch={onSearch} />


        </div>
  );
}

export default Nav;
