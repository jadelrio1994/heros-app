import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
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
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/login"
                            >
                                Logout
                    </NavLink>
                        </ul>
                    </div>


                </div>
            </nav>
    )
}