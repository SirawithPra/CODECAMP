// src/components/Navbar.tsx
'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const pathname = usePathname();  // ใช้ usePathname เพื่อดึง path ปัจจุบัน

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={pathname === '/' ? styles.active : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === '/about' ? styles.active : ''}>
          <Link href="/about">About</Link>
        </li>
        <li className={pathname === '/projects' ? styles.active : ''}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={pathname === '/contact' ? styles.active : ''}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
