import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const navItems = [
        {
            item: 'Jackets',
            path: '/jackets'
        },
        {
            item: 'Sweaters',
            path: '/sweaters'
        },
        {
            item: 'Dresses',
            path: '/dresses'
        },
        {
            item: 'Skirts',
            path: '/skirts'
        },
        {
            item: 'Pants',
            path: '/pants'
        },
        {
            item: 'Shorts',
            path: '/shorts'
        },
        {
            item: 'Shoes',
            path: '/shoes'
        },
        {
            item: 'Accessories',
            path: '/accessories'
        }

    ]
    return (
        <nav>
           <ul className="nav-items">
               { navItems.map((navItem, index) => (
                   <li key={index} className="nav-item-list">
                       <NavLink to={navItem.path} className="nav-link" activeClassName="active-link">
                           {navItem.item.toUpperCase()}
                       </NavLink>
                   </li>
               ))}
           </ul>
        </nav>
    )
}

export default Navbar
