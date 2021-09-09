import React from 'react'
import Logo from './Logo'
import styles from '../styles/Header.module.css'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className="flex full-width align-center header">
            <Logo />

            <nav>
                <ul className={styles.nav_items}>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/new" >New</Link></li>
                    <li>Notes</li>
                    <li>Logout</li>
                </ul>
            </nav>
        </div>
    )
}
