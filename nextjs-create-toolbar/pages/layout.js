import styles from '@/styles/Layout.module.css';
import Link from 'next/link';

function Layout({children}) {
    return (
        <div className={styles.container}>
            <ul>
                <li>
                    <Link href='/home'>Home</Link>
                </li>
                <li>
                    <Link href='/blog'>Blog</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}

export default Layout
