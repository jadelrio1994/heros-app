import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {

    const { user: { name }, dispatch } = useContext(AuthContext)

    const history = useHistory();

    const handleLogout = () => {
        history.replace('/login')
        dispatch({
            type: types.logout
        });
    }

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
                </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <NavLink
                        className="nav-item nav-link"
                        activeClassName="active"
                        exact
                        to="/marvel"
                    >
                        Marvel
                        </NavLink>
                    <NavLink
                        className="nav-item nav-link"
                        activeClassName="active"
                        exact
                        to="/dc"
                    >
                        DC
                        </NavLink>
                    <NavLink
                        className="nav-item nav-link"
                        activeClassName="active"
                        exact
                        to="/search"
                    >
                        Search
                        </NavLink>
                </ul>
                <div className="nav w-100 order-3 ">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item nav-item text-info p-2">
                            {name}
                        </li>

                        <button
                            onClick={handleLogout}
                            className="btn btn-primary"
                        >
                            Logout
                        </button>
                        
                    </ul>
                </div>


            </div>
        </nav>
    )
}