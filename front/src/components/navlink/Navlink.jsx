import { NavLink as NavLinkDom } from "react-router-dom";
import styles from './NavLink.module.css'

function NavLink({to, children, ...props}){

    return (
        <NavLinkDom 
            {...props}
            to={to}
            className={({isActive})=> (isActive ? styles.isActive : undefined)}
            >
                {children}
        </NavLinkDom>
    )
}

export default NavLink;