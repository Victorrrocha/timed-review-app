import React from 'react'
import Logo from './Logo'
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className="flex full-width align-center header">
            <Logo />

            <nav>
                <ul className={styles.nav_items}>
                    <li>Home</li>
                    <li>New</li>
                    <li>Notes</li>
                    <li>Logout</li>
                </ul>
            </nav>
        </div>
    )
}
