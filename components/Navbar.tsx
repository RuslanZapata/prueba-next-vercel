import React from 'react'
import styles from './Navbar.module.css'
import ActiveLink from './ActiveLink';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(({text, href})=> <ActiveLink key={href} text={text} url={href} /> )
      }
        {/* <ActiveLink text="Home" url="/" />
        <ActiveLink text="About" url="/about" />
        <ActiveLink text="Contact" url="/contact" /> */}
    </nav>
  )
}

export default Navbar