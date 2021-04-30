import styles from '../styles/layout.module.scss'
import {useEffect, useState} from 'react'

const Layout = ({children}) => {
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);
    return ()=> window.removeEventListener('scroll', handleScroll);
  },[])

  return (
    <>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/posts/about">About</a>
      </li>
    </ul>
    <header className={styles.header}>
      <img src="/ledger.svg" 
        className={styles.logo}
        alt="Talaan logo"
        width={100}
        height={100} 
        style={{transform: `translateY(${offsetY/4}px)`}}
        />
      <h1 
        style={{transform: `translateY(${offsetY/4}px)`}}
        className={styles.siteName}>
          _batayan<span className={styles.tld}>.xyz</span>
      </h1>
    </header>
    <div className="container">
      {children}
    </div>
    </>
  )
}
export default Layout
