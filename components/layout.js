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
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/ledger.svg" 
          className={styles.logo}
          alt="Talaan logo"
          width={100}
          height={100} 
          style={{transform: `translateY(-${offsetY/3}px)`}}
          />
        <h1 
          style={{transform: `translateY(-${offsetY/3}px)`}}
          className={styles.siteName}>
            talaan
        </h1>
      </header>
      {children}
    </div>
  )
}
export default Layout
