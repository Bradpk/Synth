'use client';
import styles from './navbar.module.css'
import Link from 'next/link';

function Navbar(){
    return(
        <>
        <ul className={styles.navItems}>
            <li><Link href="/piano">Piano</Link></li>
        </ul>
        </>

    )
}

export default Navbar