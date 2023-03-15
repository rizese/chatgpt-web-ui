import React from 'react'
import styles from './LeftNav.module.scss'

const LeftNav = () => {
  return (
    <div className={styles.leftNav}>
      <h2>Contacts</h2>
      <ul>
        <li>John Doe</li>
        <li>Jane Smith</li>
        <li>Bob Johnson</li>
      </ul>
    </div>
  )
}

export default LeftNav
